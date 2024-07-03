let codigoNormal  = ['a', 'e', 'i', 'o', 'u'];
let codigoCodificado = ['ai', 'enter', 'imes', 'ober', 'ufat'];
let texto;

function getText () {
    texto = document.getElementById('getText').value;
    return texto;
}

function criptografar () {
    getText()
    for (let i = 0; i < codigoNormal.length; i++) {
        texto = texto.replaceAll(codigoNormal[i], codigoCodificado[i]);
    }
    console.log(texto)
    return texto;
}

function descriptografar () {
    getText()
    for (let i = 0; i < codigoNormal.length; i++) {
        texto = texto.replaceAll(codigoCodificado[i], codigoNormal[i]);
    }
    console.log(texto)
    return texto;
}

CSS.registerProperty({
    name: '--resultadoFinal',
    syntax: '<>'
})