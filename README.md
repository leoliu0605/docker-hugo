[![hugo](https://github.com/leoli0605/docker-hugo/actions/workflows/publish.yml/badge.svg)](https://github.com/leoli0605/docker-hugo/actions/workflows/publish.yml)

# Hugo Docker Images

[![Hugo Logo](https://gohugo.io/images/hugo-logo-wide.svg)](https://github.com/gohugoio/hugo)

This Docker image contains the Hugo static site generator. We automatically build and publish Docker images for Hugo versions greater than `v0.115.4` using GitHub Actions.

## Features

-   **Automated Builds**: Every day, our GitHub Actions workflow checks for new Hugo releases and builds Docker images for versions greater than `v0.115.4`.
-   **Multi-Architecture Support**: We build images for multiple architectures including `linux/amd64`, `linux/arm64`, `linux/arm/v6`, and `linux/arm/v7`.
-   **Extended Version**: Our images are built with the `extended` tag, providing SCSS/SASS support out of the box.

## Tags

<!-- TAGS_START -->

-   `v0.126.0`
    -   `0.126.0-ext-alpine`, `alpine`, `latest`
    -   `0.126.0-ext-debian`, `debian`
    
-   `v0.125.7`
    -   `0.125.7-ext-alpine`
    -   `0.125.7-ext-debian`
    
-   `v0.125.6`
    -   `0.125.6-ext-alpine`
    -   `0.125.6-ext-debian`
    
-   `v0.125.5`
    -   `0.125.5-ext-alpine`
    -   `0.125.5-ext-debian`
    
-   `v0.125.4`
    -   `0.125.4-ext-alpine`
    -   `0.125.4-ext-debian`
    
-   `v0.125.3`
    -   `0.125.3-ext-alpine`
    -   `0.125.3-ext-debian`
    
-   `v0.125.2`
    -   `0.125.2-ext-alpine`
    -   `0.125.2-ext-debian`
    
-   `v0.125.1`
    -   `0.125.1-ext-alpine`
    -   `0.125.1-ext-debian`
    
-   `v0.125.0`
    -   `0.125.0-ext-alpine`
    -   `0.125.0-ext-debian`
    
-   `v0.124.1`
    -   `0.124.1-ext-alpine`
    -   `0.124.1-ext-debian`
    
-   `v0.124.0`
    -   `0.124.0-ext-alpine`
    -   `0.124.0-ext-debian`
    
-   `v0.123.8`
    -   `0.123.8-ext-alpine`
    -   `0.123.8-ext-debian`
    
-   `v0.123.7`
    -   `0.123.7-ext-alpine`
    -   `0.123.7-ext-debian`
    
-   `v0.123.6`
    -   `0.123.6-ext-alpine`
    -   `0.123.6-ext-debian`
    
-   `v0.123.5`
    -   `0.123.5-ext-alpine`
    -   `0.123.5-ext-debian`
    
-   `v0.123.4`
    -   `0.123.4-ext-alpine`
    -   `0.123.4-ext-debian`
    
-   `v0.123.3`
    -   `0.123.3-ext-alpine`
    -   `0.123.3-ext-debian`
    
-   `v0.123.2`
    -   `0.123.2-ext-alpine`
    -   `0.123.2-ext-debian`
    
-   `v0.123.1`
    -   `0.123.1-ext-alpine`
    -   `0.123.1-ext-debian`
    
-   `v0.123.0`
    -   `0.123.0-ext-alpine`
    -   `0.123.0-ext-debian`
    
-   `v0.122.0`
    -   `0.122.0-ext-alpine`
    -   `0.122.0-ext-debian`
    
-   `v0.121.2`
    -   `0.121.2-ext-alpine`
    -   `0.121.2-ext-debian`
    
-   `v0.121.1`
    -   `0.121.1-ext-alpine`
    -   `0.121.1-ext-debian`
    
-   `v0.121.0`
    -   `0.121.0-ext-alpine`
    -   `0.121.0-ext-debian`
    
-   `v0.120.4`
    -   `0.120.4-ext-alpine`
    -   `0.120.4-ext-debian`
    
-   `v0.120.3`
    -   `0.120.3-ext-alpine`
    -   `0.120.3-ext-debian`
    
-   `v0.120.2`
    -   `0.120.2-ext-alpine`
    -   `0.120.2-ext-debian`
    
-   `v0.120.1`
    -   `0.120.1-ext-alpine`
    -   `0.120.1-ext-debian`
    
-   `v0.120.0`
    -   `0.120.0-ext-alpine`
    -   `0.120.0-ext-debian`
    
-   `v0.119.0`
    -   `0.119.0-ext-alpine`
    -   `0.119.0-ext-debian`
    
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
