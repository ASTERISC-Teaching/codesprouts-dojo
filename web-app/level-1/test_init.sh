#!/bin/bash -e

tar -xvf ./server-1.0.0.tgz

pushd package
cp -r /usr/lib/node_modules node_modules
nodemon index.js
