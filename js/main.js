// console.log("Привет");

// создаю действи на клик по кнопке корзина;
const cardButton = document.querySelector('#card-button');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');

cardButton.addEventListener("click", function (event) {
    modal.classList.add("is-open");
});

modalClose.addEventListener("click", function (event) {
    modal.classList.remove("is-open");
});

new WOW().init();