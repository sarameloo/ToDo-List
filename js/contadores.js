const criadas = document.querySelector('.cont_criadas');
const concluidas = document.querySelector('.cont_concluidas');

window.addEventListener('load', event=>{
    event.preventDefault();
    fetch('php/contadores.php', {
        method: 'POST'
    })
    .then(response=>{
        if(!response.ok){
            throw new Error('Falha na requisição');
        }
        return response.json();
    })
    .then(data=>{
        criadas.textContent = data.criadas; 
        concluidas.textContent = data.concluidas;
    })
    .catch(error=>{
        console.log(error);
    })
})