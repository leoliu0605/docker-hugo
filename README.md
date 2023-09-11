[![Check Hugo Release & Publish to Docker Hub](https://github.com/leoli0605/docker-hugo/actions/workflows/docker-publish.yml/badge.svg)](https://github.com/leoli0605/docker-hugo/actions/workflows/docker-publish.yml)
[![Update Docker Hub Description](https://github.com/leoli0605/docker-hugo/actions/workflows/dockerhub-description.yml/badge.svg)](https://github.com/leoli0605/docker-hugo/actions/workflows/dockerhub-description.yml)

# Hugo Docker Images

![Hugo Logo](https://gohugo.io/images/hugo-logo-wide.svg)

This Docker image contains the Hugo static site generator. We automatically build and publish Docker images for Hugo versions greater than `v0.115.4` using GitHub Actions.

## Features

- **Automated Builds**: Every day, our GitHub Actions workflow checks for new Hugo releases and builds Docker images for versions greater than `v0.115.4`.
- **Multi-Architecture Support**: We build images for multiple architectures including `linux/amd64`, `linux/arm64`, `linux/arm/v6`, and `linux/arm/v7`.
- **Extended Version**: Our images are built with the `extended` tag, providing SCSS/SASS support out of the box.

## Usage

To use the latest version of Hugo:

```
docker run --rm -it -v $(pwd):/src -p 1313:1313 jafee201153/hugo:latest
```

To use a specific version of Hugo:

```
docker run --rm -it -v $(pwd):/src -p 1313:1313 jafee201153/hugo:DESIRED_VERSION
```

Replace `DESIRED_VERSION` with the version of Hugo you want to use.

## Support

If you encounter any issues or have suggestions, please [open an issue](https://github.com/leoli0605/docker-hugo/issues) on our GitHub repository.
