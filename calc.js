const botonNumeros = document.getElementsByName('data-number');
const botonOperadores = document.getElementsByName('data-operator');
const botonEqual = document.getElementsByName('data-equal')[0];
const botonClear = document.getElementsByName('data-clear')[0];

//console.log(botonOperadores);


var result = document.getElementById('result');
var opeActual = '';
var opeAnterior = '';
var operacion = undefined;

//TODO: agregamos los eventos de botones
/**
 * Números
 */
botonNumeros.forEach( (boton) => {
    boton.addEventListener('click',function(){
        agregarNumero(boton.innerText);
    })
})

/**
 * Operadores
 */
botonOperadores.forEach( (boton) => {
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);
    })
})

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

function selectOperacion(op){
    if(opeActual ==='') return;

    if(opeAnterior !== '')
        calcular();

    operacion = op.toString()
    opeAnterior = opeActual;
    opeActual = '';
};

function actualizarDisplay(){
    result.value = opeActual;
}

function calcular(){
    var calculo;
    const anterior = parseFloat(opeAnterior);
    const actual   = parseFloat(opeActual);

    if(isNaN(anterior) || isNaN(actual)) return;

    switch (operacion) {
        case '+':
            calculo = anterior + actual;        
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case '*':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }

    opeActual = calculo;
    operacion = undefined;
    opeAnterior = '';
};

function limpiar(){
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
};

limpiar();