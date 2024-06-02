const myForm = document.querySelector("#myForm");
const task_list = document.querySelector('.task-list');
const cont_criadas = document.querySelector('.cont_criadas');

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
      let contador = Number(cont_criadas.textContent);
      let soma = contador + 1;
      cont_criadas.textContent = String(soma);
      let tarefa = data2;
      var check_criar;
      var delete_criar;
      switch(tarefa.prioridade){
        case 'baixa':
          check_criar = 'img/check-baixo.svg';
          delete_criar = 'img/delete-baixo.svg';
          break;
        case 'media':
          check_criar = 'img/check-medio.svg';
          delete_criar = 'img/delete-medio.svg';
          break;
        case 'alta':
          check_criar = 'img/check-alto.svg';
          delete_criar = 'img/delete-alto.svg';
          break;
      }
      task_list.innerHTML += [
        `<div class="task" id="${tarefa.id_tarefa}">`,
          '<div class="check-task">',
            '<button class="concluir">',
              `<img src="${check_criar}" width="20px" alt="" id="check">`,
            '</button>',
          '</div>',
          '<div class="infor">',
            `<p class="title-task">${tarefa.titulo}</p>`,
            '<div class="description">',
              `<p class="description-task">${tarefa.descricao}</p>`,
            '</div>',
            '<div class="DPC">',
              `<span class="prazo"><img src="img/date.svg" width="16px" alt="">${tarefa.prazo}</span>`,
              `<span class="comp"><img src="img/Complexity.svg" width="16px" alt="">${tarefa.complexidade}</span>`,
            '</div>',
          '</div>',
          '<div class="excluir-task">',
            '<button class="delete">',
              `<img src="${delete_criar}" width="20px" alt="">`,
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

window.addEventListener('load', event=>{
  event.preventDefault();
  
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
    let task = data;
    var check;
    var deletar;
    task.forEach(element => {
      switch(element.prioridade){
        case 'baixa':
          check = 'img/check-baixo.svg';
          deletar = 'img/delete-baixo.svg';
          break;
        case 'media':
          check = 'img/check-medio.svg';
          deletar = 'img/delete-medio.svg';
          break;
        case 'alta':
          check = 'img/check-alto.svg';
          deletar = 'img/delete-alto.svg';
          break;
      }
      task_list.innerHTML+= [
        `<div class = "task" id="${element.id_tarefa}">`,
          '<div class="check-task">',
            '<button class="concluir">',
              `<img src="${check}" width="20px" alt="" id="check">`,
            '</button>',
          '</div>',
          '<div class="infor">',
            `<p class="title-task">${element.titulo}</p>`,
            '<div class="description">',
              `<p class="description-task">${element.descricao}</p>`,
            '</div>',
            '<div class="DPC">',
              `<span class="prazo"><img src="img/date.svg" width="16px" alt="">${element.prazo}</span>`,
              `<span class="comp"><img src="img/Complexity.svg" width="16px" alt="">${element.complexidade}</span>`,
            '</div>',
          '</div>',
          '<div class="excluir-task">',
            '<button class="delete">',
              `<img src="${deletar}" width="24px" alt="">`,
            '</button>',
          '</div>',
        '</div>',
      ].join('');
      
    });
  })
  .catch(error=>{
    console.log(error);
  })
    

});



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

