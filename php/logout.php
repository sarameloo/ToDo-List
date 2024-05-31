<?php 

session_start(); //iniciando sessão
$_SESSION['email'] = ''; //apagnado email da sessão
session_destroy(); //encerrando sessão
http_response_code(200); //retornando status do arquivo

?>