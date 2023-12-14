<?php
// Database configuration
include 'index.html';

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["submit"])) {
    // Form is submitted, process the data

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "legalstixschool";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Retrieve form data
    $Name = $_POST['name'];
    $Email = $_POST['email'];
    $Profession = $_POST['profession'];
    $Phone = $_POST['phone'];
    $Interest = $_POST['interest'];

    // Insert data into the database
    $sql = "INSERT INTO users (name, email, profession, phone, interest) 
            VALUES ('$Name', '$Email', '$Profession', '$Phone', '$Interest')";

    if ($conn->query($sql) === TRUE) {
        echo "Registration successful";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the connection
    $conn->close();
}
?>
