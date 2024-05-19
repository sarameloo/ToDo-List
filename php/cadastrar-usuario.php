<?php

include "conexao.php";

$email = $_POST["email"];
$nome = $_POST["nome"];
$senha = $_POST["senha"];

$query_insert = "insert into usuario (email, nome, senha) values ('$email', '$nome', '$senha')";

$conn->query($query_insert);


?>