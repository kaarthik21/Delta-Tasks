<?php
session_start();
$text = rand(10000,99999);
# rand - random num
$_SESSION["vercode"] = $text;
# arr with session var
$height = 25; //CAPTCHA image height
$width = 60; //CAPTCHA image width

$image_p = imagecreate($width, $height);
$black = imagecolorallocate($image_p, 0, 0, 0);
$white = imagecolorallocate($image_p, 255, 255, 255);
$font_size = 12; 
imagestring($image_p, $font_size, 5, 3, $text, $white);
imagejpeg($image_p, /var/www/html/new/, 80);
# imagejpeg(imagename,pathtosave,quality) - print into screen
?>
