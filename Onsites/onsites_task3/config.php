<html>
<head>
<title>Image Captcha</title>
</head>
<body>
<form action="#null" method="post">
<h2>
Welcome to NITT login page
</h2>  
<label for="username"><b>Username</b></label>
<input type="text" placeholder="Enter Username" name="username" minlength="9" maxlength="9" pattern="[1]{1}[0-4]{1}[0]{1}[1]{1}[2]{1}[0][012]{1}[0-9]{2}"  required>
<br>
<label for="password"><b>Password</b></label>
<input type="password" placeholder="Enter Password" name="password" pattern="[a-zA-Z0-9]{8,}" required>
<br>

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

Enter Captcha: <input name="captcha" type="text">
<img src="captcha.php" /><br>
<input name="submit" type="submit" value="Submit">
</form>
</body>
</html>

