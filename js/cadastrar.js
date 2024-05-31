const meu_form = document.querySelector('.card'); //pegando elemento do html

meu_form.addEventListener('submit', event=>{ //adicionando ouvinte
    event.preventDefault(); //evitando função padrão do evento
    let form_data = new FormData(meu_form); //instanciando formdata
    //console.log(form_data)
    
    fetch('php/cadastrar.php', {
        method: 'POST',  //método POST
        body: form_data, //corpo do formdata
    })
    .then(response =>{
        if(!response.ok){
            throw new Error('Falha na requisição');
            //se o status for 500 (erro da requisição)
        }
        return response.text(); //retorno de resposta em texto
    })
    .then(data =>{
        let alerta_nome = document.querySelector('.a_nome-email'); 
        let alerta_email = document.querySelector('.a_email');
        //pegando elementos do html

        switch(data){
            case "Nome em uso":
                alerta_nome.classList.toggle('show');
                setTimeout(()=>{
                    alerta_nome.classList.toggle('show');
                }, 2700);
                //se nome já em uso, alerta de nome
                break;
            case "Email em uso":
                alerta_email.classList.toggle('show');
                setTimeout(()=>{
                    alerta_email.classList.toggle('show');
                }, 2700);
                //se email já em uso, alerta de email
                break;
            case "Nome e email em uso":
                alerta_nome.classList.toggle('show');
                alerta_email.classList.toggle('show');
                setTimeout(()=>{
                    alerta_nome.classList.toggle('show');
                    alerta_email.classList.toggle('show');
                }, 2700);
                //se os dois já estão em uso, ambos são alertados
                break;
            default:
                window.location.href = 'login.html';
                //caso não há problema, te redireciona p/ página de login
                break;
        }
    })
    .catch(error =>{
        console.log(error); //mostrando erros, se houver

    })

})