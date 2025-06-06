const frm = document.querySelector('form')
const range = document.getElementById('inRange')
const upper = document.getElementById('inUpper')
const lower = document.getElementById('inLower')
const number = document.getElementById('inNumber')
const symbol = document.getElementById('inSymbol')
const quant = document.querySelector('.quant')
const display = document.querySelector('.container-display-p')



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

let senhaBruta = []
const submit = document.getElementById('inEnviar')

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

    if(target == submit) {
        e.preventDefault()
    senhaBruta = []
    for(let i = 0; i < range.value ; i++) {
        senhaBruta.push([...gerador][random()])
    }

    display.innerText = (senhaBruta.join(''))
    }
})

range.addEventListener('change', () => {
    quant.innerText = ""
    quant.innerText += ` ${range.value}`;
})

const copy = document.querySelector('.inCopy')
const popUp = document.querySelector('.popUp')


copy.addEventListener('click', () => {
    if(display.innerText == "") {
        alert('Não há nenhuma senha para ser copiada.')
        return
    }
    navigator.clipboard.writeText(display.innerText)

    const displayPop = getComputedStyle(popUp).display;
    if (displayPop === "none") {
    popUp.style.display = "flex";
  } 
})

const passwords = document.querySelector('.btPasswords')
const savePasswords = document.querySelector('.savePasswords')

const closePasswordsSave = () => {
    const displayPop = getComputedStyle(popUp).display;

    if (displayPop === "none") {
        popUp.style.display = "flex";
    } else {
        popUp.style.display = "none";
    }
}

const showPasswords = () => {
    const displaySave = getComputedStyle(savePasswords).display;

    if (displaySave === "none") {
    savePasswords.style.display = "flex";
  } else {
    savePasswords.style.display = "none";
  }
}

const savePassword = () => {
    const displayPop = getComputedStyle(popUp).display;

    if (displayPop === "flex") {
        popUp.style.display = "none";
    }

    const div = document.createElement('div')
    const p = document.createElement('p')
    savePasswords.appendChild(div)
    div.appendChild(p)

    div.classList.add('model')
    p.innerText = `Senha: ` + display.innerText;
}