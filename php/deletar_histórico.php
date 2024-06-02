<?php

include 'conexao.php';
session_start();

$email = $_SESSION['email'];
$stmt = $conn->prepare("delete from tarefa where id_usuario = ? and status = 'concluida'");
$stmt->execute([$email]);


?>