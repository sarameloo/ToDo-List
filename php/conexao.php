<?php

$server_name = "localhost";
$user_name = "root";
$password = "";
$database = "tarefas";

$conexao = new mysqli($server_name, $user_name, $password, $database);


//if ($conexao->connect_errno) {
//  echo "falha na conexão";
//}
//else
//echo "conectado ao banco de dados";

?>