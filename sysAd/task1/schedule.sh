#!/bin/bash

s=$(date -I) 

if [[ $(grep "$s" /home/future.txt) ]] ; then 
  echo “DATE    TIME”> /home/Jay_Jay/schedule.txt
  grep “$s” /home/future.txt > /home/Jay_Jay/schedule.txt
  for i in {01..30};do
    echo "date    time" > /home/sysAd_$i/schedule.txt
    echo "date    time" > /home/webDev_$i/schedule.txt
    echo "date    time" > /home/appDev_$i/schedule.txt
    grep "$s" /home/future.txt >> /home/sysAd_$i/schedule.txt 
    grep "$s" /home/future.txt >> /home/webDev_$i/schedule.txt 
    grep "$s" /home/future.txt >> /home/appDev_$i/schedule.txt
  done

else
  echo “date    time”> /home/Jay_Jay/schedule.txt
  for i in {01..30};do
    echo "date    time" > /home/sysAd_$i/schedule.txt
    echo "date    time" > /home/webDev_$i/schedule.txt
    echo "date    time" > /home/appDev_$i/schedule.txt;done
fi
