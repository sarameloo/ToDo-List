//Pegando elementos
const chk = document.querySelector('#chk');
const header = document.querySelector('.header');
const card = document.querySelector('.card');
const h2 = document.querySelector('.card>h2');
const input = document.querySelectorAll('.dados');
const botao = document.querySelector('.botao');
const link = document.querySelector('.link');

//Trocando as cores

chk.addEventListener('change', ()=>{
    document.body.classList.toggle('dark');
    header.classList.toggle('dark-header');
    card.classList.toggle('dark-card');
    h2.classList.toggle('dark-h2');
    input[0].classList.toggle('dark-input');
    input[1].classList.toggle('dark-input');
})
