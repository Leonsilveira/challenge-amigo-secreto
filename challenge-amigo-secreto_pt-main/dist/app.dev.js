"use strict";

//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Lista de nomes aleatórios
var nomesAleatorios = ["Ana", "Carlos", "João", "Maria", "Luiza", "Fernando", "Beatriz", "Paulo", "Clara", "Gabriel"]; // Adicionar amigos manualmente

function adicionarAmigo() {
  var input = document.getElementById('amigo');
  var nome = input.value.trim();

  if (nome) {
    adicionarNaLista(nome);
    input.value = ''; // Limpa o campo de entrada
  }
} // Adicionar todos os nomes aleatórios automaticamente


function adicionarNomesAleatorios() {
  nomesAleatorios.forEach(function (nome) {
    adicionarNaLista(nome);
  });
} // Função para adicionar nomes na lista


function adicionarNaLista(nome) {
  var lista = document.getElementById('listaAmigos');
  var item = document.createElement('li');
  item.textContent = nome;
  lista.appendChild(item);
} // Sorteio do amigo secreto


function sortearAmigo() {
  var lista = document.getElementById('listaAmigos');
  var itens = lista.getElementsByTagName('li');
  var total = itens.length;

  if (total === 0) {
    alert("Adicione amigos antes de sortear!");
    return;
  }

  var resultado = document.getElementById('resultado');
  resultado.innerHTML = ''; // Limpa resultados anteriores

  var nomes = Array.from(itens).map(function (item) {
    return item.textContent;
  });
  var sorteio = shuffleArray(nomes);
  sorteio.forEach(function (nome, i) {
    var proximo = (i + 1) % sorteio.length;
    var itemResultado = document.createElement('li');
    itemResultado.textContent = "".concat(nome, " tirou ").concat(sorteio[proximo]);
    resultado.appendChild(itemResultado);
  });
} // Função auxiliar para embaralhar os nomes


function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [array[j], array[i]];
    array[i] = _ref[0];
    array[j] = _ref[1];
  }

  return array;
} // Adicionar botão para inserir nomes aleatórios


document.addEventListener('DOMContentLoaded', function () {
  var buttonContainer = document.querySelector('.button-container');
  var botaoAleatorio = document.createElement('button');
  botaoAleatorio.textContent = "Adicionar nomes aleatórios";
  botaoAleatorio.className = "button-add-random";
  botaoAleatorio.onclick = adicionarNomesAleatorios;
  buttonContainer.insertBefore(botaoAleatorio, buttonContainer.firstChild);
});
//# sourceMappingURL=app.dev.js.map
