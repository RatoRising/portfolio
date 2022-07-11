document.querySelector(".menuMobile").addEventListener("click", mostrarMenu)

function mostrarMenu() {
    if (document.querySelector(".menu nav ul").style.display == 'flex') {
        document.querySelector(".menu nav ul").style.display = '';
    } else {
        document.querySelector(".menu nav ul").style.display = 'flex';
    }
}

document.getElementsByClassName("botaomenu")[0].addEventListener('click', esconderMenu)
document.getElementsByClassName("botaomenu")[1].addEventListener('click', esconderMenu)
document.getElementsByClassName("botaomenu")[2].addEventListener('click', esconderMenu)
document.getElementsByClassName("botaomenu")[3].addEventListener('click', esconderMenu)
document.getElementsByClassName("botaomenu")[4].addEventListener('click', esconderMenu)

function esconderMenu() {
        document.querySelector(".menu nav ul").style.display = ''
    }
