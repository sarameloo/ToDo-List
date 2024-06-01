<?php 

include 'conexao.php';
session_start();

$email = $_SESSION['email'];
$stmt = $conn->prepare("select * from tarefa where id_usuario = ? and id_tarefa = (select MAX(id_tarefa) as id_max from tarefa where id_usuario = ?)");
$stmt->execute([$email, $email]);
$row = $stmt->get_result();
$tarefa = $row->fetch_assoc();

$task_json = json_encode($tarefa);

header('Content-Type: application/json');

echo $task_json;

?>