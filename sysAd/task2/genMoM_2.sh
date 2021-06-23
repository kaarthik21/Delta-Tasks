#! /bin/bash

read -p "Enter date 1: " date1
read -p "Enter date 2: " date2
awk -v d1="$date1" -v d2="$date2" -F " - |, " '{if($2>=d1 && $2<=d2) print $0}' /home/temp/lastsecondyear.txt  >> /home/temp/betweendates.txt

x="1"
while read line; do
echo "$x"
awk -F "[, ]" -v x=$x 'NR==x{print $1, $3}' /home/temp/betweendates.txt >> /home/Jay_Jay/MoM.txt
awk -F "[, ]" -v x=$x 'NR==x{print "/home/"$1"/"$3"_mom"}' /home/temp/betweendates.txt | xargs cat >> /home/Jay_Jay/MoM.txt
((x++))
done < /home/temp/lastsecondyear.txt

