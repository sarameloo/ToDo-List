<?php

$server_name = "localhost"; // local do banco de dados (servidor local)
$user_name = "root"; // usuário raiz
$password = ""; // senha vazia
$database = "tarefas"; // nome do banco de dados

$conn = new mysqli($server_name, $user_name, $password, $database); //conectando com o banco de dados