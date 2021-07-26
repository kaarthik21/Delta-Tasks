Password for mysql is changed to 'root' previously

phpmyadmin is accessed from browser by searching localhost/phpmyadmin/

##### After starting apache2 and mysql, the MoM table can be viewed from localhost/moms.php

 service apache2 start
 service mysql start
 cd /var/www
 ls
 cd -
 cd /var/www/html/
 mkdir www.moms.local.com
 rmdir www.moms.local.com/
 mkdir -p www.moms.local.com
 ls
 car moms.php 
 cat moms.php 
 mv moms.php /var/www/html/www.moms.local.com/moms.php
 ls 
 cd www.moms.local.com/
 ls
 cat moms.php 
 vim moms.php 
 chown -R www-data:www-data /var/www/html/www.moms.local.com/
 chmod -R 755 /var/www/html
 a2dissite 000-default.conf 
 service apache2 reload
 vim /etc/apache2/sites-available/www.moms.local.com.conf
 a2ensite www.moms.local.com.conf
 /etc/init.d/apache2 restart
 vim /etc/hosts
 service apache2 reload
