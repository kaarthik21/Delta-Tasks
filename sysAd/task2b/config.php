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
                                }
                </style>
        </head>
        <body>
        <form name='input' action='<?php echo $_SERVER['PHP_SELF'];?>' method='POST'>
                <label for='username'></label><input type ='text' value='<?php echo $username;?>' id='username' name='username'/>
                <div class='error'><?php echo $username;?></div>
                <label for='password'></label><input type='password' value='<?php echo $password;?>' id='password' name='password' />
                <div class='error'><?php echo $passError;?></div>
                <input type='submit' value='Submit' name='sub' />
        </form>
        </body>
</html>
