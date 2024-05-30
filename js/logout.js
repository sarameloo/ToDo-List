const btn = document.querySelector('.profile');

btn.addEventListener('click', (event)=>{
    event.preventDefault();
    fetch('php/logout.php')
    
    .then((response)=>{
        if (!response.ok){
            throw new Error('Falha na requisição');
        }
        return response.text;
    })
    
    .then((data)=>{
        if(data.length > 0){
            window.location.href = 'login.html';
        }
    })
    
    .catch((erro)=>{
        console.log(erro);
    })
})
