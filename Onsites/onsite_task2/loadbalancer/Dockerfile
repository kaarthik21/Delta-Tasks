FROM ubuntu

RUN apt-get update && DEBIAN_FRONTEND="noninteractive" TZ="Asia/India" apt-get install -y tzdata 

RUN apt-get update && apt-get install -y apache2

COPY loadbalancer.conf /etc/apache2/sites-available/loadbalancer.cong

CMD service apache2 start

