const nome = document.querySelector('.nome');

window.addEventListener('load', function(event){
  event.preventDefault();

  fetch('php/conectar_conta.php',{
    method: 'POST',
  })

  .then(response=>{
    if(!response.ok){
      throw new Error('Falha na requisição');
    }
    return response.text;
  })
  .then(data=>{
    // nome.textContent=data;
    console.log(data)
  })
  .catch(error=>{
    console.log(error)
  })
})