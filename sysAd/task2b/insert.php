<html>
<body>
        <form method="post" action="insert.php">
        <input type="text" name="Username" placeholder="Username">
        <br><br>
        <input type="text" name="Date" placeholder="Date">
        <br><br>
        <input type="text" name="Minutes_of_meeting" placeholder="Minutes_of_meeting">
        <br><br><br>
        <button type="submit" placeholder="Save" name="save">Save</button>
        <br>


        <?php
        $servername='localhost';
        $username='root';
        $password='root';
        $dbname = "Minutesofmeeting";

        $conn = mysqli_connect($servername,$username,$password,"$dbname");
        if(!$conn){
                die('Could not Connect My Sql:' . mysqli_connect_error());
        }
          
        $Username = $_POST['Username'];
        $Date = $_POST['Date'];
        $Minutes_of_meeting = $_POST['Minutes_of_meeting'];
        $insert = "INSERT INTO MoM (Username, Date, Minutes_of_meeting)
        VALUES ('$Username','$Date','$Minutes_of_meeting')";
        if (mysqli_query($conn, $insert)) {
                echo "New record will get created and added into MoM!";
        } 
        else {
                echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
        mysqli_close($conn); 
        ?>

</body>
</html>
