<?php

include 'conexao.php';

$email = $_POST["email"];
$senha = $_POST["senha"];

$query_email = $conn->query("select email from usuario where email = '$email'");
$query_senha = $conn->query("select senha from usuario where email = '$email'");

if ($query_email->num_rows > 0) {
    $row_senha = $query_senha->fetch_assoc();
    if (password_verify($senha, $row_senha['senha'])) {
        session_start();
        $_SESSION['email'] = $email;
    }else {
        echo "Senha incorreta";
    }
}
else {
    echo "Email incorreto";
}