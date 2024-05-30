const btn_profile = document.querySelector('.profile');
const profile_options = document.querySelector('.profile-options'); 
const btn = document.querySelector('.logout');

btn_profile.addEventListener('click', ()=>{
    profile_options.classList.toggle('mostrar');
})

btn.addEventListener('click', (event)=>{
    event.preventDefault();
    fetch('php/logout.php',{
        method: 'POST'
    })
    .then((response)=>{
        if (!response.ok){
            throw new Error('Falha na requisição');
        }
        else{
            window.location.href = "login.html";
        }
    })
    .catch((erro)=>{
        console.log(erro);
    })
})
