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

    alert(index);

    if (index < 16) {
        document.getElementById('span').textContent = 'Выраженный дефицит массы тела';
    }
    if ( 16 <= index && index < 18.5 ) {
        document.getElementById('span').textContent = 'Недостаточная (дефицит) масса тела';
    }
    if ( 8.5 <= index && index < 25 ) {
        document.getElementById('span').textContent = 'Норма';
    }
    if ( 25 <= index && index < 30 ) {
        document.getElementById('span').textContent = 'Избыточная масса тела (предожирение)';
    }
    if ( 30 <= index && index < 35 ) {
        document.getElementById('span').textContent = 'Ожирение первой степени';
    }
    if (35 <= index && index < 40) {
        document.getElementById('span').textContent = 'Ожирение второй степени';
    }
    else {
        document.getElementById('span').textContent = 'Ожирение третьей степени (морбидное)';
    }
}

let button = document.querySelector('.btn');
button.addEventListener('click', run);
