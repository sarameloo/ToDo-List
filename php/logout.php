<?php 

session_start();
$_SESSION['email'] = '';
session_destroy();
http_response_code(200);

?>