<?php

include "conexao.php"; // exportando conexão do banco de dados
session_start(); //iniciando sessão

$titulo = $_POST["title"]; //pegando título
$descricao = $_POST["description"]; //pegando descrição
$prazo = $_POST["date"]; //pegando prazo
$prioridade = $_POST["priority"]; //pegando prioridade
$complexidade = $_POST["complexity"]; //pegando complexidade
$status = "criada"; //status criado
$id_usuario = $_SESSION['email']; //pegando email da sessão

$query_insert = "insert into tarefa (titulo, descricao, prazo, prioridade, complexidade, status, id_usuario) values ('$titulo', '$descricao', '$prazo', '$prioridade', '$complexidade', '$status','$id_usuario')";
//comando de inserção de dados

$conn->query($query_insert);
//inserindo dados da task no banco de dados
echo "Tarefa cadastrada"

?>