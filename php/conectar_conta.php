<?php

include 'conexao.php';
session_start();

$email = $_SESSION['email'];
$query_nome = "select nome from usuario where email = ?";
$stmt = $conn->prepare($query_nome);
$stmt->bind_param("s", $email); 
$stmt->execute();
$result = $stmt->get_result();
$row = $result->fetch_assoc();
$nome = $row['nome'];
$stmt->close();
echo "$nome";


?>