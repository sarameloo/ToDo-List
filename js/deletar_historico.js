const btn_reset = document.querySelector('.btn_reset');
btn_reset.addEventListener('click', event=>{
    event.preventDefault();
    fetch('php/deletar_histórico.php', {
        method: 'POST'
    })
    .then(response=>{
        if(!response.ok){
            throw new Error('Falha na requisição');
        }
        return response.text();
    })
    .catch(error=>{
        console.log(error);
    })
    window.location.href = 'inicio.html';
})