<?php
if (isset($_POST["submit"])){
    $name = $_POST["name"];
    $email = $_POST["email"];
    $username = $_POST["uid"];
   $pwd = $_POST["pwd"];
   $pwdRepeat = $_POST["pwdRepeat"];

   require_once 'dbh.inc.php';
   require_once 'functions.inc.php';

   $emptyInput = emptyInputSignup($name,$email,$username, $pwd,$pwdRepeat);
   $invalidUid = invalidUid($username);
   $invalidEmail = invalidEmail($email);
   $pwdMatch = pwdMatch($pwd,$pwdRepeat);
   $uidExists = uidExists($conn, $username, $email);

    if($emptyInput !==false){
        header("Location:../signup.php?error=emptyinput");
        exit();
    }
    if($invalidUid !==false){
        header("Location:../signup.php?error=invalidUid");
        exit();}
    if($invalidEmail !==false){
        header("Location:../signup.php?error=invalidEmail");
        exit();}
    if (pwdMatch($pwd, $pwdRepeat)) {
    header("location: ../signup.php?error=passwordsdontmatch");
    exit();}
    if (isset($_POST["pwdRepeat"])) {
    $pwdRepeat = $_POST["pwdRepeat"];
} else {
    // Handle the missing field, e.g., show error or set a default
    $pwdRepeat = "";
}
}
else{
    header('Location:../login.php');
    exit();
}