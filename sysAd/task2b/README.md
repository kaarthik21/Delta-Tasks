### Password for mysql is changed to 'root' previously

#### phpmyadmin is accessed from browser by searching localhost/phpmyadmin/

#### After starting apache2 and mysql, the MoM table can be viewed from localhost/moms.php

#### chown -R www-data:www-data /var/www/html/moms.local/moms.php
#### chown -R www-data:www-data /var/www/html/moms.local/config.php
#### chown -R www-data:www-data /var/www/html/moms.local/cookie.php
#### chmod -R 755 /var/www/html/moms.local
#### vim /etc/apache2/sites-available/000-default.conf
##
#### Modify 000-default.conf file by adding these commands        
##### ServerAdmin webmaster@localhost
##### ServerName moms.local
##### DocumentRoot /var/www/html/
##### ErrorLog ${APACHE_LOG_DIR}/moms.local_error.log
##### CustomLog ${APACHE_LOG_DIR}/moms.local_access.log combined
## 
#### a2dissite /etc/apache2/sites-available/000-default.conf
#### /etc/init.d/apache2 restart
#### service apache2 reload
