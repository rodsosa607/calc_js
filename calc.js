const botonNumeros = document.getElementsByName('data-number');
const botonOperadores = document.getElementsByName('data-operator');
const botonEqual = document.getElementsByName('data-equal')[0];
const botonClear = document.getElementsByName('data-clear')[0];

var result = document.getElementById('result');
var opeActual = '';
var opeAnteior = '';
var operacion = undefined;

//TODO: agregamos los eventos de botones
/**
 * Números
 */
botonNumeros.forEach( function (boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
        //alert(boton.innerText);
    });
});

/**
 * Operadores
 */

botonOperadores.forEach( function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);
        //alert(boton.innerText);
    });
});


/**
 * Igual y limpiar
 */
botonEqual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});

botonClear.addEventListener('click', function(){
    limpiar();
    actualizarDisplay();
});

function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
};

function actualizarDisplay(){
    result.value = opeActual;
}

function calcular(){

};

function limpiar(){
    opeActual = '';
    opeAnteior = '';
    operacion = undefined;
};

limpiar();