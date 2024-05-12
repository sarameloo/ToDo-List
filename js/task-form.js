const link = document.querySelector("#add-button");
const form = document.querySelector(".form");
const cancelButtonForm = document.querySelector("#cancel")

link.addEventListener('click', (event) => {
    form.classList.toggle('reveal');
    link.classList.toggle('hide');
    event.preventDefault();
})

cancelButtonForm.addEventListener('click', (event) => {
    form.classList.toggle('reveal');
    link.classList.toggle('hide');
    event.preventDefault();
})


