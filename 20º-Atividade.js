//A busca binária é mais adequada, pois o array está ordenado.
function buscaBinaria(array, valor) {
    let inicio = 0;
    let fim = array.length - 1;

    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2);

        if (array[meio] === valor) {
            return meio; 
        } else if (array[meio] < valor) {
            inicio = meio + 1; 
        } else {
            fim = meio - 1; 
        }
    }

    return -1; 
}

const array = [5, 7, 8, 10, 12, 15, 18, 20, 25, 30];
const valorBuscado = 20;

const indiceEncontrado = buscaBinaria(array, valorBuscado);

if (indiceEncontrado !== -1) {
    console.log(`Valor ${valorBuscado} encontrado no índice ${indiceEncontrado}`);
} else {
    console.log(`Valor ${valorBuscado} não encontrado no array.`);
}
