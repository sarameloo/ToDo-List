<?php

include 'conexao.php';
session_start();

$email = $_SESSION['email'];
$stmt = $conn->prepare("select * from tarefa where id_usuario = ? and status = 'criada'");
$stmt->execute([$email]);
$result = $stmt->get_result();
$tarefas = [];
while($tarefa_row=$result->fetch_assoc()){
  $tarefas[]=$tarefa_row;
}
$tarefas_json = json_encode($tarefas);
header('Content-Type: application/json');
echo $tarefas_json;