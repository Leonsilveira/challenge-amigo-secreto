//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Lista de nomes aleatórios
const nomesAleatorios = [
    "Ana", "Carlos", "João", "Maria", "Luiza",
    "Fernando", "Beatriz", "Paulo", "Clara", "Gabriel"
];

// Adicionar amigos manualmente
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();
    if (nome) {
        adicionarNaLista(nome);
        input.value = ''; // Limpa o campo de entrada
    }
}

// Adicionar todos os nomes aleatórios automaticamente
function adicionarNomesAleatorios() {
    nomesAleatorios.forEach(nome => {
        adicionarNaLista(nome);
    });
}

// Função para adicionar nomes na lista
function adicionarNaLista(nome) {
    const lista = document.getElementById('listaAmigos');
    const item = document.createElement('li');
    item.textContent = nome;
    lista.appendChild(item);
}

// Sorteio do amigo secreto
function sortearAmigo() {
    const lista = document.getElementById('listaAmigos');
    const itens = lista.getElementsByTagName('li');
    const total = itens.length;

    if (total === 0) {
        alert("Adicione amigos antes de sortear!");
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa resultados anteriores

    const nomes = Array.from(itens).map(item => item.textContent);
    const sorteio = shuffleArray(nomes);

    sorteio.forEach((nome, i) => {
        const proximo = (i + 1) % sorteio.length;
        const itemResultado = document.createElement('li');
        itemResultado.textContent = `${nome} tirou ${sorteio[proximo]}`;
        resultado.appendChild(itemResultado);
    });
}

// Função auxiliar para embaralhar os nomes
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Adicionar botão para inserir nomes aleatórios
document.addEventListener('DOMContentLoaded', () => {
    const buttonContainer = document.querySelector('.button-container');
    const botaoAleatorio = document.createElement('button');
    botaoAleatorio.textContent = "Adicionar nomes aleatórios";
    botaoAleatorio.className = "button-add-random";
    botaoAleatorio.onclick = adicionarNomesAleatorios;

    buttonContainer.insertBefore(botaoAleatorio, buttonContainer.firstChild);
});
