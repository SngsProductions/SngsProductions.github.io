const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const filtro1Btn = document.getElementById('filtro1');
const filtro2Btn = document.getElementById('filtro2');


registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});



filtro1Btn.addEventListener('click', function() {
    console.log("Botón de filtro clicado");
    window.location.href = 'Filtro2.html';
});