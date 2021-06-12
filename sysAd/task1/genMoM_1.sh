mkdir /home/temp/second
f=/home/temp/temp_*

let x=1
for i in $f; do	
		egrep '_(01|02|03|04|05|06|07|08|09|10)' $i >> /home/temp/second/second_date_$x 
		let x=x+1
done

g=/home/temp/second/*
for i in $g; do
	grep "." $i | tail -1 >> /home/temp/lastsecondyear.txt
done 
cut -d " " -f1 /home/temp/lastsecondyear.txt >> /home/temp/withoutdate.txt


awk -F "[, ]" '{print "Some random text..." >> "/home/"$1"/"$3"_mom"}' /home/temp/lastsecondyear.txt
