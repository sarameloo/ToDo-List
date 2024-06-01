<?php 

include 'conexao.php';
session_start();

$id = $_POST['id'];
$email = $_SESSION['email'];
$stmt = $conn->prepare("delete from tarefa where id_tarefa = ? and id_usuario = ?");
$stmt->execute([$id, $email]);


?>