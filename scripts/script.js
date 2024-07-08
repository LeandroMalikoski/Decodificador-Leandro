let codigoNormal = ['e', 'i', 'a', 'o', 'u'];
let codigoCodificado = ['enter', 'imes', 'ai', 'ober', 'ufat'];
let texto;
let letras = /[^a-z\s]/;

const copiarTexto = document.getElementById('button-copy');
const textoCopiado = document.getElementById('result');
copiarTexto.addEventListener('click', () => {
    navigator.clipboard.writeText(textoCopiado.innerText);
})

document.getElementById('result').style.display = 'none';
document.getElementById('button-copy').style.display = 'none';

function result() {
    let y = document.getElementById('fun-result');
    y.setAttribute('class', 'aparecer');
    document.getElementById('result').style.display = '';
    document.getElementById('button-copy').style.display = '';
    document.getElementById('result-img').style.display = 'none';
    document.getElementById('result-text').style.display = 'none';
}

function getText() {
    return document.getElementById('getText').value;
}

function criptografar() {
    let texto = getText();
    for (let i = 0; i < codigoNormal.length; i++) {
        texto = texto.replaceAll(codigoNormal[i], codigoCodificado[i]);
    }
    if (texto.length === 0) {
        alert('Insira um texto');
    } else if (texto.match(letras)) {
        alert('Insira apenas letras minúsculas e sem acento.');
    } else {
        document.getElementById('result').innerHTML = texto;
        result();
        limpar();
    }
}

function descriptografar() {
    let texto = getText();
    for (let i = 0; i < codigoNormal.length; i++) {
        texto = texto.replaceAll(codigoCodificado[i], codigoNormal[i]);
    }
    if (texto.length === 0) {
        alert('Insira um texto');
    } else if (texto.match(letras)) {
        alert('Insira apenas letras minúsculas e sem acento.');
    } else {
        document.getElementById('result').innerHTML = texto;
        result();
        limpar();
    }
}

function limpar() {
    texto = document.getElementById('getText');
    texto.value = '';
}