FROM golang:latest as builder

ARG HUGO_VERSION=latest

RUN go version
RUN go install -tags extended github.com/gohugoio/hugo@$HUGO_VERSION
RUN hugo version
