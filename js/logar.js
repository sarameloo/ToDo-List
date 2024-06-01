const meu_form = document.querySelector('.card'); //pegando elemento html

meu_form.addEventListener('submit', event=>{ //adicionando ouvinte de evento submit
    event.preventDefault(); //previnido evento padrão
    let form_data = new FormData(meu_form); //instaciando FormData e adcionando formulário
    
    fetch('php/logar.php', { //fazendo requisição
        method: 'POST', //envio via POST
        body: form_data //corpo de envio
    })
    .then(response =>{ //reposta da requisição
        if(!response.ok){ //se resposta não for 200
            throw new Error('Falha na requisição'); //mensagem de erro na requisição
        }
        return response.text(); //retorno da rqeuisição em texto
    })
    .then(data =>{ //dados da requisição
        let alerta_email = document.querySelector('.a_nome-email'); //pegando alerta de email incorreto
        let alerta_senha = document.querySelector('.a_senha'); //pegando alerta de senha incorreta
        switch(data){ //conferindo valor de data
            case "Email incorreto": //se data = "Email incorreto"
                alerta_email.classList.toggle('show'); //ativando alerta com a class show
                setTimeout(()=>{
                    alerta_email.classList.toggle('show'); //desativando alerta após 2.7segundo
                }, 2700);
                break;
            case "Senha incorreta": //se data = Senha incorreta
                alerta_senha.classList.toggle('show'); //ativando alerta
                setTimeout(()=>{
                    alerta_senha.classList.toggle('show'); //desativando alerta após 2.7segundos
                }, 2700);
                break;
            default: //se data não for nenhuma das outras opções
                window.location.href = "inicio.html"; //redirecionando para o inicio
                break;
        }
    })
    .catch(error =>{ //erros da requisição
        console.log(error); //imprimindos erros
    })
})