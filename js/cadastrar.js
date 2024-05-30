const meu_form = document.querySelector('.card');

meu_form.addEventListener('submit', event=>{
    event.preventDefault();
    let form_data = new FormData(meu_form);
    
    fetch('php/cadastrar.php', {
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
        let alerta_nome = document.querySelector('.a_nome-email');
        let alerta_email = document.querySelector('.a_email');
        switch(data){
            case "Nome em uso":
                alerta_nome.classList.toggle('show');
                setTimeout(()=>{
                    alerta_nome.classList.toggle('show');
                }, 2700);
                break;
            case "Email em uso":
                alerta_email.classList.toggle('show');
                setTimeout(()=>{
                    alerta_email.classList.toggle('show');
                }, 2700);
                break;
            case "Nome e email em uso":
                alerta_nome.classList.toggle('show');
                alerta_email.classList.toggle('show');
                setTimeout(()=>{
                    alerta_nome.classList.toggle('show');
                    alerta_email.classList.toggle('show');
                }, 2700);
                break;
            default:
                window.location.href = 'login.html';
                break;
        }
    })
    .catch(error =>{
        console.log(error);
    })

})