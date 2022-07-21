// Boolean
const contaPaga: boolean = true;

// Number
const idade: number = 22;
const altura: number = 1.73;

// String
const nome: string = "Henrique";

// Array
const frutas: string[] = ["maçã", "laranja", "banana"];
const notas: Array<number> = [10, 6, 4, 9, 8, 8];

// Tuple
let jogadores: [string, string, string, number, boolean];
jogadores = ["Rick", "Neto", "Gabriel", 99, true];

// Enum
enum StatusAprovacao {
    Aprovado = "001",
    Recuperacao = "002",
    Reprovado = "003"
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any (não recomendado)
const retornoDaAPI: any[] = [123, "Henrique", true];
const retornoDaAPI2: any[] = [{
    // ...
}]

// Void
function printarNaTela (mensagem: string): void {
    console.log(mensagem);
}

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// Object
function criar(objecto: object) {

}
criar({
    nome: "Henrique",
    idade: 22,
});

// Never
function loopInfinito(): never {
    while(true);
}

function erro(mensagem: string): never {
    throw new Error(mensagem);
}

function falha() {
    return erro('Algo falhou');
}

// Union Types
const nota: string | number = 5;
function exibirNota(nota: number | string) {
    console.log("A sua nota é " + nota);
}

exibirNota("10");
exibirNota(10);

// Alias
type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}

//type Funcionarios = Array<Funcionario>
const funcionarios: Funcionario[] = [
    {
        nome: "Henrique",
        sobrenome: "Vieira",
        dataNascimento: new Date()
    },
    {
        nome: "Fulano",
        sobrenome: "Ciclano",
        dataNascimento: new Date
    }];

function tratarFuncionarios(funcionarios: Funcionario[]) {
    for (let funcionario of funcionarios) {
        console.log("Nome do funcionário: ", funcionario.nome)
    }
}

// Valor nulo
let comprimento: number | null = 1.6;
comprimento = null;

// Valor opcional
type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string;
}

const contato: Contato = {
    nome: "Henrique",
    telefone1: "81998979695"
}

// Type Assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString();

/*
//const input = document.getElementById("numero1") as HTMLInputElement;
const input = <HTMLInputElement>document.getElementById("numero1");
console.log(input.value);
*/