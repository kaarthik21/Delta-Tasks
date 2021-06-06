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

groupadd second_years_sysAd
groupadd second_years_webDev
groupadd second_years_appDev
groupadd third_years_sysAd
groupadd third_years_webDev
groupadd third_years_appDev
groupadd fourth_years_sysAd
groupadd fourth_years_webDev
groupadd fourth_years_appDev

for j in {01..10}; do 
  usermod -a -G second_years_sysAd sysAd_$j
done

for j in {01..10}; do 
  usermod -a -G second_years_webDev webDev_$j
done

for j in {01..10}; do 
  usermod -a -G second_years_appDev appDev_$j
done


for k in {11..20};do
  usermod -a -G third_years_sysAd sysAd_$k
done

for k in {11..20};do
  usermod -a -G third_years_webDev webDev_$k
done

for k in {11..20};do
  usermod -a -G third_years_appDev appDev_$k
done

for l in {21..30};do
  usermod -a -G fourth_years_sysAd sysAd_$l
done

for l in {21..30};do
  usermod -a -G fourth_years_webDev webDev_$l
done

for l in {21..30};do
  usermod -a -G fourth_years_appDev appDev_$l
done
