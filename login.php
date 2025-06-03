<?php
include_once 'header.php'
?>
<div class="form">
    <h1>Fardar IT</h1>
    <form action="includes/login.inc.php"method="post">

        <input type="text" id="fname" name="uid" placeholder="Email/Username">
        <input type="password" id="lname" name="pwd" placeholder="Password">
        <button name="submit" type="submit">Login</button>
       
    </form>
    <p>New Heare? Register. <a href="signup.php">Register</a></p>
    </div>


<?php 
include_once 'footer.php'
?>