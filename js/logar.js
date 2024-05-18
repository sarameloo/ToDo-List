const meu_form = document.querySelector(".card");

meu_form.addEventListener("submit", (event) => {
  event.preventDefault();
  let form_data = new FormData(meu_form);

  fetch("logar.php", {
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
        console.log(data);
      } else {
        window.location.href =
          "http://localhost/quick_task_v2/login/teste_login.php";
      }
    })
    .catch((error) => {
      console.log(error);
    });
});