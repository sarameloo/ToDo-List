const btn = document.querySelector('.profile');

btn.addEventListener('click', (event)=>{
    event.preventDefault();
    fetch('php/logout.php',{
        method: 'POST'
    })
    .then((response)=>{
        if (!response.ok){
            throw new Error('Falha na requisição');
        }
        else{
            window.location.href = "login.html";
        }
    })
    .catch((erro)=>{
        console.log(erro);
    })
})
