
const nomes = ["Kayque", "João", "Carlos", "Pedro", "Caio", "Ana", "Sofia", "Maria", "Louisa", "Karina"];
const idades = [26, 30, 22, 28, 35, 20, 19, 27, 18, 23];
const coresFavoritas = ["Azul", "Verde", "Vermelho", "Roxo", "Amarelo", "Rosa", "Preto", "Branco", "Laranja", "Cinza"];

console.log("Nomes:", nomes);
console.log("Idades:", idades);
console.log("Cores Favoritas:", coresFavoritas);

idades[2] = 23; 
coresFavoritas[5] = "Azul"; 

console.log("\nNomes após modificações:", nomes);
console.log("Idades após modificações:", idades);
console.log("Cores Favoritas após modificações:", coresFavoritas);
