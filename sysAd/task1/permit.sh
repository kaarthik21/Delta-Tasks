#!/bin/bash

for i in {01..30};do 
setfacl -m m:rwx appDev_$i
setfacl -m m:rwx webDev_$i
setfacl -m m:rwx sysAd_$i
done

chmod 700 Jay_Jay 

for i in {01..30};do 
setfacl -m u:Jay_Jay:r-- -R sysAd_$i
setfacl -m u:Jay_Jay:r-- -R appDev_$i
setfacl -m u:Jay_Jay:r-- -R webDev_$i
done

for i in {01..10};do 
chmod 740 sysAd_$i; chmod 740 appDev_$i; chmod 740 webDev_$i; done


for i in {11..20};do 
chmod 740 sysAd_$i; chmod 740 appDev_$i; chmod 740 webDev_$i; done

for i in {01..10};do 
setfacl -m g:third_years_sysAd:r-- -R sysAd_$i
setfacl -m g:third_years_appDev:r-- -R appDev_$i
setfacl -m g:third_years_webDev:r-- -R webDev_$i


for i in {01..10};do 
setfacl -m g:fourth_years_sysAd:r-- -R sysAd_$i
setfacl -m g:fourth_years_appDev:r-- -R appDev_$i
setfacl -m g:fourth_years_webDev:r-- -R webDev_$i
done

for i in {11..20};do 
setfacl -m g:fourth_years_sysAd:r-- -R sysAd_$i
setfacl -m g:fourth_years_appDev:r-- -R appDev_$i
setfacl -m g:fourth_years_webDev:r-- -R webDev_$i
done

for i in {21..30};do 
chmod 740 sysAd_$i; chmod 740 appDev_$i; chmod 740 webDev_$i; done
