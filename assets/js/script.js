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

function random() {
    return Math.floor(Math.random() * gerador.length)
}

let gerador = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z'
];

const upperF = () => {
    const alfabetoMaiusculo = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G',
        'H', 'I', 'J', 'K', 'L', 'M', 'N',
        'O', 'P', 'Q', 'R', 'S', 'T', 'U',
        'V', 'W', 'X', 'Y', 'Z'
    ];

    for (let i = 0; i < alfabetoMaiusculo.length; i++) {
        gerador.push(alfabetoMaiusculo[i])
    }
}

const numberF = () => {
    const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    for (let i = 0; i < numeros.length; i++) {
        gerador.push(numeros[i])
    }
}

const symbolF = () => {
    const simbolos = [
        '!', '@', '#', '$', '%', '&', '*',
        '-', '_', '+', '=', '.', '?'
    ];
    for (let i = 0; i < simbolos.length; i++) {
        gerador.push(simbolos[i]);
    };
}

document.addEventListener('click', (e) => {
    const target = e.target
    
    if(target == upper) {
        if(upper.checked) {
        upperF()
    } else {
        gerador = gerador.filter(noUpp => !/^[A-Z]$/.test(noUpp))
    }
    }

    if(target == number) {
        if(number.checked) {
        numberF();
    } else {
        gerador = gerador.filter(noNum => !/[0-9]/.test(noNum))
    }
    }

    if(target == symbol) {
        if(symbol.checked) {
        symbolF();
    } else {
        gerador = gerador.filter(noSym => !/[!@#$%&*-_+=.?]/.test(noSym))
    }
    }
})

let senhaBruta = []

submit.addEventListener('click', (e) => {
    e.preventDefault()
    senhaBruta = []
    for(let i = 0; i < range.value ; i++) {
        senhaBruta.push([...gerador][random()])
    }

    display.innerText = (senhaBruta.join(''))
})

range.addEventListener('change', () => {
    quant.innerText = ""
    quant.innerText += ` ${range.value}`;
})

const popUp = document.querySelector('.popUp')


copy.addEventListener('click', () => {
    navigator.clipboard.writeText(display.innerText)

    const display = getComputedStyle(popUp).display;
})

const passwords = document.querySelector('.btPasswords')
const savePasswords = document.querySelector('.savePasswords')

const showPasswords = () => {
    const display = getComputedStyle(savePasswords).display;

    if (display === "none") {
    savePasswords.style.display = "flex";
  } else {
    savePasswords.style.display = "none";
  }
}