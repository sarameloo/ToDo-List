/* Pegando referencias aos elementos html */

const chk = document.getElementById("chk");
const header = document.querySelector(".header");
const profileImg = document.querySelector("#profile-img");
const labelButton = document.querySelector(".label");
const ballButton = document.querySelector(".ball");
const formStyle = document.querySelector(".form");
const actionsStyle = document.querySelector(".actions");
const inputTitle = document.querySelector("#title");
const inputDescription = document.querySelector("#description");
const inputDate = document.querySelector("#date");
const selectPriority = document.querySelector("#priority");
const selectComplexity = document.querySelector("#complexity");

/* Lógica que muda a cor de background do site */
chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  header.classList.toggle("dark-header");
  labelButton.classList.toggle("dark-label");
  ballButton.classList.toggle("dark-ball");
  formStyle.classList.toggle("dark-form");
  actionsStyle.classList.toggle("dark-actions");
  inputTitle.classList.toggle("dark-placeholder");
  inputDescription.classList.toggle("dark-placeholder");
  inputTitle.classList.toggle("dark-input");
  inputDescription.classList.toggle("dark-input");
  inputDate.classList.toggle("dark-input");
  selectPriority.classList.toggle("dark-input");
  selectComplexity.classList.toggle("dark-input");
});

/* Função que retorna o caminho da imagem que não é a atual */
function toggleImg() {
  let initialImg = document.getElementById("profile-img").src;
  let srcTest = initialImg.includes("/img/Profile.svg");
  let newImg = {
    true: "./img/ProfileDark.svg",
    false: "./img/Profile.svg",
  }[srcTest];

  return newImg;
}

/* Muda a imagem para outra opção que não seja a atual */
chk.addEventListener("click", function () {
  document.getElementById("profile-img").src = toggleImg();
});
