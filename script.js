//As "chaves" de criptografia que utilizaremos são:
//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"

const mensagem = document.querySelector("#resultado");
const textArea = document.querySelector("#text-area");
const resultadoNegativo = document.querySelector(".resultado-negativo");
const resultadoPositivo = document.querySelector(".resultado-positivo");
resultadoPositivo.style.display = 'none';

function btnCriptografar() {
    const resultado = criptografar(textArea.value);
    verificarResultado(resultado, textArea.value)
    mensagem.value = resultado;
    textArea.value = "";
}

function verificarResultado(resultado, valorEsperado) {
    if(resultado == valorEsperado){
        resultadoNegativo.style.removeProperty('display');
        resultadoPositivo.style.display = 'none';
    } else {
        resultadoPositivo.style.removeProperty('display');
        resultadoNegativo.style.display = 'none'
    }
}

function criptografar(texto) {
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    let resultado = texto;
   
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(texto.includes(matrizCodigo[i][0])){
            resultado = resultado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);  
        }
    }

    return resultado;
}

function btnDescriptografar() {
    const resultado = descriptografar(textArea.value);
    verificarResultado(resultado, textArea.value);
    mensagem.value = resultado;
    textArea.value = "";
}

function descriptografar(textoEncriptado) {
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    let resultado = textoEncriptado;

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(textoEncriptado.includes(matrizCodigo[i][1])) {
            resultado = resultado.replaceAll(matrizCodigo[i][1], matrizCodigo [i][0]); 
        } 
    }

    return resultado;
}

function btnCopiar() {
    navigator.clipboard.writeText(mensagem.value);
    alert('O texto copiado foi: ' + mensagem.value);
    verificarResultado("", "");
    mensagem.value = "";
}