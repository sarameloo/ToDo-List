<?php 
session_start();
echo $_SESSION['email'] . "\n";
session_destroy();
echo "Logout";

?>