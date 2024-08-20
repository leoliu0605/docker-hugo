#!/bin/bash

distro=$1
if [ "$distro" != "alpine" ] && [ "$distro" != "debian" ]; then
    echo "Usage: $0 alpine|debian <version>"
    exit 1
fi
version=$2
if [ -z "$version" ]; then
    echo "Usage: $0 alpine|debian <version>"
    exit 1
fi

username=$(whoami)
builder=builder
if ! docker buildx ls | grep -q $builder; then
    docker buildx create --name $builder
fi
docker buildx use $builder
docker buildx inspect --bootstrap
docker buildx build \
    -f Dockerfile.$distro \
    --platform=linux/amd64,linux/arm64,linux/arm/v7 \
    --build-arg HUGO_VERSION=$version \
    -t $username/hugo:$distro -t $username/hugo:latest .
