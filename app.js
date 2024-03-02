let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = []
let numeroMaximo = 10;

    console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto) {

    let elementohtml=document.querySelector(elemento);  

    elementohtml.innerHTML=texto;

    return;
}
 

function verificarIntento() {
    let numeroDeUsuario= parseInt(document.getElementById('valorUsuario').value);

    if(numeroSecreto===numeroDeUsuario){

    asignarTextoElemento('p',`Acertaste el numero ${intentos}${(intentos===1)?'vez':'veces'}` );

    document.getElementById('reiniciar').removeAttribute('disabled');
    
    }else {

        if(numeroDeUsuario > numeroSecreto){

            asignarTextoElemento('p','El numero secreto es menor');
        }else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++
       limpiarcaja();
    }
    return
}

function limpiarcaja(){

    document.querySelector('#valorUsuario').value= '';

}

function generarNumeroSecreto(){

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);

    console.log(listaNumeroSorteados);

    if(listaNumeroSorteados.length == numeroMaximo){

        asignarTextoElemento('p','ya se sortearon todos los numeros posibles' );

    }else {
        if(listaNumeroSorteados.includes(numeroGenerado)){
    
            return generarNumeroSecreto();
    
        }else{
            listaNumeroSorteados.push(numeroGenerado);
    
            return numeroGenerado;
        }
    }

    }


function condicionesIniciales() {
    
    asignarTextoElemento('h1','juego al numero secreto');
    
    asignarTextoElemento('p',`indica un numero del 1 al ${numeroMaximo} `);

    numeroSecreto = generarNumeroSecreto();

    intentos=1; 
}


function nuevoJuego() {
    ///limpiar caja

    limpiarcaja();

    ///indicae mensaje de intervalo

     ///inicializar el numero de intento

     condicionesIniciales();

    ///desabilitar el boton
    
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();
    