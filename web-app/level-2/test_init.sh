#!/bin/bash -e

# tar -xvf ./server-1.0.0.tgz

pushd package
sudo mkdir /data
sudo mkdir /data/db
sudo cp -r /usr/lib/node_modules node_modules
sudo mongod &
sudo nodemon index.js &
