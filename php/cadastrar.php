<?php

include 'conexao.php'; // exportando conexão do banco de dados

$nome = $_POST["nome"]; // pegando o nome do usuário via post
$email = $_POST['email']; // pegando email do usuário via post 
$senha = $_POST["senha"]; // pegando senha do usuário via post 

// POST -> superglobal

$conferir_email = "select email from usuario where email = '$email'";
//comando sql de consulta do email do usuário

$conferir_nome = "select nome from usuario where nome = '$nome'";
//comando sql de consulta do nome do usuário

$query_email = $conn->query($conferir_email);
$query_nome = $conn->query($conferir_nome);
//Execultando consulta de email e nome

if ($query_email->num_rows == 0 && $query_nome->num_rows == 0) {
    //se nome e email ainda não cadastrado

    $hash_senha = password_hash($senha, PASSWORD_DEFAULT);
    //criptografando senha

    $conn->query("insert into usuario (email, nome, senha) values ('$email', '$nome', '$hash_senha')");
    echo "Cadastrado";
    //inserindo os valores no banco

} else if ($query_email->num_rows == 0 && $query_nome->num_rows > 0) {
    echo "Nome em uso";
    //se o nome já está em uso

} else if ($query_email->num_rows > 0 && $query_nome->num_rows == 0) {
    echo "Email em uso";
    //se o email já está em uso

} else {
    echo "Nome e email em uso";
}
    //se os dois já estão em uso