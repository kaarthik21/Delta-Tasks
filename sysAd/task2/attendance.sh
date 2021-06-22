#! /bin/bash
cd /home

echo “Do u want to input by dates?” 
read char
if [[ $char = y ]]; then
	echo “Input two dates in yyyy-mm-dd” 
	read -p "Enter date1: " date1
	read -p "Enter date2: " date2
	awk -v d1="$date1" -v d2="$date2" -F " - |, " '{if($2>=d1 && $2<=d2) print $0}' /server/attendance.log  > /server/attendance.txt

	for i in {01..30} 
	do
		if grep -q sysAd_$i /server/attendance.txt; then :
		else 
		echo "sysAd_$i" >> /home/Jay_Jay/finalattendance.txt
		fi
	done
	for j in {01..30} 
	do
		if grep -q webDev_$j /server/attendance.txt; then :
		else 
		echo "webDev_$j" >> /home/Jay_Jay/finalattendance.txt
		fi
	done
	for k in {01..30}
	do
		if grep -q appDev_$k /server/attendance.txt; then :
		else 
		echo "appDev_$k" >> /home/Jay_Jay/finalattendance.txt
		fi
	done

elif [[ $char = n ]]; then
	s=$(date -I) 
	awk -v x="$s" '$5 <= x' /server/attendance.log > /server/attendance.txt
	awk -F"[, ]" '{print >> "temp_"$3".txt"}' /server/attendance.txt
	mkdir temp
	mv /home/temp_* temp
	f="/home/temp/*"
	for i in {01..30}; do	
		for j in $f; do 
			if grep -q sysAd_$i $j ; then :
				else
				echo -n "sysAd_$i		"	>> /home/Jay_Jay/finalattendance.txt
				echo -n "$j" | awk -F'[_.]' '{print $2}' >> /home/Jay_Jay/finalattendance.txt
				fi
		done
	done

	for i in {01..30}; do	
		for j in $f; do 
			if grep -q webDev_$i $j ; then :
				else
				echo -n "webDev_$i		"	>> /home/Jay_Jay/finalattendance.txt
				echo -n "$j" | awk -F'[_.]' '{print $2}' >> /home/Jay_Jay/finalattendance.txt				
				fi
		done
	done

	for i in {01..30}; do	
		for j in $f; do 
			if grep -q appDev_$i $j ; then :
				else
				echo -n "appDev_$i		"	>> /home/Jay_Jay/finalattendance.txt
				echo -n "$j" | awk -F'[_.]' '{print $2}' >> /home/Jay_Jay/finalattendance.txt
 				fi
		done
	done
			
fi

cd -

echo "Absentees updates"
