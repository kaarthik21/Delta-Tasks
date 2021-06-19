#! /bin/sh

FROM ubuntu

RUN apt-get update && apt-get install cron -y && apt-get install vim -y

WORKDIR /server
COPY *.sh /server/

RUN chmod +x /server/genUser.sh 
RUN chmod +x /server/permit.sh
RUN chmod +x /server/schedule.sh
RUN chmod +x /server/attendance.sh

CMD ["./genUser.sh", "./permit.sh"]
RUN /usr/bin/crontab /server/crontab-schedule.txt
RUN /server/schedule.sh /server/attendance.sh
