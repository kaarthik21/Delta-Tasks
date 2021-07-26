<?php
session_start(); $username = $password = $userError = $passError = '';
if(isset($_POST['sub'])){
        $username = $_POST['username']; $password = $_POST['password'];
                if($username === 'admin' && $password === 'superuserpass'){
                        $_SESSION['login'] = true; header('LOCATION:moms.php'); die();
                }
        if($username !== 'admin')$userError = 'Invalid Username';
        if($password !== 'password')$passError = 'Invalid Password';
}
?>
<!DOCTYPE HTML>
<html>
        <head>
                <title>Login</title>
                <style>
                        body{
                                background-color:lightblue;
                                text-align:center;
                                border: 3px dotted black;
                                }
                </style>
        </head>
        <body>

        <h2>Login</h2>
        <form action="cookie.php" method="post" style="border 2px dotted blue; text-align:center; width: 400px;">
        <form name='input' action='<?php echo $_SERVER['PHP_SELF'];?>' method='POST'>
                <label for='username'>Username:</label>
                <input type ='text' value='<?php if(isset($_COOKIE["username"])){echo $_COOKIE["username"];}?>' id='username' name='username' class="input-field"/>
                <br><br>

                <label for='password'>Password:</label>
                <input type='password' value='<?php if(isset($_COOKIE["password"])){echo $_COOKIE["password"];}?>' id='password' name='password' class="input-field"/>

                <div class='error'><?php echo $passError;?></div><br>
                <input type='checkbox' name='remember' />Remember me <br>
                <input type='submit' value='Submit' name='sub' />
        </form>
        </body>
</html>
