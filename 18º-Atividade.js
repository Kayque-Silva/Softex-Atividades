// FILA
let fila = [3, 7, 9, 1, 0];
let sequenciaRemocaoFila = [];

while (fila.length > 0) {
    let elementoRemovido = fila.shift();
    sequenciaRemocaoFila.push(elementoRemovido);
}

console.log("Sequência de remoção da fila:", sequenciaRemocaoFila);

// LISTA

let lista = [3, 7, 9, 1, 0];
let sequenciaRemocaoLista = [];

while (lista.length > 0) {
    let elementoRemovido = lista.shift(); // Removendo o primeiro elemento
    sequenciaRemocaoLista.push(elementoRemovido);
}

console.log("Sequência de remoção da lista:", sequenciaRemocaoLista);

//PILHA

let pilha = [3, 7, 9, 1, 0];
let sequenciaRemocaoPilha = [];

while (pilha.length > 0) {
    let elementoRemovido = pilha.pop(); // Removendo o último elemento
    sequenciaRemocaoPilha.push(elementoRemovido);
}

console.log("Sequência de remoção da pilha:", sequenciaRemocaoPilha);
