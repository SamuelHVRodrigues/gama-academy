// Reverse a string

function reverseString(str) {
    let tam = str.length - 1
    let newString = ''
    
    for(let i = tam; i >= 0; i--) {
        newString = newString + str[i]
        console.log(newString)
    }
}

let resultado = reverseString('Hello Gama Academy')