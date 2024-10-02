// Operadores de comparación
function compareTenAndNine() {
    console.log(10 >= 9); // true
}

function compareZeroAndZero() {
    console.log(0 === 0); // true
}

function compareSeven() {
    console.log(7 > 8 && 7 < 10); // false
}

// Operadores lógicos
function canBuyProduct() {
    const precio = 1500;
    const descuento = 0.25;
    const dinero = 1150;
    console.log(dinero >= precio * (1 - descuento)); // false
}

// Variables
function createMessageVariable() {
    let mensaje = "Hola JavaScript";
    console.log(mensaje);
}

function createSumVariable() {
    let resultado = 2 + 3;
    console.log(resultado);
}

function createDisabledConstant() {
    const IS_DISABLED = true;
    console.log(IS_DISABLED);
}

// Null y Undefined
function createNullVariable() {
    let capacidad = null;
    console.log(capacidad);
}

function createUndefinedVariable() {
    let dinero;
    console.log(dinero);
}

// typeof
function checkUserNameType() {
    let userName = "Juan";
    console.log(typeof userName); // string
}

function checkDogIdIsString() {
    let dogId = "123";
    console.log(typeof dogId === "string"); // true
}

// console.log()
function logMessage() {
    console.log("Este es un mensaje.");
}

function logAge() {
    let edad = 30;
    console.log(edad);
}

function logVersion() {
    let version = 2024;
    console.log('La versión de JavaScript es ' + version);
}
