<?php

include 'conexao.php';
session_start();

$nome = $_POST["nome"];
$senha = $_POST["senha"];

$conferir_nome = "select email from usuario where nome = '$nome'";
$conferir_senha = "select senha from usuario where senha = '$senha'";

$result_nome = $conn->query($conferir_nome);
$result_senha = $conn->query($conferir_senha);

if ($result_nome->num_rows > 0 && $result_senha->num_rows > 0) {
    while ($row = $result_nome->fetch_assoc()) {
        $_SESSION['email'] = $row["email"];
    }
} else {
    echo "Nome inválido";
}
