<?php 

include 'conexao.php';
session_start();

$email = $_SESSION['email'];
$stmt = $conn->prepare("select * from tarefa where id_usuario = ? and status = 'concluida'");
$stmt->execute([$email]);
$result = $stmt->get_result();
$tarefas_concluidas = [];
while ($tarefa_row = $result->fetch_assoc()) {
    $tarefas_concluidas[] = $tarefa_row;
}
$tarefas_concluidas_json = json_encode($tarefas_concluidas);
header('Content-Type: application/json');

echo $tarefas_concluidas_json;

?>