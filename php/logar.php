<?php

include 'conexao.php';
session_start();

$nome = $_POST["email"];
$senha = $_POST["senha"];

$conferir_email = "select email from usuario where email = '$email'";
$conferir_senha = "select senha from usuario where senha = '$senha'";

echo $conferir_email

$result_email = $conn->query($conferir_email);
$result_senha = $conn->query($conferir_senha);

if ($result_email->num_rows > 0 && $result_senha->num_rows > 0) {
    while ($row = $result_email->fetch_assoc()) {
        $_SESSION['email'] = $row["email"];
    }
} else {
    echo "Email inválido";
}