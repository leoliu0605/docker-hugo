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

-   `v0.140.1`
    -   `0.140.1-ext-alpine`, `alpine`, `latest`
    -   `0.140.1-ext-debian`, `debian`
    
-   `v0.140.0`
    -   `0.140.0-ext-alpine`
    -   `0.140.0-ext-debian`
    
-   `v0.139.5`
    -   `0.139.5-ext-alpine`
    -   `0.139.5-ext-debian`
    
-   `v0.139.4`
    -   `0.139.4-ext-alpine`
    -   `0.139.4-ext-debian`
    
-   `v0.139.3`
    -   `0.139.3-ext-alpine`
    -   `0.139.3-ext-debian`
    
-   `v0.139.2`
    -   `0.139.2-ext-alpine`
    -   `0.139.2-ext-debian`
    
-   `v0.139.1`
    -   `0.139.1-ext-alpine`
    -   `0.139.1-ext-debian`
    
-   `v0.139.0`
    -   `0.139.0-ext-alpine`
    -   `0.139.0-ext-debian`
    
-   `v0.138.0`
    -   `0.138.0-ext-alpine`
    -   `0.138.0-ext-debian`
    
-   `v0.137.1`
    -   `0.137.1-ext-alpine`
    -   `0.137.1-ext-debian`
    
-   `v0.137.0`
    -   `0.137.0-ext-alpine`
    -   `0.137.0-ext-debian`
    
-   `v0.136.5`
    -   `0.136.5-ext-alpine`
    -   `0.136.5-ext-debian`
    
-   `v0.136.4`
    -   `0.136.4-ext-alpine`
    -   `0.136.4-ext-debian`
    
-   `v0.136.3`
    -   `0.136.3-ext-alpine`
    -   `0.136.3-ext-debian`
    
-   `v0.136.2`
    -   `0.136.2-ext-alpine`
    -   `0.136.2-ext-debian`
    
-   `v0.136.1`
    -   `0.136.1-ext-alpine`
    -   `0.136.1-ext-debian`
    
-   `v0.136.0`
    -   `0.136.0-ext-alpine`
    -   `0.136.0-ext-debian`
    
-   `v0.135.0`
    -   `0.135.0-ext-alpine`
    -   `0.135.0-ext-debian`
    
-   `v0.134.3`
    -   `0.134.3-ext-alpine`
    -   `0.134.3-ext-debian`
    
-   `v0.134.2`
    -   `0.134.2-ext-alpine`
    -   `0.134.2-ext-debian`
    
-   `v0.134.1`
    -   `0.134.1-ext-alpine`
    -   `0.134.1-ext-debian`
    
-   `v0.134.0`
    -   `0.134.0-ext-alpine`
    -   `0.134.0-ext-debian`
    
-   `v0.133.1`
    -   `0.133.1-ext-alpine`
    -   `0.133.1-ext-debian`
    
-   `v0.133.0`
    -   `0.133.0-ext-alpine`
    -   `0.133.0-ext-debian`
    
-   `v0.132.2`
    -   `0.132.2-ext-alpine`
    -   `0.132.2-ext-debian`
    
-   `v0.132.1`
    -   `0.132.1-ext-alpine`
    -   `0.132.1-ext-debian`
    
-   `v0.132.0`
    -   `0.132.0-ext-alpine`
    -   `0.132.0-ext-debian`
    
-   `v0.131.0`
    -   `0.131.0-ext-alpine`
    -   `0.131.0-ext-debian`
    
-   `v0.130.0`
    -   `0.130.0-ext-alpine`
    -   `0.130.0-ext-debian`
    
-   `v0.129.0`
    -   `0.129.0-ext-alpine`
    -   `0.129.0-ext-debian`
    
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
