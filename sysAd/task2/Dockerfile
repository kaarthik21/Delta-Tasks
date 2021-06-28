FROM ubuntu

RUN apt-get update && apt-get install cron -y && apt-get install vim -y
RUN apt-get install acl -y && apt-get install python3 -y && apt-get install mysql-server -y
RUN apt-get install python3-pip -y && pip install PyMySQL -y && apt-get install phpmyadmin -y && apt-get install apache2 -y

WORKDIR /server

COPY *.sh /server/
COPY bashrc_server /server/
COPY attendance.log future.txt /server/
COPY crontab-schedule.txt /var/spool/crontabs/crontab-schedule.txt
COPY Minutesofmeeting_database.py /server/

RUN chmod 644 /server/bashrc_server
RUN cat bashrc_server >> /root/.bashrc

RUN chmod +x /server/genUser.sh 
RUN chmod +x /server/permit.sh
RUN chmod +x /server/schedule.sh
RUN chmod +x /server/attendance.sh
RUN chmod +x /server/Minutesofmeeting_database.py

RUN /server/genUser.sh
RUN /server/permit.sh
RUN /var/spool/crontabs/crontab-schedule.txt
#RUN /server/schedule.sh
#RUN /server/attendance.sh
#RUN /server/Minutesofmeeting_database.py
CMD "bash"
