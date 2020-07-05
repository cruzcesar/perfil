<?php

require_once ('config.php');
$id = $_POST['id'];
$tres = $_POST['tres'];

$sql = "INSERT INTO boletos (folios)
VALUES ('$tres')";

if (mysqli_query($con, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($con);
}





?>