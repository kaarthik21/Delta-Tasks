#BEGIN is read only once when first input is given
awk 'BEGIN{
        FS=",";
        } 

NR==FNR{
# FNR resets to 1 for new file while NR continues
        array_store_lines[$2]=$0;
        # Full line is stored to array with $2 as index-employeeId
        next;
        # next is used to store all the lines to the array 
}
{
        print array_store_lines[$1] FS $2  >> "merged_temp.txt"#$3} 
        # Prints the array of $1 index,$2 of file2.txt(salaries) 
}
' file1.txt file2.txt 


awk 'BEGIN{
        FS=",";
        }
NR==FNR{
# FNR resets to 1 for new file while NR continues
        array_store_lines1[$3]=$0;
        # Full line stored to array with $3 as index-phone
        next;
}
{
        print array_store_lines1[$2] FS $1 FS $3 > "final_merged.txt"
        # Prints the array with index $2,email,year of file3.txt
}
' merged_temp.txt file3.txt
