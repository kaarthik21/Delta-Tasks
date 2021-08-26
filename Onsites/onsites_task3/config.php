<html>
<head>
<title>Image Captcha</title>
</head>
<body>
<form action="#null" method="post">


<label for="uname"><b>Username</b></label>
<input type="text" placeholder="Enter Username" name="usernamename" pattern="[1]{0,}[0-9]{9}" required>
<br>
<label for="psw"><b>Password</b></label>
<input type="password" placeholder="Enter Password" name="password" pattern="[a-zA-Z0-9]{8,}" required>
<br>

Enter Captcha: <input name="captcha" type="text">
<img src="captcha.php" /><br>
<input name="submit" type="submit" value="Submit">
</form>
</body>
</html>


<?php
session_start();
if(isset($_POST["captcha"])&&$_POST["captcha"]!=""&&
  $_SESSION["vercode"]==$_POST["captcha"]){
  header("Location:hello.php")
}
else{
  $msg = "Wrong verification code.";
  header("Location:config.php?msg=$msg");
}
?>
