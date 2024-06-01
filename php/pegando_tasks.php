<?php

include 'conexao.php';
session_start();

$email = $_SESSION['email'];
$stmt = $conn->prepare("select * from tarefas where id_usuario = ?");
$stmt->execute([$email]);
$resulte = $stmt->get_result();
$tarefas = [];
while($tarefa_row=$resulte->fetch_assoc()){
  $tarefas[]=$tarefa_row;
}
$tarefas_json=json_encode($tarefas);
header('Content-Type: application/json');
echo $tarefas_json;