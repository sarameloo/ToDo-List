<?php

header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Origin: *");

include 'conexao.php';

session_start();
$email = $_SESSION['email'];
$sql_nome = "select nome from usuario where = ?";
$stmt = $conn->prepare($sql_nome);
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->close();

//$nome = $row['nome'];
echo "Hello word";


?>