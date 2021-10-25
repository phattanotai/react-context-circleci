#!/bin/bash
 
#pull from the branch
git pull origin master

#run docker with docker
docker stack deploy --compose-file docker-compose.yml react-circleci