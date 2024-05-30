const ch = document.querySelector(".check-task img");
const titleTask = document.querySelector(".task .title-task"); 
console.log(ch)

function toggleImg() {
    let initialImg = document.getElementById("check").src;
    let srcTest = initialImg.includes("/img/check.png");
    let newImg = {
      true: "./img/checked.png",
      false: "./img/check.png",
    }[srcTest];
  
    return newImg;
  }

  ch.addEventListener("click", function () {
    document.getElementById("check").src = toggleImg();
    titleTask.classList.toggle("checked");
  });
