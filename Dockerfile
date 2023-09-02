FROM golang:1.20.6-bookworm as builder
RUN go version
RUN go install -tags extended github.com/gohugoio/hugo@latest
RUN hugo version