const meuForm = document.querySelector(".card");
meuForm.addEventListener("submit", (event) =>{
  event.preventDefault();

  let form_data = new FormData(meuForm);

  fetch("php/cadastrar-usuario.php",{
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
        }, 2000);
        alert(data);
      }
    })
    .catch((error) => {
      console.log(error);
      alert(error);
    });
});
