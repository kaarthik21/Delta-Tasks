<?php

if(!empty($_POST["remember"])) {
        setcookie ("username",$_POST["username"],time()+ 3600);
        setcookie ("password",$_POST["password"],time()+ 3600);
        echo "Cookies Set Successfuly";
        session_start(); $username = $password = $userError = $passError = '';
        if(isset($_POST['sub'])){
                $username = $_POST['username']; $password = $_POST['password'];
                        if($username === 'admin' && $password === 'superuserpass'){
                                $_SESSION['login'] = true; header('LOCATION:moms.php'); die();
                        }
                if($username !== 'admin')$userError = 'Invalid Username';
                if($password !== 'password')$passError = 'Invalid Password';
        }
}else {
        setcookie("username","");
        setcookie("password","");
        echo "Cookies Not Set";
}

?>

<p><a href="config.php"> Go to Login Page </a> </p>
