<?php

include "conexao.php";
session_start();

$email = $_SESSION['email'];
$query_terefas = "select * from tarefa where = ?";

$stmt = $conn->prepare($query_terefas);
$stmt -> bind_param("s", $email);
if($stmt -> execute()){
  echo "bla bla bla";
}
