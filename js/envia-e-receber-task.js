const myForm = document.querySelector("#myForm"); //pegando o formulário
const task_list = document.querySelector('.task-list'); //pegando as tasks
const cont_criadas = document.querySelector('.cont_criadas'); //pegando as tasks criadas

myForm.addEventListener("submit", (event) => { //adicionando evento quando eu submeter
  event.preventDefault(); //previnindo evento padrão
  let form_data = new FormData(myForm); //instanciando formdata
  
  fetch("php/cadastrar-task.php", { //função nativa do JS que é usada para fazer requisições HTTP
    method: "POST", //método POST
    body: form_data, //corpo do formdata
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error("Falha na requisição");
      //se o status for 500 (erro da requisição)
    }
    return response.text(); //retorno de resposta em texto
  })
  .then((data) => {
    if (data.length > 0) { // verifica se o comprimento dos dados recebidos (data) é maior que zero.
      setTimeout(() => { // função do JS que executa uma função específica após um determinado intervalo de tempo.
        myForm.reset(); //redefinirá os campos de um formulário HTML após 3000 milisegundos.
      }, 3000); 
      alert(data);
      // exibe uma caixa de diálogo com o conteúdo dos dados (data).
    }
    fetch ('php/buscando_task.php', { //função nativa do JS que é usada para fazer requisições HTTP
      method: 'POST' //método POST
    })
    .then(response2=>{
      if(!response2.ok){
        throw new Error('falha na requisição');
        // se o status for 500 (erro na requisição)
      }
      return response2.json(); // converte a resposta em JSON
    })
    .then(data2=>{
      let contador = Number(cont_criadas.textContent); // pegando o conteúdo do elemento HTML e convertendo-o em um número.
      let soma = contador + 1; // incrementa o contador em 1.
      cont_criadas.textContent = String(soma); //o valor do contador é convertido em string e atribuído ao conteúdo do elemento HTML cont_criadas.
      let tarefa = data2; //Os dados recebidos da operação são atribuídos à variável tarefa.
      var check_criar; 
      var delete_criar;
      //declarando variáveis
      switch(tarefa.prioridade){ //verifica a prioridade da tarefa 
        case 'baixa': //se for baixa
          check_criar = 'img/check-baixo.svg'; //atribui os caminhos corretos das imagens para as variáveis check_criar e delete_criar com base na prioridade da tarefa.
          delete_criar = 'img/delete-baixo.svg';
          break; //encerra execução switch
        case 'media':
          check_criar = 'img/check-medio.svg';
          delete_criar = 'img/delete-medio.svg';
          break;
        case 'alta':
          check_criar = 'img/check-alto.svg';
          delete_criar = 'img/delete-alto.svg';
          break;
      }
      task_list.innerHTML += [ //permite acessar ou modificar o HTML interno de um elemento.
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
      ].join(''); // junta os elementos do array em uma única string
    })
    .catch(error2=>{ //tratamento de erros
      console.log(error2);
    })
  })
  .catch((error) => {
    console.log(error);
    alert(error);
  });
});

window.addEventListener('load', event=>{
  // Código a ser executado quando a página estiver completamente carregada
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

