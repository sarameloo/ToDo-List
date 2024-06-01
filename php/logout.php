<?php 

session_start(); //iniciando sessão
$_SESSION['email'] = ''; //apagando email da sessão
session_destroy(); //encerrando sessão
http_response_code(200); //retornando status do arquivo

?>