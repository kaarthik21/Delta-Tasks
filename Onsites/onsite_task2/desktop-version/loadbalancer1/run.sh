#!/bin/bash -e
sudo docker run --rm --name loadbalancer1 --link server1:server1 --link server2:server2 -p 8000:80 -t lbd/loadbalancer1

