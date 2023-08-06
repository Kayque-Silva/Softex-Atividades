const prompt = require('prompt-sync')();

const nome = prompt("Nome Completo: ");  

function calculoIdade(){

    const anoAtualExercicio = 2022;
    let anoNascimento = prompt("Ano de Nascimento: ");
    let idade = anoAtualExercicio - anoNascimento;       

        if (anoNascimento < 1922 || anoNascimento > 2021) {
            console.log("O ano digitado deve estar entre 1922 e 2021!");
            calculoIdade();
        } else {
            console.log(`Nome: ${nome} Idade: ${idade}`);
        }
}
calculoIdade();