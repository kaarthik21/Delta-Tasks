#!/bin/bash

sudo useradd -m Jay_Jay
for i in {01..30};do
  useradd -m sysAd_$i
  useradd -m appDev_$i
  useradd -m webDev_$i
done
echo “Users generated”

groupadd genUser

for i in {01..30};do 
  usermod -g genUser sysAd_$i
  usermod -g genUser appDev_$i
  usermod -g genUser webDev_$i
done

groupadd second_years
groupadd third_years
groupadd fourth_years

for j in {01..10}; do 
  usermod -a -G second_years sysAd_$j
  usermod -a -G second_years appDev_$j
  usermod -a -G second_years webDev_$j
done

for k in {11..20};do
  usermod -a -G third_years sysAd_$k
  usermod -a -G third_years appDev_$k
  usermod -a -G third_years webDev_$k
done

for l in {21..20};do
  usermod -a -G fourth_years sysAd_$l
  usermod -a -G fourth_years appDev_$l
  usermod -a -G fourth_years webDev_$l
done
