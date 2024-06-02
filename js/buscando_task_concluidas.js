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
        data.forEach(tasks_feitas=>{
            switch(tasks_feitas.prioridade){
                case 'baixa':
                    var feita = 'img/checked-baixo.svg';
                    break;
                case 'media':
                    var feita = 'img/checked-medio.svg';
                    break;
                case 'alta':
                    var feita = 'img/checked-alto.svg';
                    break;
            }
            list_concluidas.innerHTML += [
                `<div class = "task" id="${tasks_feitas.id_tarefa}">`,
                '<div class="check-task">',
                    '<button class="concluida">',
                    `<img src="${feita}" width="24px" alt="" id="check">`,
                    '</button>',
                '</div>',
                '<div class="infor">',
                    `<p class="title-task dashed">${tasks_feitas.titulo}</p>`,
                    '<div class="description">',
                    `<p class="description-task">${tasks_feitas.descricao}</p>`,
                    '</div>',
                    '<div class="DPC">',
                    `<span class="prazo"><img src="img/date.svg" width="16px" alt="">${tasks_feitas.prazo}</span>`,
                    `<span class="comp"><img src="img/Complexity.svg" width="16px" alt="">${tasks_feitas.complexidade}</span>`,
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