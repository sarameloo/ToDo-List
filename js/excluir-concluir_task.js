const cont_concluidas = document.querySelector('.cont_concluidas');
function deletar_concluir_task(){
    var tarefas = document.querySelectorAll('.task');
    tarefas.forEach(task=>{
        var btn_delete = task.querySelector('.delete');
        var btn_concluir = task.querySelector('.concluir');
        btn_delete.addEventListener('click', (event)=>{
            event.preventDefault();
            fetch('php/excluir_task.php',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `id=${task.id}`
            })
            .then(response=>{
                if(!response.ok){
                    throw new Error ('falha na requisição');
                } else{
                    task.remove();
                }
                return response.text();
            })
            .catch(error=>{
                console.log(error);
            })
        })
        btn_concluir.addEventListener('click', (event)=>{
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
                cont_concluidas.textContent = data.concluidas;
            })
            .catch(error=>{
                console.log(error);
            })
            fetch('php/concluir_task.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `id=${task.id}`
            })
            .then(response=>{
                if(!response.ok){
                    throw new Error('Falha na requisição');
                } else{
                    task.remove();
                }
                return response.text();
            })
            .catch(error=>{
                console.log(error);
            })
        })
    })
}

const monitor = new MutationObserver(mutations=>{
    mutations.forEach(mutation=>{
        if(mutation.type === 'childList'){
            deletar_concluir_task();
        }
    })
})

const config = { childList: true, subtree: true };
monitor.observe(document.body, config);