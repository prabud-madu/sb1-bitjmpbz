<?php 
function emptyInputSignup($name, $email, $username, $pwd, $pwdRepeat) {
    $result;
    if (empty($name) || empty($email) || empty($username) || empty($usernic) || empty($pwd) || empty($pwdRepeat)) {
        $result = true;
    } else {
        $result = false;
    }
    return $result;
}
function invalidUid($username) {
    return !preg_match("/^[a-zA-Z0-9]*$/", $username);  // ✅ closing delimiter added
}


function invalidEmail($email) {
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return true;
    } else {
        return false;
    }
}

function pwdMatch($pwd, $pwdRepeat) {
    return $pwd !== $pwdRepeat;
}

function uidExists($conn, $username, $email) {
    // Replace these with your actual column names:
    $sql = "SELECT * FROM users WHERE username = ? OR useremail = ?;";
    
    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sql)) {
        header("location: ../signup.php?error=stmtfailed");
        exit();
    }

    mysqli_stmt_bind_param($stmt, "ss", $username, $email);
    mysqli_stmt_execute($stmt);

    $resultData = mysqli_stmt_get_result($stmt);

    if ($row = mysqli_fetch_assoc($resultData)) {
        return $row;
    } else {
        return false;
    }

    mysqli_stmt_close($stmt);
}

function createUser($conn, $name, $email, $username, $pwd){
    $sql ="INSERT INTO users(usersname, usersemail, usersUid, usersNic, usersPwd)VALUES (?,?,?,?,?);";
    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt,$sql)){
        header("Location:../signup.php?error=stmtfaild");
        exit();  
}
$hashedPwd = password_hash($pwd, PASSWORD_DEFAULT);
mysqli_stmt_bind_param($stmt, "sss", $name, $email, $username, $hashedPwd);
mysqli_stmt_excute($stmt);
mysqli_stmt_close($stmt);
header("Location:../signup.php?error=none");
exit()
;}