echo “Do u want to input by dates? {y or n}” 
read char
if [[ $char = y ]]; then
	echo “Input two dates” 
	read date1 
	read date2
	grep -hnr "$date1" /home/attendance.log > /home/attendance1.txt 
	grep -hnr "$date2" /home/attendance.log > /home/attendance2.txt 
	for i in {01..30} 
	do
		if grep -q sysAd_$i /home/attendance1.txt && grep -q sysAd_$i /home/attendance2.txt; then :
		else 
		echo "sysAd_$i" >> /home/Jay_Jay/finalattendance.txt
		fi
	done
	for j in {01..30} 
	do
		if grep -q webDev_$j /home/attendance1.txt && grep -q webDev_$j /home/attendance2.txt; then :
		else 
		echo "webDev_$j" >> /home/Jay_Jay/finalattendance.txt
		fi
	done
	for k in {01..30}
	do
		if grep -q appDev_$k /home/attendance1.txt && grep -q appDev_$k /home/attendance2.txt; then :
		else 
		echo "appDev_$k" >> /home/Jay_Jay/finalattendance.txt
		fi
	done

elif [[ $char=n ]]; then
	s=$(date -I) 
	awk '$5 <= "$s"' /home/attendance.log > /home/attendance.txt
	awk -F"[, ]" '{print >> "temp_"$3".txt"}' /home/attendance.txt
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
