#!/bin/bash
 
#pull from the branch
git pull origin master

#run docker with docker
docker-compose build
docker stack deploy --compose-file docker-compose.yml react-circleci

docker service update react-circleci_react-context-circleci --image react-context-circleci --force
