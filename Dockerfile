# syntax=docker/dockerfile:1

FROM ubuntu:20.04

ADD --chmod=4755 https://deb.nodesource.com/setup_20.x /tmp/setup_20.x
RUN /tmp/setup_20.x && rm /tmp/setup_20.x

RUN apt-get update && apt-get install -y --no-install-recommends \
      mongodb \
      nodejs \
  && rm -rf /var/lib/apt/lists/*

RUN npm install -g \
    bcrypt \
    body-parser \
    cors \
    dotenv \
    express \
    gridfs-stream \
    helmet \
    jsonwebtoken \
    mongoose@8.3.1 \
    morgan \
    multer \
    multer-gridfs-storage \
    nodemon
