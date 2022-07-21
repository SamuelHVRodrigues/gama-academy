let nome = "Henrique";
let idade = 17;

// Concatenação
let info1 = nome + " tem " + idade + " anos de idade";
console.log(info1);

// Interpolação
let info2 = `${nome} tem ${idade} anos de idade`;
console.log(info2);
console.log();


// If else
function maioridade1(idade) {
    if(idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}
console.log(maioridade1(idade));

// Operador ternário
function maioridade2(idade) {
    return idade >= 18 ? "Maior de idade" : "Menor de idade";
}
console.log(maioridade2(idade));
console.log();


// Function
function soma1(a,b) {
    return a + b;
}
console.log(soma1(3,5));

// Arrow function
const soma2 = (a,b) => a + b;
console.log(soma2(3,5));
console.log();


// Array
const alunasGama = ["Paula", "Maria", "Estela", "Clara"];
console.log(alunasGama[1]); //Como acessar informações num array
console.log();

// Operador spread (...)
const alunasXp = [...alunasGama, "Simara"];
console.log(alunasXp);
console.log();


// For
for(let i = 0; i < alunasXp.length; i++) {
    console.log(alunasXp[i]);
}
console.log();

// Map - executa uma função em todos os itens de um array
alunasXp.map(aluna => console.log(aluna));
console.log();


const numeros = [34, 25, 72, 88, 61, 10];

// Filter - Filra um array baseada na condição passaada
const numerosImpares = numeros.filter(numeros => numeros % 2 != 0);
console.log(numerosImpares);

const numerosPares = numeros.filter(numeros => numeros % 2 === 0);
console.log(numerosPares);
console.log();


// Sort - ordena o array
const numerosOrdenadosCrescente = numeros.sort(); // em ordem crescente
console.log(numerosOrdenadosCrescente);

const numerosOrdenadosDecrescente = numeros.sort((a,b) => b-a); // em ordem decrescente
console.log(numerosOrdenadosDecrescente);
console.log();


// Reduce - reduz o array a um resultado de uma operação matemática
const soma = numeros.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual;
});
console.log(soma);
console.log();


// Objeto
const pessoa = {
    nickname: "Rick",
    age: 22,
    city: "Recife"
};

// Notação de pontos
console.log(pessoa.nickname);

// Notação de colchetes
console.log(pessoa['age']);

// Destructing
const {nickname, age, city} = pessoa;
console.log(city);
console.log();

// Array de objetos
const filmes = [
    {
        id: 1,
        titulo: "Harry Potter e a Pedra Filosofal",
        ano: 2001,
        duracao: 120
    },
    {
        id: 2,
        titulo: "Harry Potter e a Câmara Secreta",
        ano: 2002,
        duracao: 90
    },
    {
        id: 3,
        titulo: "Harry Potter e o Prisioneiro de Azkabam",
        ano: 2004,
        duracao: 210
    }
]

// Filter + Map + Reduce em um Array de Objetos
const duracaoTotalFilmesDepois2001 = filmes
.filter(filme => filme.ano > 2001)
.map(filme => filme.duracao/60)
.reduce((total, currentValue) => total + currentValue);

console.log(`Os filmes lançados depois de 2001 têm juntos ${duracaoTotalFilmesDepois2001} horas de duração`);
