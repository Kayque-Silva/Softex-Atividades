class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.filho = null;
    }
}

const pessoa1 = new Pessoa("isabela", 45);
const pessoa2 = new Pessoa("Lucas", 27);
const pessoa3 = new Pessoa("Sofia", 2);

pessoa1.filho = pessoa2;
pessoa2.filho = pessoa3;

function percorrerLista(pessoa) {
    while (pessoa !== null) {
        console.log("Nome:", pessoa.nome);
        console.log("Idade:", pessoa.idade);
        
        if (pessoa.filho !== null) {
            console.log("Filho:", pessoa.filho.nome);
        } else {
            console.log("Sem Filho");
        }
        
        console.log("----------");
        
        pessoa = pessoa.filho;
    }
}
percorrerLista(pessoa1);
