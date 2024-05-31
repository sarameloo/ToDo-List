<?php 

include 'conexao.php'; // exportando conexão do banco de dados
session_start(); //iniciando sessão

$email = $_SESSION['email']; //pegando email da sessão

$sql_tarefa = "delete from tarefa where id_usuario = ?";
//pegando pesquisa de tarefas do usuário

$sql_usuario = "delete from usuario where email = ?";
//pegando pesquisa de conta do usuário

$stmt = $conn->prepare($sql_tarefa); //consulta preparada das tarefas do usuário
$stmt->bind_param("s", $email); //substituindo parâmetro por email 
$stmt->execute(); // excluindo todas as terefas do usuário
$stmt = $conn->prepare($sql_usuario); //consulta preparada da conta do usuário
$stmt->bind_param("s", $email); //substituindo parâmetro por email 
$stmt->execute(); //excluindo usuário
session_destroy(); //encerrando sessão
http_response_code(200); //retorno do status do arquivo
$stmt->close(); //excerrando consultas preparadas

?>