<html>
<head>
        <title>moms.local</title>
</head>

<body>

<?php
$mysqli = new mysqli("localhost","root","root","Minutesofmeeting");

// Check connection
if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}

// Perform query
if ($result = $mysqli -> query("SELECT * FROM MoM")) {
  echo "Returned rows are: " . $result -> num_rows;
  // Free result set
  $result -> free_result();
}

$mysqli -> close();
?>

</body>
</html>
