let burger = document.querySelector('.burger-menu')
let nav = document.querySelector('.header-nav')
burger.addEventListener('click', function() {
    burger.classList.toggle('active')
    nav.classList.toggle('active')
})

function run() {
    let weight = document.querySelector(".weight").value;
    let height = document.querySelector(".height").value;
    let body_mass_index = document.querySelector(".body_mass_index");

    index = weight / (height/100)**2;
    body_mass_index.value = Math.floor(index);
}

let button = document.querySelector('.btn');
button.addEventListener('click', run);
