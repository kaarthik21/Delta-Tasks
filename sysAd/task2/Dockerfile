#! /bin/sh

FROM ubuntu

RUN apt-get update && apt-get install cron -y && apt-get install vim -y
RUN apt-get install acl -y

WORKDIR /server
COPY *.sh /server/
COPY attendance.log future.txt /server/
COPY crontab-schedule.txt /etc/cron.d/crontab-schedule.txt
RUN cat .bashrc_server >> /root/.bashrc
RUN chmod 644 /etc/cron.d/crontab-schedule.txt


RUN chmod +x /server/genUser.sh 
RUN chmod +x /server/permit.sh
RUN chmod +x /server/schedule.sh
RUN chmod +x /server/attendance.sh

RUN /server/genUser.sh
RUN /server/permit.sh
RUN /etc/cron.d/crontab-schedule.txt
RUN /server/schedule.sh 
RUN /server/attendance.sh
