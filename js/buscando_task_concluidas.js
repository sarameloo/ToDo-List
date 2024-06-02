const list_concluidas = document.querySelector('.tasks_concluidas');
const contador_historico = document.querySelector('.contador');
window.addEventListener('load', event=>{
    event.preventDefault();
    fetch('php/buscando_tasks_concluidas.php', {
        method: 'POST'
    })
    .then(response=>{
        if(!response.ok){
            throw new Error('Falha na requisição');
        }
        return response.json()
    })
    .then(data=>{
        let teste = data;
        teste.forEach(task=>{
            list_concluidas.innerHTML += [
                `<div class = "task" id="${task.id_tarefa}">`,
                '<div class="check-task">',
                    '<button class="concluida">',
                    '<img src="img/checked.png" width="24px" alt="" id="check">',
                    '</button>',
                '</div>',
                '<div class="infor">',
                    `<p class="title-task dashed">${task.titulo}</p>`,
                    '<div class="description">',
                    `<p class="description-task">${task.descricao}</p>`,
                    '</div>',
                    '<div class="DPC">',
                    `<span>${task.prazo}</span>`,
                    `<span>${task.prioridade}</span>`,
                    `<span>${task.complexidade}</span>`,
                    '</div>',
                '</div>',
                '<div class="excluir-task">',
                    // '<button class="delete">',
                    // '<img src="./img/delete.png" width="24px" alt="">',
                    // '</button>',
                '</div>',
                '</div>',
            ].join('');
        })
    })
    .catch(error=>{
        console.log(error);
    })

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
        contador_historico.textContent = data.concluidas;
    })
    .catch(error=>{
        console.log(error);
    })
})