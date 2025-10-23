[![hugo](https://github.com/leoli0605/docker-hugo/actions/workflows/publish.yml/badge.svg)](https://github.com/leoli0605/docker-hugo/actions/workflows/publish.yml)
[![Docker Pulls](https://img.shields.io/docker/pulls/jafee201153/hugo.svg)](https://hub.docker.com/r/jafee201153/hugo/)
[![Docker Stars](https://img.shields.io/docker/stars/jafee201153/hugo.svg)](https://hub.docker.com/r/jafee201153/hugo/)

# Hugo Docker Images

[![Hugo Logo](https://gohugo.io/images/hugo-logo-wide.svg)](https://github.com/gohugoio/hugo)

This Docker image contains the Hugo static site generator. We automatically build and publish Docker images for Hugo versions greater than `v0.115.4` using GitHub Actions.

## Features

-   **Automated Builds**: Every day, our GitHub Actions workflow checks for new Hugo releases and builds Docker images for versions greater than `v0.115.4`.
-   **Multi-Architecture Support**: We build images for multiple architectures including `linux/amd64`, `linux/arm64`, `linux/arm/v6`, and `linux/arm/v7`.
-   **Extended Version**: Our images are built with the `extended` tag, providing SCSS/SASS support out of the box.

## Tags

<!-- TAGS_START -->

-   `v0.152.1`
    -   `0.152.1-ext-alpine`, `alpine`, `latest`
    -   `0.152.1-ext-debian`, `debian`
    
-   `v0.152.0`
    -   `0.152.0-ext-alpine`
    -   `0.152.0-ext-debian`
    
-   `v0.151.2`
    -   `0.151.2-ext-alpine`
    -   `0.151.2-ext-debian`
    
-   `v0.151.1`
    -   `0.151.1-ext-alpine`
    -   `0.151.1-ext-debian`
    
-   `v0.151.0`
    -   `0.151.0-ext-alpine`
    -   `0.151.0-ext-debian`
    
-   `v0.150.1`
    -   `0.150.1-ext-alpine`
    -   `0.150.1-ext-debian`
    
-   `v0.150.0`
    -   `0.150.0-ext-alpine`
    -   `0.150.0-ext-debian`
    
-   `v0.149.1`
    -   `0.149.1-ext-alpine`
    -   `0.149.1-ext-debian`
    
-   `v0.149.0`
    -   `0.149.0-ext-alpine`
    -   `0.149.0-ext-debian`
    
-   `v0.148.2`
    -   `0.148.2-ext-alpine`
    -   `0.148.2-ext-debian`
    
-   `v0.148.1`
    -   `0.148.1-ext-alpine`
    -   `0.148.1-ext-debian`
    
-   `v0.148.0`
    -   `0.148.0-ext-alpine`
    -   `0.148.0-ext-debian`
    
-   `v0.147.9`
    -   `0.147.9-ext-alpine`
    -   `0.147.9-ext-debian`
    
-   `v0.147.8`
    -   `0.147.8-ext-alpine`
    -   `0.147.8-ext-debian`
    
-   `v0.147.7`
    -   `0.147.7-ext-alpine`
    -   `0.147.7-ext-debian`
    
-   `v0.147.6`
    -   `0.147.6-ext-alpine`
    -   `0.147.6-ext-debian`
    
-   `v0.147.5`
    -   `0.147.5-ext-alpine`
    -   `0.147.5-ext-debian`
    
-   `v0.147.4`
    -   `0.147.4-ext-alpine`
    -   `0.147.4-ext-debian`
    
-   `v0.147.3`
    -   `0.147.3-ext-alpine`
    -   `0.147.3-ext-debian`
    
-   `v0.147.2`
    -   `0.147.2-ext-alpine`
    -   `0.147.2-ext-debian`
    
-   `v0.147.1`
    -   `0.147.1-ext-alpine`
    -   `0.147.1-ext-debian`
    
-   `v0.147.0`
    -   `0.147.0-ext-alpine`
    -   `0.147.0-ext-debian`
    
-   `v0.146.7`
    -   `0.146.7-ext-alpine`
    -   `0.146.7-ext-debian`
    
-   `v0.146.6`
    -   `0.146.6-ext-alpine`
    -   `0.146.6-ext-debian`
    
-   `v0.146.5`
    -   `0.146.5-ext-alpine`
    -   `0.146.5-ext-debian`
    
-   `v0.146.4`
    -   `0.146.4-ext-alpine`
    -   `0.146.4-ext-debian`
    
-   `v0.146.3`
    -   `0.146.3-ext-alpine`
    -   `0.146.3-ext-debian`
    
-   `v0.146.2`
    -   `0.146.2-ext-alpine`
    -   `0.146.2-ext-debian`
    
-   `v0.146.1`
    -   `0.146.1-ext-alpine`
    -   `0.146.1-ext-debian`
    
-   `v0.146.0`
    -   `0.146.0-ext-alpine`
    -   `0.146.0-ext-debian`
    
<!-- TAGS_END -->

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
