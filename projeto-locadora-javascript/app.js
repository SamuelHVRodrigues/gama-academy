// $ npm init -y [Inicia um pacote criando o arquivo package.json pulando as perguntas]
// Alterar no package.json: "scripts":{"start": "<nome_arquivo.js>"}
// $ npm install readline-sync [Instala a biblioteca readline-sync]
// $ echo node_modules > .gitignore [Cria o arquivo .gitignore com "node_modules" dentro]

const filmes = require('./database');                                                                    // Importa o database.js [modules.exports = filmes (no database.js)]
const readline = require('readline-sync');                                                               // Importa a biblioteca readline-sync


console.log("Bem-vindo a Locadora SAGA");

let input = readline.question("Deseja buscar os filmes por saga? S/N ");                                 // [Recebe entrada do usuário]
if(input.toLocaleUpperCase() === "S") {                                                                  // Buscar filmes por saga

    console.log("Essas são as opções disponíveis: ");
    input = readline.question("Animais Fantásticos\nHarry Potter\nO Hobbit\nO Senhor dos Anéis\n");      // Escolher a saga [Recebe entrada do usuário]
    console.table(filmes.filter(filme => filme.saga.toLocaleUpperCase() === input.toLocaleUpperCase())); // Retorna tabela da saga escolhida

} else if(input.toLocaleUpperCase() === "N"){                                                            // Não buscar filmes por saga

    input = readline.question("Deseja buscar os filmes por autor? S/N ");                                // [Recebe entrada do usuário]
    if(input.toLocaleUpperCase() === "S") {                                                              // Buscar filmes por autor

        console.log("Essas são as opções disponíveis: ");
        input = readline.question("1. J. K. Rowling\n2. J. R. R. Tolkien\n");                            // Escolher autor [Recebe entrada do usuário]
        if(input == 1) console.table(filmes.filter(filme => filme.autor === "J. K. Rowling"));           // Retorna tabela da J. K. Rowling
        else if(input == 2) console.table(filmes.filter(filme => filme.autor === "J. R. R. Tolkien"));   // Retorna tabela do J. R. R. Tolkien

    } else console.table(filmes.sort((a,b) => a.lancamento-b.lancamento));                               // Não buscar filmes por autor
                                                                                                         // Retorna tabela com todos os filmes em ordem de lançamento

} else console.table(filmes);                                                                            // Retorna tabela com todos os filmes por ordem de id

