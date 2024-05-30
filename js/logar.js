const meu_form = document.querySelector('.card');

meu_form.addEventListener('submit', event=>{
    event.preventDefault();
    let form_data = new FormData(meu_form);
    
    fetch('php/logar.php', {
        method: 'POST',
        body: form_data
    })
    .then(response =>{
        if(!response.ok){
            throw new Error('Falha na requisição');
        }
        return response.text();
    })
    .then(data =>{
        let alerta_email = document.querySelector('.a_nome-email');
        let alerta_senha = document.querySelector('.a_senha');
        switch(data){
            case "Email incorreto":
                alerta_email.classList.toggle('show');
                setTimeout(()=>{
                    alerta_email.classList.toggle('show');
                }, 2700);
                break;
            case "Senha incorreta":
                alerta_senha.classList.toggle('show');
                setTimeout(()=>{
                    alerta_senha.classList.toggle('show');
                }, 2700);
                break;
            default:
                window.location.href = "inicio.html";
                break;
        }
    })
    .catch(error =>{
        console.log(error);
    })

})