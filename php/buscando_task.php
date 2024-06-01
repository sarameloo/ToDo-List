<?php 

include 'conexao.php';
session_start();

$email = $_SESSION['email'];
$stmt = $conn->prepare("select * from tarefa where = ?");
$stmt->bind_param("s", $email);
if($stmt->execute()){
    if($stmt->num_rows()>0){
        echo "bla bla bla";
    }
}

?>