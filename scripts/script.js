let codigoNormal = ['e', 'i', 'a', 'o', 'u'];
let codigoCodificado = ['enter', 'imes', 'ai', 'ober', 'ufat'];

function getText() {
    return document.getElementById('getText').value;
}

function criptografar() {
    let texto = getText();
    for (let i = 0; i < codigoNormal.length; i++) {
        texto = texto.replaceAll(codigoNormal[i], codigoCodificado[i]);
    }
    if (texto.length === 0){
        alert('Insira um texto');
    }
    else {
        alert(texto);
    }
    return texto;
}

function descriptografar() {
    let texto = getText();
    for (let i = 0; i < codigoNormal.length; i++) {
        texto = texto.replaceAll(codigoCodificado[i], codigoNormal[i]);
    }
    alert(texto);
    return texto;
}