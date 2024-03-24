#!/bin/bash
echo *******************************************************************
echo Starting the replica set
echo *******************************************************************

# wait for a while until the 3 mongo containers are fully up
sleep 10 | echo Sleeping

# connect to the first container and execute the replica setup script
mongosh "mongodb://mongo_primary:2717" --file replicaSet.js