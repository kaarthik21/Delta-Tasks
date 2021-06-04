Alpha Q Server Setup

Welcome, SysAd. Alpha Q is shifting all it’s management tasks online! As a system administrator, you are tasked with setting up the basic system for the group. Your scripts should be named according to the alias given for each sub task.
Normal Mode
1.	(alias - genUser) Set up 30 user accounts for each domain + 1 Alpha Q head with permission management. The users must be named as follows:
  sysAd_01, sysAd_02 ….sysAd_30
	appDev_01, appDev_02, ….appDev_30
	webDev_01, webDev_02, ….webDev_30
	Jay_Jay (head of Alpha Q) Among these accounts, profile_01 - profile_10 are second years, profile_11 - profile_20 are third years, profile_21 - profile_30 are fourth years.

2.	(alias - permit) Set up permissions for accounts which follow the hierarchy:
	Second years can view only their own home directory.
	Third years can view their own home directory as well as all the home directories of second years of their domain.
	Fourth years can view their own home directory as well as the home directories of second and third years of their domain.
	Jay_Jay can read all the other users' home directories.

3.	(alias - schedule) Alpha Q has regular meetings to discuss what their members are working on frequently. You are provided with a text file with the dates of future meetings(future.txt). Create a file schedule in each user's home directory with two columns, date and time. This file should be updated with the meeting schedule if there is a meeting that day.

4.	(alias - attendance) You are given a log of when members joined the meetings in a file attendance.log. Write a script for the head to get a list of members who were absent when passed two dates as parameters. If no arguments are passed then find the absentees and the dates they were absent till today.


Superuser Mode
Use the attendance.log file for this task.

1.	(alias - genMoM) The last second year to join a meet is repsonsible for taking MoM (Minutes of Meeting; a doc where the main points of the meet are jotted down). Find the last second year to join the meet. In that user's home directory, create a file with the name in the format ${date}_mom, where ${date} represents the date of the particular meeting. Add some random text to it.

2.	(alias - getMoM) The head should be able to view the MoM records between two given dates. Create a script which the head can run to generate a file in their home directory with a table having each week’s MoMs, along with the person who took the MoM and the date. The MoM should be obtained from the MoM taker’s home directory.
Files For the task
attendance.log - https://github.com/kaarthik21/Delta-Tasks/blob/main/sysAd/task1/attendance.log
future.txt - https://github.com/kaarthik21/Delta-Tasks/blob/main/sysAd/task1/future.txt

