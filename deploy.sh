#!/bin/bash

#replace this with the path of your project on the VPS
cd react-context-circleci

#pull from the branch
git pull origin master

#run docker with docker
docker-compose up -d