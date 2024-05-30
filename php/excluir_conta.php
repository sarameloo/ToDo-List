<?php 

include 'conexao.php';
session_start();
$email = $_SESSION['email'];
$sql_tarefa = "delete from tarefa where id_usuario = ?";
$sql_usuario = "delete from usuario where email = ?";
$stmt = $conn->prepare($sql_tarefa);
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt = $conn->prepare($sql_usuario);
$stmt->bind_param("s", $email);
$stmt->execute();
session_destroy();
http_response_code(200);
$stmt->close();

?>