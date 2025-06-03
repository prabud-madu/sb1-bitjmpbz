<?php
$serverName ="localhost";
$dbUsername ="fardarit";
$dbPassword ="6@qSN[wqN..7xvD(";
$dbName ="fardarit_login";

$conn = mysqli_connect($serverName, $dbUsername, $dbPassword, $dbName);

if(!$conn){
die("Connection failed:".mysqli_connect_error());
}
?>