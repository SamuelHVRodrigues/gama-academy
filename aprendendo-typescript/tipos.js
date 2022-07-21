"use strict";
// Boolean
var contaPaga = true;
// Number
var idade = 22;
var altura = 1.73;
// String
var nome = "Henrique";
// Array
var frutas = ["maçã", "laranja", "banana"];
var notas = [10, 6, 4, 9, 8, 8];
// Tuple
var jogadores;
jogadores = ["Rick", "Neto", "Gabriel", 99, true];
// Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Recuperacao"] = "002";
    StatusAprovacao["Reprovado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
// Any (não recomendado)
var retornoDaAPI = [123, "Henrique", true];
var retornoDaAPI2 = [{
    // ...
    }];
// Void
function printarNaTela(mensagem) {
    console.log(mensagem);
}
// Null e Undefined
var u = undefined;
var n = null;
// Object
function criar(objecto) {
}
criar({
    nome: "Henrique",
    idade: 22,
});
// Never
function loopInfinito() {
    while (true)
        ;
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo falhou');
}
// Union Types
var nota = 5;
function exibirNota(nota) {
    console.log("A sua nota é " + nota);
}
exibirNota("10");
exibirNota(10);
//type Funcionarios = Array<Funcionario>
var funcionarios = [
    {
        nome: "Henrique",
        sobrenome: "Vieira",
        dataNascimento: new Date()
    },
    {
        nome: "Fulano",
        sobrenome: "Ciclano",
        dataNascimento: new Date
    }
];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log("Nome do funcionário: ", funcionario.nome);
    }
}
// Valor nulo
var comprimento = 1.6;
comprimento = null;
var contato = {
    nome: "Henrique",
    telefone1: "81998979695"
};
// Type Assertion
var minhaIdade = 23;
minhaIdade.toString();
/*
//const input = document.getElementById("numero1") as HTMLInputElement;
const input = <HTMLInputElement>document.getElementById("numero1");
console.log(input.value);
*/ 
