<?php

header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Origin: *");

include "conexao.php";

session_start();
$email = $_SESSION['email'];

$sql_nome = "select nome from usuario where = '$email'";
$resultado = $conn->query($sql_nome);

$row = $resultado->fetch_assoc();

$nome = $row['nome'];
echo "Hello word"


?>