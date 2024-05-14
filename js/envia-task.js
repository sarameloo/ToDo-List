const myForm = document.querySelector("#myForm");
myForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  const date = document.querySelector("#date");
  const priority = document.querySelector("#priority");
  const complexity = document.querySelector("#complexity");
});

//document.getElementById("campos").addEventListener("submit", function (event) {
//event.preventDefault();
//let form_data = new myForm(this);

//let titulo = document.querySelector("#title").value;
//let descricao = document.querySelector("#description").value;
//let data = document.querySelector("#date").value;
//let prioridade = document.querySelector("#priority").value;
//let complexidade = document.querySelector("#complexity").value;

//fetch("cadastrar-task.php", {
//method: "POST",
//body: my,
//})
//.then((response) => {
//if (!response.ok) {
//throw new Error("Falha na requisição");
//}
//return response.text();
//})
//.then((data) => {
//if (data.length > 0) {
//setTimeout(() => {
//form.reset();
//}, 2000);
//alert(data);
//}
//})
//.catch((error) => {
//console.log(error);
//alert(error);
//});
//});
