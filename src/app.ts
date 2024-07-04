import axios from "axios";
import { spawn } from "child_process";
import * as dotenv from "dotenv";
import * as fs from "fs";
import * as semver from "semver";

async function main() {
    dotenv.config();
    const username = process.env.USERNAME;
    console.log(`Hello ${username}!`);
    if (!username) {
        console.error("No username provided");
        return;
    }
    const versions = (await getHugoVersions()).reverse();
    console.log("Hugo versions:", versions);

    let tags = await getDockerTags(`${username}/hugo`);
    console.log("Docker tags:", tags);

    let content = "";

    for (const version of versions) {
        const tag_ext_alpine = `${version.replace("v", "")}-ext-alpine`;
        const tag_ext_debian = `${version.replace("v", "")}-ext-debian`;
        if (semver.gt(semver.coerce(version), '0.115.3')) {
            console.log(`Building hugo:${version}`);

            if (!tags.includes(tag_ext_alpine)) {
                console.log(`-- Building Alpine image`);

                const script = `
                #!/bin/bash

                username=${username}
                builder=builder
                if ! docker buildx ls | grep -q $builder; then
                    docker buildx create --name $builder
                fi
                docker buildx use $builder
                docker buildx inspect --bootstrap
                docker buildx build \\
                -f Dockerfile.alpine \\
                --platform=linux/amd64,linux/arm64,linux/arm/v6,linux/arm/v7 \\
                --build-arg HUGO_VERSION=${version} \\
                -t $username/hugo:${tag_ext_alpine} -t $username/hugo:alpine -t $username/hugo:latest . \\
                --push`;
                console.log(script);
                await cmd("bash", ["-c", script]);
            }
            if (!tags.includes(tag_ext_debian)) {
                console.log(`-- Building Debian image`);

                const script = `
                #!/bin/bash

                username=${username}
                builder=builder
                if ! docker buildx ls | grep -q $builder; then
                    docker buildx create --name $builder
                fi
                docker buildx use $builder
                docker buildx inspect --bootstrap
                docker buildx build \\
                -f Dockerfile.bookworm \\
                --platform=linux/amd64,linux/arm64,linux/arm/v7 \\
                --build-arg HUGO_VERSION=${version} \\
                -t $username/hugo:${tag_ext_debian} -t $username/hugo:debian . \\
                --push`;
                console.log(script);
                await cmd("bash", ["-c", script]);
            }

            while (!tags.includes(tag_ext_alpine) || !tags.includes(tag_ext_debian)) {
                await new Promise(resolve => setTimeout(resolve, 30 * 1000)); // wait 30 seconds
                tags = await getDockerTags(`${username}/hugo`);
            }

            let text =
                `\n` +
                `-   \`${version}\`\n`;
            if (tags.includes(tag_ext_alpine)) {
                text += `    -   \`${tag_ext_alpine}\`, \`alpine\`, \`latest\`\n`;
            }
            if (tags.includes(tag_ext_debian)) {
                text += `    -   \`${tag_ext_debian}\`, \`debian\`\n`;
            }
            content =
                `${text}` +
                `    ${content.replace(", \`alpine\`, \`latest\`", "").replace(", \`debian\`", "")}`;
        }
    }
    console.log("Done building images");

    await updateREADME(`${content}`);
    console.log("Done updating README");
}

async function getHugoVersions(): Promise<string[]> {
    const response = await axios.get("https://api.github.com/repos/gohugoio/hugo/tags");
    if (response.status !== 200) {
        console.error("Failed to get hugo versions");
        return [];
    }
    const tags = response.data;
    return tags.map((tag: any) => tag.name);
}

async function getDockerTags(repo: string): Promise<string[]> {
    let url = `https://hub.docker.com/v2/repositories/${repo}/tags`;
    let tags: string[] = [];

    try {
        while (url) {
            const response = await axios.get(url);
            if (response.status === 200 && response.data.results) {
                tags = tags.concat(response.data.results.map((tag: any) => tag.name));
                url = response.data.next || '';
            } else {
                console.error(response);
                return [];
            }
        }
        return tags;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

function cmd(command: string, args: string[]): Promise<void> {
    return new Promise((resolve, reject) => {
        const process = spawn(command, args, { shell: true });

        process.stdout.on('data', (data) => {
            console.log(data.toString());
        });

        process.stderr.on('data', (data) => {
            console.error(data.toString());
        });

        process.on('close', (code) => {
            if (code === 0) {
                resolve();
            } else {
                reject(new Error(`Process exited with code ${code}`));
            }
        });
    });
}

async function updateREADME(content: string) {
    let readme = fs.readFileSync("README.md", "utf8");
    let before = readme.substring(0, readme.indexOf("<!-- TAGS_START -->") + "<!-- TAGS_START -->".length);
    let after = readme.substring(readme.indexOf("<!-- TAGS_END -->"));
    readme = before + "\n" + content + "\n" + after;
    fs.writeFileSync("README.md", readme);
}

main();
