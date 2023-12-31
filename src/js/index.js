/*
O que precisamos fazer? - quando passar o mause em cima do personagem na lista temos que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, onome e o texto grande do personagem que esta selecionado

OBJETIVO 1 - quando passar o mause em cima do personagem na listagem, devemos seleciona-lo
passo 1 - pegar os personagem no JS para poder verificar quando o usuario passar o mause em cima de um deles
passo 2 - adicionar a classe selecionado no personagem que o usuario passar o cursor do mause
passo 3 - verificar se ja exista um personagem selecionado, se sim, devemos remover a seleçao dele

OBJETIVO 2 - quando passar o mause em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
passo 1 - pegar o elemento do personagem grande para adicionar as informações nele
passo 2 - alterar a imagem do personagem grande
passo 3 - alterar o nome do personagem grande
passo 4 - alterar a descrição do personagem grande
*/

//OBJETIVO 1 - quando passar o mause em cima do personagem na listagem, devemos seleciona-lo
//passo 1 - pegar os personagem no JS para poder verificar quando o usuario passar o mause em cima de um deles

const personagens = document.querySelectorAll('.personagem');


// passo 2 - adicionar a classe selecionado no personagem que o usuario passar o cursor do mause

personagens.forEach((personagem)  => {
    personagem.addEventListener ('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

// passo 3 - verificar se ja exista um personagem selecionado, se sim, devemos remover a seleçao dele
const personagemSelecionado = document.querySelector('.selecionado');
personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado');

// OBJETIVO 2 - quando passar o mause em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande

// passo 1 - pegar o elemento do personagem grande para adicionar as informações nele
const imagemPersonagemGrande = document.querySelector('.personagem-Grande');

// passo 2 - alterar a imagem do personagem grande
const idPersonagem = personagem.attributes.id.value;
imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

// passo 3 - alterar o nome do personagem grande
const nomePersonagem = document.getElementById('nome-personagem');
nomePersonagem.innerText = personagem.getAttribute('data-name');

// passo 4 - alterar a descrição do personagem grande
const descricaoPersonagem = document.getElementById('descricao-personagem');
descricaoPersonagem.innerText = personagem.getAttribute('data-description');

    })
})

