<!DOCTYPE html>
<html>
<body>
<title>moms.local</title>
<h1>List of MoMs:</h1>
<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "Minutesofmeeting";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM MoM";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<br>". $row["Username"]. "&nbsp&nbsp &nbsp&nbsp". $row["Date"]. "&nbsp&nbsp &nbsp&nbsp" . $row["Minutes_of_meeting"] . "<br>";
    }
} else {
    echo "0 results";
}

$conn->close();
?>

</body>
</html>
