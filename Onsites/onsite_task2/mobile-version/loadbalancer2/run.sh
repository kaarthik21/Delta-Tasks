#!/bin/bash -e
sudo docker run --rm --name loadbalancer2 --link server3:server3 --link server4:server4 -p 55555:80 -t lbd/loadbalancer2

