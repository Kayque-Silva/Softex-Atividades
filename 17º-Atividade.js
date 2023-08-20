let matrizAnimais = [];

let animal1 = ["Gato", "Felino", 5];
let animal2 = ["Cobra", "Réptil", 3];
let animal3 = ["Tubarão", "Peixe", 10];

matrizAnimais.push(animal1);
matrizAnimais.push(animal2);
matrizAnimais.push(animal3);


for (let i = 0; i < matrizAnimais.length; i++) {
    let animal = matrizAnimais[i];
    console.log("Animal " + (i + 1));
    console.log("Nome:", animal[0]);
    console.log("Espécie:", animal[1]);
    console.log("Idade:", animal[2]);
    console.log("----------");
}
