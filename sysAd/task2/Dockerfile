#! /bin/sh

FROM ubuntu

RUN apt-get update && apt-get install cron -y && apt-get install vim -y

WORKDIR /server
COPY *.sh /server/
COPY crontab-schedule.txt /etc/cron.d/crontab-schedule.txt
RUN chmod 0644 /etc/cron.d/crontab-schedule.txt

RUN chmod +x /server/genUser.sh 
RUN chmod +x /server/permit.sh
RUN chmod +x /server/schedule.sh
RUN chmod +x /server/attendance.sh

CMD ["./genUser.sh", "./permit.sh"]

RUN /etc/cron.d/crontab-schedule.txt

RUN /server/schedule.sh 

RUN /server/attendance.sh
