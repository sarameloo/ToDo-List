const myForm = document.querySelector("#myForm");
const task_list = document.querySelector('.task-list');

myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let form_data = new FormData(myForm);
  
  fetch("php/cadastrar-task.php", {
    method: "POST",
    body: form_data,
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error("Falha na requisição");
    }
    return response.text();
  })
  .then((data) => {
    if (data.length > 0) {
      setTimeout(() => {
        myForm.reset();
      }, 3000);
      alert(data);
    }
    fetch ('php/buscando_task.php', {
      method: 'POST'
    })
    .then(response2=>{
      if(!response2.ok){
        throw new Error('falha na requisição');
      }
      return response2.json();
    })
    .then(data2=>{
      let tarefa = data2;
      task_list.innerHTML += [
        `<div class="task" id = "${tarefa.id_tarefa}">`,
          '<div class="check-task">',
            '<button class="check">',
              '<img src="./img/check.png" width="24px" alt="" id="check">',
            '</button>',
          '</div>',
          '<div class="infor">',
            `<p class="title-task">${tarefa.titulo}</p>`,
            '<div class="description">',
              `<p class="description-task">${tarefa.descricao}</p>`,
            '</div>',
            '<div class="DPC">',
              `<span>${tarefa.prazo}</span>`,
              `<span>${tarefa.prioridade}</span>`,
              `<span>${tarefa.complexidade}</span>`,
            '</div>',
          '</div>',
          '<div class="excluir-task">',
            '<button class="delete">',
              '<img src="./img/delete.png" width="24px" alt="">',
            '</button>',
          '</div>',
        '</div>',
      ].join('');
    })
    .catch(error2=>{
      console.log(error2);
    })
  })
  .catch((error) => {
    console.log(error);
    alert(error);
  });
});

window.addEventListener('load', function(){
  fetch('php/pegando_tasks.php', {
    method: 'POST'
  })
  .then(response=>{
    if(!response.ok){
      throw new Error('falha na requisição');
    }
    return response.json();
  })
  .then(data=>{
    const tarefa = data;
    data.forEach(task => {
      console.log(`ID da tarefa: ${task.id_tarefa}`);
      console.log(`Descrição: ${task.descricao}`);
      console.log(`Data de criação: ${task.data_criacao}`);
      console.log(`Status: ${task.status}`);
      console.log(`ID do usuário: ${task.id_usuario}`);
      console.log('---');
    });
    // task_list.innerHTML+= [
    //   `<div class="task" id = "${tarefa.id_tarefa}">`,
    //     '<div class="check-task">',
    //       '<button class="check">',
    //         '<img src="./img/check.png" width="24px" alt="" id="check">',
    //       '</button>',
    //     '</div>',
    //     '<div class="infor">',
    //       `<p class="title-task">${tarefa.titulo}</p>`,
    //       '<div class="description">',
    //         `<p class="description-task">${tarefa.descricao}</p>`,
    //       '</div>',
    //       '<div class="DPC">',
    //         `<span>${tarefa.prazo}</span>`,
    //         `<span>${tarefa.prioridade}</span>`,
    //         `<span>${tarefa.complexidade}</span>`,
    //       '</div>',
    //     '</div>',
    //     '<div class="excluir-task">',
    //       '<button class="delete">',
    //         '<img src="./img/delete.png" width="24px" alt="">',
    //       '</button>',
    //     '</div>',
    //   '</div>',
    // ].join('');
  })
})



// const add_task = document.querySelector('.add-task');
// const input_titulo = document.querySelector('#title');
// const input_descricao = document.querySelector('#description');
// const input_prazo = document.querySelector('#date');
// const select_prioridade = document.querySelector('#priority');
// const select_complexidade = document.querySelector('#complexity');

// add_task.addEventListener('click', ()=>{
  // var title = input_titulo.value;
  // var description = input_descricao.value;
  // var date = input_prazo.value;
  // var priority = select_prioridade.value;
  // var complexity = select_complexidade.value;
  // console.log(title, description, date, priority, complexity);

 



// })

