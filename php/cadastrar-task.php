<?php
if(isset($_POST['submit']))
{
  //print_r($_POST['title']);
  //print_r($_POST['description']);
  //print_r($_POST['date']);
  //print_r($_POST['priority']);
  //print_r($_POST['complexity']);
//}

include_once('conexao.php');

$titulo = $_POST['title'];
$descricao = $_POST['description'];
$prazo = $_POST['date'];
$prioridade = $_POST['priority'];
$complexidade = $_POST['complexity'];
$status = "criada";


$result = mysqli_query($conexao, "INSERT INTO tarefa (titulo, descricao, prazo, prioridade, complexidade, status) values ('$titulo', '$descricao', '$prazo', '$prioridade', '$complexidade', '$status')");

}



//include "conexao.php";

//$titulo = $_POST["titulo"];
//$descricao = $_POST["descricao"];
//$prazo = $_POST["prazo"];
//$prioridade = $_POST["prioridade"];
//$complexidade = $_POST["complexidade"];
//$status = "criada";

//$query_insert = "insert into tarefa (titulo, descricao, prazo, prioridade, complexidade, status) values ('$titulo', '$descricao', '$prazo', '$prioridade', '$complexidade', '$status')";

//$conn->query($query_insert);


?>