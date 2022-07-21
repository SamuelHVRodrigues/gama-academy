// FizzBuzz
// Divisivel por 3 => 'Fizz'
// Divisível por 5 => 'Buzz'
// Divisível por 3 e 5 => 'FizzBuzz'
// Se não for um número => 'Não é um número'
// Se não for divisível nem por 3 nem por 5 => Entrada

function fizzBuzz(entrada) {
    if(typeof entrada != 'number') {
        console.log('Não é um número')
    } else if(entrada % 3 === 0 && entrada % 5 === 0) {
        console.log('FizzBuzz')
    } else if(entrada % 3 === 0) {
        console.log('Fizz')
    } else if(entrada % 5 === 0) {
        console.log('Buzz')
    } else {
        console.log(entrada)
    }
}

let resultado = fizzBuzz('3')