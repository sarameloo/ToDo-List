<?php

include 'conexao.php'; // exportando conexão do banco de dados

$email = $_POST["email"]; //pegando email via POST
$senha = $_POST["senha"]; //pegando senha via POST

$query_email = $conn->query("select email from usuario where email = '$email'");
//pesquisando email no banco de dados

$query_senha = $conn->query("select senha from usuario where email = '$email'");
//pesquisando senha do email no banco de dados

if ($query_email->num_rows > 0) {
    //conferindo se o email existe no banco de dados

    $row_senha = $query_senha->fetch_assoc();
    //pegando o valor da senha criptografada no bd

    if (password_verify($senha, $row_senha['senha'])) {
        //conferindo se a senha digitada bate com a do banco

        session_start();
        $_SESSION['email'] = $email;
        //iniciando sessão e guardando email na sessão

    }else {
        echo "Senha incorreta";
    }
    //se a senha estiver errada
}
else {
    echo "Email incorreto";
}
//se o email estiver incorreto