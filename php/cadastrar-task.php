<?php

include "conexao.php";

$titulo = $_POST["title"];
$descricao = $_POST["description"];
$prazo = $_POST["date"];
$prioridade = $_POST["priority"];
$complexidade = $_POST["complexity"];
$status = "criada";
$id_usuario="mary@gmail.com";

$query_insert = "insert into tarefa (titulo, descricao, prazo, prioridade, complexidade, status,id_usuario) values ('$titulo', '$descricao', '$prazo', '$prioridade', '$complexidade', '$status','$id_usuario')";

$conn->query($query_insert);


?>