<?php 

include 'conexao.php';
session_start();

$email = $_SESSION['email'];
$stmt = $conn->prepare("select (select count(*) from tarefa where id_usuario = ? and status = 'criada') as criadas, (select count(*) from tarefa where id_usuario = ? and status = 'concluida') as concluidas");
$stmt->execute([$email, $email]);
$result = $stmt->get_result();
$num = $result->fetch_assoc();
$cc_json = json_encode($num);

header('Content-Type: application/json');

echo $cc_json;

?>