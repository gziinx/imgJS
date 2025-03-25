
"use strict";

const botaoTrocarImagem = document.getElementById('mudar-img')

const imagens = [
    'url("./img/1.jpg")',
    'url("./img/3.jpg")',
    'url("./img/4.jpg")',
    'url("./img/5.jpg")',
    'url("./img/6.jpg")'
]

let indiceAtual = 0

function trocarImagem() {
    indiceAtual = (indiceAtual + 1) % imagens.length
    document.documentElement.style.setProperty('--imagem-fundo', imagens[indiceAtual])
}

botaoTrocarImagem.addEventListener('click', trocarImagem)
