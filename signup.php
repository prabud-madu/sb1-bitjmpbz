<?php
include_once 'header.php'
?>
<div class="form">
    <h1>Fardar IT</h1>
    <form action="includes/signup.inc.php"method="post">

        <input type="text" id="fname" name="name" placeholder="Name">
        <input type="text" id="lname" name="email" placeholder="Email">
        <input type="text" id="fname" name="uid" placeholder="Username">
        <input type="text" id="fname" name="pwd" placeholder="Password">
        <input type="password" name="pwdRepeat" placeholder="Repeat your password">
        <button name="submit" type="submit">Register</button>
       
    </form>
    <p>Already have an account? <a href="login.php">Login</a></p>
    </div>


<?php 
include_once 'footer.php'
?>