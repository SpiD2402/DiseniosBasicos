

const ham = document.querySelector('.han');
const enlaces = document.querySelector('.link-menu');
const barras = document.querySelectorAll('.han span');

ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
    ham.classList.toggle('girar');
});
