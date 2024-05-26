//Pegando elementos
const chk = document.querySelector('#chk');
const label = document.querySelector('.label');
const header = document.querySelector('.header');
const card = document.querySelector('.card');
const link = document.querySelector('.link');

//Trocando as cores

chk.addEventListener('change', ()=>{
    document.body.classList.toggle('dark');
    label.classList.toggle('dark-label');
    header.classList.toggle('dark-header');
    card.classList.toggle('dark-card');
    link.classList.toggle('dark-link');
})
