#! /bin/bash

cd /Users/Peaua/MyProjects/PeauaWebDev
git add -A
git commit -am "commit"
git push
ssh root@peaua.io "bash -s" < /Users/Peaua/MyProjects/Scripts/autoDeploy.sh
