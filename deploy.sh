#!/bin/bash
 
#pull from the branch
git pull origin master

#run docker with docker
docker-compose build
docker stack deploy --compose-file docker-compose.yml react-cicd

docker service update react-cicd_react-context-cicd --image react-context-cicd --force
