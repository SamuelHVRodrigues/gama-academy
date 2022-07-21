// Exercício 1 - Variaveis
// Vamos criar variaveis usando let, const e var, atribuir valores, identificar comportamentos e saídas quando tentarmos recuperar.
console.log("Exercício 1 - Variaveis");
var v1 = 10;
let l1 = 20;
const c1 = 30;

console.log(v1);
console.log(l1);
console.log(c1);

console.log(v1 %= 4);
console.log(l1 /= 5);
//console.log(c1 *= 2) // Erro: const não pode ser alterada


// Exercício 2 - Concatenar x interpolar
// Vamos criar variaveis usando let, const e var, atribuir strings e vamos concatenar e interpolar.
console.log("\n\n\nExercício 2 - Concatenar x interpolar");
var s1 = "Nome: ";
const s2 = "Henrique";
let s3 = "Idade: ";

console.log(s1 + s2 + "\n" + s3 + 22);
console.log(`${s2} tem 22 anos de idade`);


// Exercício 3 - Media entre numeros
// Crie uma variavel e atribua como valor uma operacao de média entre 5 números inteiros e positivos.
console.log("\n\n\nExercício 3 - Media entre numeros");
let n1 = 6;
let n2 = 4;
let n3 = 8;
let n4 = 6;
let n5 = 9;

let media = (n1 + n2 + n3 + n4 + n5) / 5;
console.log(`Media: ${media}`);


// Exercício 4 - Quero lucrar
// Crie um programa que me diga como lucrar nesta situação: quero vender uma bicicleta que 60% do seu valor é R$300, por quanto devo vendê-la para lucrar 25%?
console.log("\n\n\nExercício 4 - Quero lucrar");
let valorBike = (300 * 100) / 60;
let valorBikeComLucro = valorBike * 1.25;

console.log(`Você deve vender a bike por ${valorBikeComLucro} para lucrar 25%`);


// Exercício 5 - Quero somar
// Faça um programa que peça dois números e imprima no console a soma desses dois números.
console.log("\n\n\nExercício 5 - Quero somar");
function sum(a,b) {
    return a + b;
}

console.log(sum(3,12));


// Exercício 6 - Desapegada
// Crie um programa que me diga quanto cobrar para vender um notebook usado: o seu custo foi R$3000, por quanto devo vendê-lo descontando 25%?
console.log("\n\n\nExercício 6 - Desapegada");
let valorNotebook = 3000;
let valorNotebookComDesconto = 3000 * 0.75;

console.log(`Descontando 25% do valor original, você deve vender o notebook por ${valorNotebookComDesconto}`);


// Exercício 7 - conversor de medidas
// Escreva um programa que receba um valor em metros e o exiba no console convertido em milímetros.
console.log("\n\n\nExercício 7 - conversor de medidas");
function metrosParaMilimetros(value) {
    return value * 1000;
}

console.log(metrosParaMilimetros(35)+" milimetros");


// Exercício 8 - Semaforo, sinal ou sinaleira
// Utilizando os conceitos que estudamos, vamos criar um programa que funcionará como um sinal de transito.
// *Considerando 250 como o tempo do ciclo em segundos
// *As cores são impressas no momento em que o semáforo muda de cor
console.log("\n\n\nExercício 8 - Semaforo, sinal ou sinaleira");
let semaforo;
let cont = 0; // O "cont" é apenas para não deixar em loop infinito

for(let i = 0; i <= 250 && cont < 3; i++) {
    if(i < 180) {
        semaforo = "Verde";
        if(i === 0) console.log(semaforo);
    } else if(i >= 180 && i < 190) {
        semaforo = "Amarelo";
        if(i === 180) console.log(semaforo);
    } else if(i >= 190 && i < 250) {
        semaforo = "Vermelho\n";
        if(i === 190) console.log(semaforo);
    } else if(i === 250) {
        cont++;
        i = -1;
    }
}


// Exercício 9 - FizzBuzz
// Utilizando os conceitos que estudamos, vamos criar um programa que irá imprimir 'FizzBuzz'para números divisiveis por 3 e 5, para números divisíveis por 3 irá impirmir 'Fizz' e para números divisíveis por 5 irá imprimir 'Buzz' e por fim, se não cumprir nenhum dos casos acima imprime o próprio número.
console.log("\n\n\nExercício 9 - FizzBuzz");
function fizzBuzz(value) {
    if(value % 3 === 0 && value % 5 === 0) {
        return "FizzBuzz";
    } else if(value % 3 === 0) {
        return "Fizz";
    } else if(value % 5 === 0) {
        return "Buzz";
    } else {
        return value;
    }
}

console.log(fizzBuzz(15));
console.log(fizzBuzz(12));
console.log(fizzBuzz(5));
console.log(fizzBuzz(8));


// Exercício 10 - É dia de aula?
// Utilizando os conceitos que estudamos, vamos criar um programa que irá nos informar os dias de aula para a nossa turma.
// *Considerando o mês de Julho/2021 e que as aulas acontecem de Seg à Sex
console.log("\n\n\nExercício 10 - É dia de aula?");
function diasDeAula(diaMes) {
    if(diaMes % 7 === 3 || diaMes % 7 === 4) {
        return `No dia ${diaMes} não terá aula. Aproveite para descansar.`;
    } else return `No dia ${diaMes} haverá aula. Se programe para não perder.`;
}

console.log(diasDeAula(1));
console.log(diasDeAula(2));
console.log(diasDeAula(3));
console.log(diasDeAula(4));
console.log(diasDeAula(5));
console.log(diasDeAula(6));
console.log(diasDeAula(7));
console.log(diasDeAula(8));
console.log(diasDeAula(9));
console.log(diasDeAula(10));
console.log(diasDeAula(11));
console.log(diasDeAula(12));
console.log(diasDeAula(13));
console.log(diasDeAula(14));



// Exercício 11 - IMC
// Vamos criar uma função que calcula o IMC de uma pessoa, dado a altura em m e a massa em kg.
console.log("\n\n\nExercício 11 - IMC");
function imc(altura, massa) {
    let imc = massa/(altura*altura);
    console.log(imc);

    if(imc < 17) return "Muito abaixo do peso";
    else if(imc >= 17 && imc < 18.5) return "Abaixo do peso";
    else if(imc >= 18.5 && imc < 25) return "Peso normal";
    else if(imc >= 25 && imc < 30) return "Acima do peso";
    else if(imc >= 30 && imc < 35) return "Obesidade I";
    else if(imc >= 35 && imc < 40) return "Obesidade II";
    else if(imc >= 40) return "Obesidade III (mórbida)";
}

console.log(imc(1.73,58));


// Exercício 12 - Par ou Impar
// Crie uma função que determina se um número é par ou impar.
console.log("\n\n\nExercício 12 - Par ou Impar");
function paridade(value) {
    if(value % 2 === 0) return "Par";
    else return "Impar";
}

console.log(paridade(3));
console.log(paridade(2));


// Exercício 13 - Tabuada
// Faça um programa que dado um número, imprime no (console.log) a tabuada do mesmo de 1 a 10.
console.log("\n\n\nExercício 13 - Tabuada");
function tabuada(value) {
    for(let i = 1; i <= 10; i++) {
        console.log(`${i} x ${value} = ${i*value}`);
    }
}

tabuada(3);


// Exercício 14 - Pares
// Imprima na tela os números pares existentes entre 0 e 100..
console.log("\n\n\nExercício 14 - Pares");
function pares() {
    for(let i = 0; i <= 100; i += 2) {
        console.log(i);
    }
}

pares();


// Exercício 15 - Conversor de temperatura
// Crie uma função que recebe uma temperatura em graus celsius retorna o valor convertido em Fahrenheit.
console.log("\n\n\nExercício 15 - Conversor de temperatura");
function celsiusToFahrenheit(value) {
    return value * 1.8 + 32;
}

console.log(celsiusToFahrenheit(32));


// Exercício 16 - Fatorial
// Crie uma função que irá receber um número e retornar o fatorial dele. por exemplo: 3! = 3 * 2 * 1 // 6
console.log("\n\n\nExercício 16 - Fatorial");
function fatorial(value) {
    let fatorial = `${value}! =`;
    let divisores = ``;
    let primeiroDivisor = true;

    for(let i = 1; value != 1; i++) {
        if(value % i === 0) {
            if(primeiroDivisor) {
                divisores = `${i}`;
                primeiroDivisor = false;
            } else {
                divisores = `${divisores} * ${i}`;
            }
            value = value / i;
        }
    }

    fatorial = `${fatorial} ${reverseString(divisores)}`;
    return fatorial;
}

function reverseString(string) {
    let newString = '';
    let tam = string.length - 1;
    for(let i = tam; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}

console.log(fatorial(6));


// Exercício 17 - Multiplica
// Crie uma função que recebe 2 parâmetros e retorna a multiplicação entre else.
console.log("\n\n\nExercício 17 - Multiplica");
function multiplica(a,b) {
    return a * b;
}

console.log(multiplica(5,6));


// Exercício 18 - Porcentagem
// Crie uma função que calcula 5% de desconto retornando o valor do desconto.
console.log("\n\n\nExercício 18 - Porcentagem");
function cincoPorCento(value) {
    return value * 0.05;
}

console.log(cincoPorCento(15000));


// Exercício 19 - Conversor de moeda
// Crie uma função que irá converter uma quantia de real para dolar utilizando a cotação do dia.
console.log("\n\n\nExercício 19 - Conversor de moeda");
function realToDollar(value) {
    return value / 5.17;
}

console.log(realToDollar(200));


// Exercício 20 - For/Break/Continue
// Utilize a estrutura de repetição for para imprimir no console conforme instruções:
// a) números de 1 a 50
// b) quando chegar no número 25 interrompa a instrução e pare o loop 
// c) quando chegar no número 10 pule a instrução
console.log("\n\n\nExercício 20 - For/Break/Continue");
for(let i = 0; i <= 50; i++) {
    if(i === 25) break;
    if(i === 10) continue;
    console.log(i);
}


// Exercício 21 - 10 em 10
// Imprima na tela a partir de 20 e depois de 10 em 10 até o 100, mas em vez dos numeros 60 e 90 imprima a palavra "CONTINUE".
console.log("\n\n\nExercício 21 - 10 em 10");
for(let i = 20; i <= 100; i += 10) {
    if(i === 60 || i === 90) console.log("CONTINUE");
    else console.log(i);
}


// Exercício 22 - Conta bancária
// Vamos criar uma conta bancária com as 3 operações básicas? rs
// a) A conta deverá iniciar com o saldo de 100
// b) Deverá ser possível escolher uma operação em forma de string: 'depositar', 'sacar', 'consultar saldo'
// c) Deverá ser possível passar 1 valor para a operação escolhida
// d) Deverá retornar o resultado e imprimir no console o saldo atual
console.log("\n\n\nExercício 22 - Conta bancária");
class contaBancaria {
    constructor() {
        this.saldo = 100;
    }

    depositar(value) {
        this.saldo += value;
        return `Saldo atual: ${this.saldo}.`;
    }

    sacar(value) {
        if(this.saldo >= value) {
            this.saldo -= value;
            return `Saldo atual: ${this.saldo}.`;
        }
        else return "Saldo insuficiente, consulte seu saldo atual.";
    }

    consultarSaldo() {
        return `Saldo atual: ${this.saldo}.`;
    }
}

let minhaConta = new contaBancaria();

console.log(minhaConta.sacar(20));
console.log(minhaConta.depositar(150));
console.log(minhaConta.sacar(300));
console.log(minhaConta.consultarSaldo());


// Exercício 23 - 5 em 5
// Crie um algoritmo que imprime no console de 10 a 60, iterando a cada 5, exceto para os numeros 35 e 45 que irão ser substituidos pela palavra "PULOU".
console.log("\n\n\nExercício 23 - 5 em 5");
for(let i = 10; i <= 60; i += 5) {
    if(i === 35 || i === 45) console.log("PULOU");
    else console.log(i);
}


// Exercício 24 - Dias em horas
// Crie um algoritmo que converte dias em horas, quando recebe um número de dias.
console.log("\n\n\nExercício 24 - Dias em horas");
function daysToHours(value) {
    return value * 24;
}

console.log(daysToHours(30));


// Exercício 25 - É par
// Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.
console.log("\n\n\nExercício 25 - É par");
function ehPar(a,b) {
    if((a / b) % 2 === 0) console.log(`O resultado da divisão entre ${a} e ${b} é par: `);
    console.log(a / b);
}

ehPar(15,3);
ehPar(8,4);
ehPar(3,2);


// Exercício 26 - Repetição
// Utilize a estrutura de repetição for para imprimir no console conforme instruções abaixo:
// a) números de 1 a 100  
// b) quando chegar no número 50 interrompa a instrução e pare o loop 
// c) quando chegar no número 50 pule a instrução 
console.log("\n\n\nExercício 26 - Repetição");
for(let i = 1; i <= 100; i++) {
    if(i === 50) break;
    if(i === 50) continue;
    else console.log(i);
}


// Exercício 27 - Calculadora
// Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs
// a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
// b) Deverá ser possível passar 2 números para a operação escolhida
// c) Deverá retornar o resultado e imprimir no console
console.log("\n\n\nExercício 27 - Calculadora");
class Calculadora{
    constructor() {}

    soma(a,b) {
        return a+b;
    }

    subtracao(a,b) {
        return a-b;
    }

    multiplicacao(a,b) {
        return a*b;
    }

    divisao(a,b) {
        return a/b;
    }
}

let minhaCalculadora = new Calculadora();

console.log(minhaCalculadora.soma(3,5));
console.log(minhaCalculadora.subtracao(3,5));
console.log(minhaCalculadora.multiplicacao(3,5));
console.log(minhaCalculadora.divisao(3,5));


// Exercício 28 - Desconto
// Solicite o preço de uma mercadoria e o percentual de desconto. Exiba no console o valor do desconto e o preço a pagar.
console.log("\n\n\nExercício 28 - Desconto");
function desconto(value, desconto) {
    valorDesconto = value * (desconto/100);
    precoAPagar = value - valorDesconto;
    console.log("Desconto: " + valorDesconto);
    console.log("Preço a pagar: " + precoAPagar);
}

desconto(1000,10);


// Exercício 29 - Viagem
// Calcule o tempo de uma viagem de carro. Pergunte a distância a percorrer e a velocidade média esperada para a viagem.
console.log("\n\n\nExercício 29 - Viagem");
function tempoDeViagem(distancia, velocidadeMedia) {
    return distancia / velocidadeMedia;
}

console.log(tempoDeViagem(120,60));


// Exercício 30 - Jantar
// Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
console.log("\n\n\nExercício 30 - Jantar");
function taxaGarcom(valorJantar) {
    console.log(`Taxa do garçom: ${valorJantar * 0.1}`);
    console.log(`Total a ser pago: ${valorJantar * 1.1}`);
}

taxaGarcom(30);


// Exercício 31 - Dia da semana
// Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.
console.log("\n\n\nExercício 31 - Dia da semana");
function diaDaSemana(dia) {
    switch(dia) {
        case 1:
            return "Domingo"; break;
        case 2:
            return "Segunda"; break;
        case 3:
            return "Terça"; break;
        case 4:
            return "Quarta"; break;
        case 5:
            return "Quinta"; break;
        case 6:
            return "Sexta"; break;
        case 7:
            return "Sábado"; break;
        default:
            return "Error"
    }
}

console.log(diaDaSemana(1));
console.log(diaDaSemana(2));
console.log(diaDaSemana(3));
console.log(diaDaSemana(4));
console.log(diaDaSemana(5));
console.log(diaDaSemana(6));
console.log(diaDaSemana(7));
console.log(diaDaSemana(8));


// Exercício 32 - Números
// Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais".
console.log("\n\n\nExercício 32 - Números");
function maiorNumero(a,b) {
    if(a > b) return a;
    else if(b > a) return b;
    else return "Os números são iguais";
}

console.log(maiorNumero(2,3));
console.log(maiorNumero(4,1));
console.log(maiorNumero(6,6));


// Exercício 33 - Impar/par
// Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.
console.log("\n\n\nExercício 33 - Impar/par");
function impar_par(value) {
    if(value % 2 === 0) return "Par";
    else return "Impar";
}

console.log(impar_par(10));
console.log(impar_par(13));


// Exercício 34 - Boletim escolar
// Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:
// - Se a media for igual ou maior que 7 - Aprovado
// - Se a media for maior e igual a cinco e menor que 7 - Recuperação
// - Se a media for menor que 5 - Reprovado
console.log("\n\n\nExercício 34 - Boletim escolar");
function boletimEscolar(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
    
    if(media >= 7) return "Aprovado";
    else if(media < 5) return "Reprovado";
    else return "Recuperação";
}

console.log(boletimEscolar(7,7,7));
console.log(boletimEscolar(7,7,0));
console.log(boletimEscolar(7,7,2));


// Exercício 35 - Maior de idade
// Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.
console.log("\n\n\nExercício 35 - Maior de idade");
function maoiridade(anoNascimento) {
    let idade = 2021 - anoNascimento;

    if(idade >= 18) return "Maior de idade";
    else return "Menor de idade";
}

console.log(maoiridade(1998));
console.log(maoiridade(2005));