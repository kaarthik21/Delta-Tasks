#! /bin/bash

read -p "Enter date 1: " date1
read -p "Enter date 2: " date2
awk -v d1="$date1" -v d2="$date2" -F " - |, " '{if($2>=d1 && $2<=d2) print $0}' /home/temp/lastsecondyear.txt  >> /home/temp/betweendates.txt

let x="1"
while read line; do 
a=$(awk -F "[, ]" -v x=$x 'NR==x{print $1, $3}' /home/temp/betweendates.txt) 
b=$(awk -F "[, ]" -v x=$x 'NR==x{print "/home/"$1"/"$3"_mom"}' /home/temp/betweendates.txt | xargs cat) 
echo $a $b

((x++))
done < /home/temp/lastsecondyear.txt
