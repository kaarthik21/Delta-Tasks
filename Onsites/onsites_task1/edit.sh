#!/bin/bash
read -p 'Enter column name to be changed(the column name should be within " "): ' column
read -p 'Enter the value in that column to be changed: ' value
read -p 'Enter the changed value to add into file: ' newvalue
awk -F, -v col=$column 'NR==1{{for(i=1;i<=NF;i++) if($i==col) {print i}}
}' temp.txt 

sed -i "s/$value/$newvalue/" temp.txt
