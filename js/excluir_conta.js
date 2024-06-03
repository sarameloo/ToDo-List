const deletar_conta = document.querySelector('.excluir-conta'); //pegando botão de excluir conta

deletar_conta.addEventListener('click', (event)=>{ //adicionando evento de click
    event.preventDefault(); //previnindo evento padrão
    var confirmacao = confirm('Deseja excluir sua conta?'); //alerta de confirmação
    if (confirmacao){ //se o retorno for verdadeiro
        fetch('php/excluir_conta.php',{ //fazendo requisição via fetch
            method: 'POST' //método de envio POST
        })
        .then((response)=>{ //reposta de requisição
            if (!response.ok){ //se a resposta não for 'ok'
                throw new Error('Falha na requisição'); //mensagem de erro
            }
            else{
                window.location.href = "login.html"; //redirecionando para o página de login
            }
        })
        .catch((erro)=>{ //tratando erros
            console.log(erro); //imprimindo erros da requisição
        })
    }
})