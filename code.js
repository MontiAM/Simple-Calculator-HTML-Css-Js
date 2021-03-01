// Seleccionar elementos del DOM:
const numButtons = document.getElementsByName("buttonNumber");
const opButtons = document.getElementsByName("buttonOperation");
const iqualButton = document.getElementsByName("buttonIqual")[0];
const deleteButton = document.getElementsByName("buttonDelete")[0];
var result = document.getElementById("result");
var opActual = "";
var opAnterior= "";
var operacion = undefined;

// Captura de eventos:
numButtons.forEach(function(boton){
    boton.addEventListener("click", function(){
        agregarNumero(boton.innerText);
        actualizarDisplay();
    })
})

opButtons.forEach(function(boton){
    boton.addEventListener("click", function(){
        seleccionarOperacion(boton.innerText);
        actualizarDisplay();
    })
})

iqualButton.addEventListener("click", function(){
    calcular();
    actualizarDisplay();
})

deleteButton.addEventListener("click", function(boton){
    clear();
    actualizarDisplay();
})

// Funciones:
const calcular = () =>{
    var calculo;
    const anterior = parseFloat(opAnterior);
    const actual = parseFloat(opActual);
   if (isNaN(actual) || isNaN(anterior)){return} else {
       switch(operacion){
           case "+":
               calculo = anterior + actual;
               break
           case "-":
               calculo = anterior - actual;
               break;
           case "/":
               calculo = anterior / actual;
               break
           case "*":
               calculo = anterior * actual;
               break;
           default:
               return;
       }
   }
   opActual = calculo;
   operacion = undefined;
   opAnterior = "";
}

const seleccionarOperacion = (op) =>{
    if (opActual === "") {return} else {
        calcular();
    }
    operacion = op.toString();  
    opAnterior = opActual;
    opActual = "";
}

const agregarNumero = (num) =>{
    opActual = opActual.toString() + num.toString();
}

const actualizarDisplay = () =>{
    result.value = opActual;
}

const clear = () =>{
    opActual = "";
    opAnterior = "";
    operacion = undefined;
}

clear();