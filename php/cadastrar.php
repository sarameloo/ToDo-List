<?php

include 'conexao.php';

$nome = $_POST["nome"];
$email = $_POST['email'];
$senha = $_POST["senha"];

$conferir_email = "select email from usuario where email = '$email'";
$conferir_nome = "select nome from usuario where nome = '$nome'";
$query_email = $conn->query($conferir_email);
$query_nome = $conn->query($conferir_nome);

if ($query_email->num_rows == 0 && $query_nome->num_rows == 0) {
    $hash_senha = password_hash($senha, PASSWORD_DEFAULT);
    $conn->query("insert into usuario (email, nome, senha) values ('$email', '$nome', '$hash_senha')");
} else if ($query_email->num_rows == 0 && $query_nome->num_rows > 0) {
    echo "Nome em uso";
} else if ($query_email->num_rows > 0 && $query_nome->num_rows == 0) {
    echo "Email em uso";
} else {
    echo "Nome e email em uso";
}