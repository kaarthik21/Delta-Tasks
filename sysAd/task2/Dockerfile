#! /bin/sh

FROM ubuntu

WORKDIR /server
COPY *.sh /server/


RUN chmod +x /server/genUser.sh 
RUN chmod +x /server/permit.sh
RUN chmod +x /server/schedule.sh
RUN chmod +x /server/attendance.sh

CMD ["./genUser.sh", "./permit.sh", "./schedule.sh", "attendance.sh"]
