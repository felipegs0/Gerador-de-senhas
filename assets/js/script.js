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

document.addEventListener('click', (e) => {
    const target = e.target
    console.log(target)
    if(upper.checked) {
        console.log('oii')
    } else {
        console.log('nao')
    }
})

let gerador = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z'
];

const maiusculo = () => {
    const alfabetoMaiusculo = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G',
        'H', 'I', 'J', 'K', 'L', 'M', 'N',
        'O', 'P', 'Q', 'R', 'S', 'T', 'U',
        'V', 'W', 'X', 'Y', 'Z'
    ];

    for (let i = 0; i < alfabetoMaiusculo.length; i++) {
        gerador.push(alfabetoMaiusculo[i])
    }
    randomizados += 27;
}

const numeros = () => {
    const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    for (let i = 0; i < numeros.length; i++) {
        gerador.push(numeros[i])
    }
    randomizados += 11;
}

const simbolos = () => {
    const simbolos = [
        '!', '@', '#', '$', '%', '&', '*',
        '-', '_', '+', '=', '.', '?'
    ];
    for (let i = 0; i < simbolos.length; i++) {
        gerador.push(simbolos[i]);
    };
    randomizados += 14;
}

let senhaBruta = []

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    if(upper.checked) {
        maiusculo();
    } else {
        gerador = gerador.filter(semMaiuscula => !/^[A-Z]$/.test(semMaiuscula))
        
    }

    if(number.checked) {
        numeros();
    }

    if(symbol.checked) {
        simbolos();
    }

    senhaBruta = []
    for(let i = 0; i < range.value ; i++) {
        senhaBruta.push([...gerador][random()])
    }

    console.log(gerador)
    display.innerText = (senhaBruta.join(''))
})

range.addEventListener('change', () => {
    quant.innerText = ""
    quant.innerText += ` ${range.value}`;
})

copy.addEventListener('click', () => {
    navigator.clipboard.writeText(display.innerText)
})