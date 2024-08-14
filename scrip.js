
let info = document.querySelector('h6');
info.innerHTML = 'Solo letras minúsculas y sin tilde';
let btnenc = document.getElementById('btnencriptar');
btnenc.innerHTML = 'Encriptar';
let btndesen = document.getElementById('btndesencriptar');
btndesen.innerHTML = 'Desencriptar';
let alerta = document.querySelector('h2');
alerta.innerHTML = 'Ningún mensaje fue encontrado';
let mensaje = document.querySelector('p');
mensaje.innerHTML = 'Ingresa el texto que desees encriptar o desencriptar.'
let btncop = document.getElementById('btncopiar');
btncop.innerHTML = 'Copiar' 
let palabra = document.querySelector('.palabra');
let textos = document.querySelector('.textos');
let resultado = document.querySelector('.resultado');
let imagen = document.querySelector('.muñeco');
let desarrollador = document.getElementById('creditos');
desarrollador.innerHTML = 'Copyright © - Creado por Ignacio Rivera Báez con fecha 01/08/2024' 


function btnEncriptar(){
    validarEncrip(palabra.value);
    palabra.value = '';
}

function btnDesencriptar(){
    validarDesencip(palabra.value);
    palabra.value = ''
    
}

function btnCopiar(){
    let textoCopiado = document.querySelector('.resultado').value;
    if(textoCopiado){
        navigator.clipboard.writeText(textoCopiado).then(function(){
            alert('Mensaje copiado al portapapeles');
        })
    }
    resultado.value = '';
}

function validarEncrip(inputTexto){
    let validacion = /^[a-z ]+$/;

    if(!validacion.test(inputTexto)){
        alert('Solo puede ingresar letras en minúsculas y sin caracteres especiales');
        btncop.classList.add('hidden');
        imagen.classList.remove('hidden');
        alerta.classList.remove('hidden');
        mensaje.classList.remove('hidden');
        document.querySelector('.palabra').value = '';  
        document.querySelector('.resultado').value = '';
        return;
    }else{
        textos.classList.remove('hidden');
        return encriptar(inputTexto); 
    } 
}


function validarDesencip(inputTexto){
    let validacion = /^[a-z ]+$/;
    
    if (!validacion.test(inputTexto)){
        btncop.classList.add('hidden');
        imagen.classList.remove('hidden');
        alerta.classList.remove('hidden');
        mensaje.classList.remove('hidden');
        
        return alert('Solo puede ingresar letras en minúsculas y sin caracteres especiales');
    }else{
        textos.classList.remove('hidden');
        return desencriptar(inputTexto);
    }

}

function encriptar(inputTexto){
    let encriptado =''
    let textoFinal =''
    inputTexto = inputTexto.toLowerCase();
    for (let i = 0; i < inputTexto.length; i++){
        let letra = inputTexto[i];
        switch(letra){
            case 'a':
                encriptado ='ai';
                break;
            case 'e':
                encriptado = 'enter';
                break;
            case 'i':
                encriptado = 'imes';
                break;
            case 'o':
                encriptado = 'ober';
                break;
            case 'u':
                encriptado = 'ufat';
                break;
            default:
                encriptado = letra;
        }
        textoFinal +=encriptado;
    }
    btncop.classList.remove('hidden');
    imagen.classList.add('hidden');
    alerta.classList.add('hidden');
    mensaje.classList.add('hidden');
    return resultado.value = textoFinal;
    
}

function desencriptar(inputTexto) {
    btncop.classList.remove('hidden');
    imagen.classList.add('hidden');
    alerta.classList.add('hidden');
    mensaje.classList.add('hidden');
    return resultado.value = inputTexto
        .replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}



