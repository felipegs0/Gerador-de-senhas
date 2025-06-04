const frm = document.querySelector('form')
const range = document.getElementById('inRange')
const upper = document.getElementById('inUpper')
const lower = document.getElementById('inLower')
const number = document.getElementById('inNumber')
const symbol = document.getElementById('inSymbol')
const quant = document.querySelector('.quant')
const display = document.querySelector('.container-display-p')
const copy = document.querySelector('.inCopy')

const submit = document.getElementById('inEnviar') // remover caso não seja usado

let randomizados = 27

function random() {
    return Math.floor(Math.random() * randomizados)
}

let geradorSenha = {
    alfabeto: ['a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z']
}

console.log(geradorSenha)

//document.addEventListener('click', (e) => {
//    if(upper.checked) {
//        maiusculo()
//    } else {
//        
 //   }
//
  //  console.log()
//})

const maiusculo = () => {
     geradorSenha.alfabetoMaiusculo = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G',
        'H', 'I', 'J', 'K', 'L', 'M', 'N',
        'O', 'P', 'Q', 'R', 'S', 'T', 'U',
        'V', 'W', 'X', 'Y', 'Z'
    ];
    randomizados += 27;
    console.log(geradorSenha)
}

const numeros = () => {
    const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    for (let i = 0; i < numeros.length; i++) {
        geradorSenha.push(numeros[i])
    }
    randomizados += 11;
}

const simbolos = () => {
    const simbolos = [
        '!', '@', '#', '$', '%', '&', '*',
        '-', '_', '+', '=', '.', '?'
    ];
    for (let i = 0; i < simbolos.length; i++) {
        geradorSenha.push(simbolos[i]);
    };
    randomizados += 14;
}

let senhaBruta = []

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    if(upper.checked) {
        maiusculo();
    }

    if(number.checked) {
        numeros();
    }

    if(symbol.checked) {
        simbolos();
    }

    senhaBruta = []
    for(let i = 0; i < range.value ; i++) {
        senhaBruta.push(geradorSenha.alfabeto[random()])
    }
    display.innerText = (senhaBruta.join(''))
})

range.addEventListener('change', () => {
    quant.innerText = ""
    quant.innerText += ` ${range.value}`;
})

copy.addEventListener('click', () => {
    navigator.clipboard.writeText(display.innerText)
})