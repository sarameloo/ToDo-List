const task_list = document.querySelector('.task-list');
const add_task = document.querySelector('.add-task');
const input_titulo = document.querySelector('#title');
const input_descricao = document.querySelector('#description');
const input_prazo = document.querySelector('#date');
const select_prioridade = document.querySelector('#priority');
const select_complexidade = document.querySelector('#complexity');



add_task.addEventListener('click', ()=>{
  // var title = input_titulo.value;
  // var description = input_descricao.value;
  // var date = input_prazo.value;
  // var priority = select_prioridade.value;
  // var complexity = select_complexidade.value;
  // console.log(title, description, date, priority, complexity);

fetch ('php/buscando_task.php', {
  method: 'POST'
})
.then(response=>{
  if(!response.ok){
    throw new Error('falha na requisição');
  }
  return response.json();
})
.then(data=>{
  console.log(data.descricao);
})
.catch(error=>{
  console.log(error);
})


  //task_list.innerHTML += [
  //  '<div class="task">',
  //    '<div class="check-task">',
  //      '<button class="check">',
  //        '<img src="./img/check.png" width="24px" alt="" id="check">',
  //      '</button>',
  //    '</div>',
  //    '<div class="infor">',
  //      `<p class="title-task">${title}</p>`,
  //      '<div class="description">',
  //        `<p class="description-task">${description}</p>`,
  //      '</div>',
  //      '<div class="DPC">',
  //        `<span>${date}</span>`,
  //        `<span>${priority}</span>`,
  //        `<span>${complexity}</span>`,
  //      '</div>',
  //    '</div>',
  //    '<div class="excluir-task">',
  //      '<button class="delete">',
  //        '<img src="./img/delete.png" width="24px" alt="">',
  //      '</button>',
  //    '</div>',
  //  '</div>',
  //].join('')

})
