# AlphaQ wants to shift operations to the new headquarters. But manually shifting operations is a very difficult task. Your manager Sakthi wants you to automate this shifting process with Docker.

#### Build it: docker build -t alphaq_server .

#### Run, Explore docker file system: docker run -it {image_ID} /bin/bash

#### Run from docker compose, docker-compose up

#### Start mysql using <service mysql start> or </etc/init.d/mysql start>

#### Change password for mysql root by <ALTER USER 'root'@'localhost' IDENTIFIED WITH caching_sha2_password BY 'root';>

#### cp /home/Jay_Jay/MoM.txt /var/lib/mysql-files/MoM.txt

#### service apache2 start & service mysql start before using phpmyadmin

#### Check on phpmyadmin, Go to browser and browse localhost/phpmyadmin

(All .sh files are in /Delta-Tasks/sysAd/task2/ )







## Changing mysql root password and creating Minutesofmeeting database
##### docker build -t alphaq_server .
##### docker run -t -d –name alphaq_server alphaq_server /bin/bash
##### docker exec alphaq_server mysql ALTER USER 'root'@'localhost' IDENTIFIED WITH caching_sha2_password BY 'root';
##### docker exec alphaq_server service mysql start
##### docker exec -it alphaq_server mysql -u root -p
(password given is ‘root’)
##### docker exec alphaq_server mysql create database Minutesofmeeting;

