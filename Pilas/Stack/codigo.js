var i = 0;
function pasoApaso(){
    var expresion = document.getElementById("exp").value.split(" ");
    //alert(expresion);
    if (Number.isInteger(Number(expresion[i]))) {
        document.getElementById("textPaso").innerHTML += `Pasos: ${expresion[i]} es un numero, va al tope de la pila <br>`;
        Push(expresion[i]);
    } else if (expresion[i] == '*') {
        var operando1 = Pop();
        var operando2 = Pop();
        if (operando1 !== undefined && operando2 !== undefined) {
            var multiplicacion = operando2 * operando1;
            Push(multiplicacion);
            document.getElementById("textPaso").innerHTML += `Pasos: ${operando2} * ${operando1} = ${multiplicacion}<br>`;
        }
    } else if (expresion[i] == '+') {
        var operando1 = Pop();
        var operando2 = Pop();
        if (operando1 !== undefined && operando2 !== undefined) {
            var suma = operando2 + operando1;
            Push(suma);
            document.getElementById("textPaso").innerHTML += `Pasos: ${operando2} + ${operando1} = ${suma} <br>`;
        }
    } else if (expresion[i] == '-') {
        var operando1 = Pop();
        var operando2 = Pop();
        if (operando1 !== undefined && operando2 !== undefined) {
            var resta = operando2 - operando1;
            Push(resta);
            document.getElementById("textPaso").innerHTML += `Pasos: ${operando2} - ${operando1} = ${resta} <br>`;
        }
    } else if (expresion[i] == '/') {
        var operando1 = Pop();
        var operando2 = Pop();
        if (operando1 !== undefined && operando2 !== undefined) {
            var division = operando2 / operando1;
            Push(division);
            document.getElementById("textPaso").innerHTML += `Pasos: ${operando2} / ${operando1} = ${division} <br>`;
        }
    } else {
        document.getElementById("textPaso").innerHTML += `Pasos: ${expresion[i]} no es un elemento valido en una expresión postfija <br>`;
        document.getElementById("botonEval").disabled = true;
        document.getElementById("botonPaso").disabled = true;
        document.getElementById("exp").disabled = true;
    }
    i++;
    if (i == expresion.length) {
        document.getElementById("botonEval").disabled = true;
        document.getElementById("botonPaso").disabled = true;
        document.getElementById("exp").disabled = true;
        var rt = document.getElementById("tabla");
        if (rt.hasChildNodes()) {
            if (rt.childNodes.length == 1) {
                document.getElementById("textResultado").innerHTML = `Resultado: ${rt.firstChild.textContent}`;
            } else {
                document.getElementById("textResultado").innerHTML = `Resultado: Hay un error en la expresion`;
            }
        }
    }
}

function Reinicio() {
    document.getElementById("botonEval").disabled = false;
    document.getElementById("botonPaso").disabled = false;
    document.getElementById("exp").disabled = false;
    document.getElementById("exp").value = "3 4 * 2 5 + - 4 * 2 /";
    i = 0;
    document.getElementById("tabla").innerHTML = ""; // Limpia la tabla correctamente
    document.getElementById("textPaso").innerHTML = `Pasos: <br>`;
    document.getElementById("textResultado").innerHTML = `Resultado: <br>`;
}

function Push(operando) {
    var renglon = document.createElement("tr");
    var celda1 = document.createElement("td");
    celda1.textContent = operando;
    renglon.appendChild(celda1);
    celda1.style.border = "1px solid black";
    var rt = document.getElementById("tabla");
    rt.insertBefore(renglon, rt.children[0]);
}

function Pop() {
    var rt = document.getElementById("tabla");
    if (rt.hasChildNodes()) {
        var regresar = rt.firstChild.textContent;
        rt.removeChild(rt.firstChild);
        return Number(regresar); // Asegura que devuelve un número
    } else {
        document.getElementById("textResultado").innerHTML = `Error en la expresion postfija <br>`;
        document.getElementById("botonEval").disabled = true;
        document.getElementById("botonPaso").disabled = true;
        document.getElementById("exp").disabled = true;
    }
}

function Evaluar() {
    var expresion = document.getElementById("exp").value.split(" ");
    //alert(expresion);
    for (var j = 0; j < expresion.length; j++) { // Cambié i por j para evitar conflicto
        if (Number.isInteger(Number(expresion[j]))) {
            document.getElementById("textPaso").innerHTML += `Pasos: ${expresion[j]} es un numero, va al tope de la pila <br>`;
            Push(expresion[j]);
        } else if (expresion[j] == '*') {
            var operando1 = Pop();
            var operando2 = Pop();
            if (operando1 !== undefined && operando2 !== undefined) {
                var multiplicacion = operando2 * operando1;
                Push(multiplicacion);
                document.getElementById("textPaso").innerHTML += `Pasos: ${operando2} * ${operando1} = ${multiplicacion}<br>`;
            }
        } else if (expresion[j] == '+') {
            var operando1 = Pop();
            var operando2 = Pop();
            if (operando1 !== undefined && operando2 !== undefined) {
                var suma = operando2 + operando1;
                Push(suma);
                document.getElementById("textPaso").innerHTML += `Pasos: ${operando2} + ${operando1} = ${suma} <br>`;
            }
        } else if (expresion[j] == '-') {
            var operando1 = Pop();
            var operando2 = Pop();
            if (operando1 !== undefined && operando2 !== undefined) {
                var resta = operando2 - operando1;
                Push(resta);
                document.getElementById("textPaso").innerHTML += `Pasos: ${operando2} - ${operando1} = ${resta} <br>`;
            }
        } else if (expresion[j] == '/') {
            var operando1 = Pop();
            var operando2 = Pop();
            if (operando1 !== undefined && operando2 !== undefined) {
                var division = operando2 / operando1;
                Push(division);
                document.getElementById("textPaso").innerHTML += `Pasos: ${operando2} / ${operando1} = ${division} <br>`;
            }
        } else {
            document.getElementById("textPaso").innerHTML += `Pasos: ${expresion[j]} no es un elemento valido en una expresión postfija <br>`;
            document.getElementById("botonEval").disabled = true;
            document.getElementById("botonPaso").disabled = true;
            document.getElementById("exp").disabled = true;
        }
    }
    document.getElementById("botonEval").disabled = true;
    document.getElementById("botonPaso").disabled = true;
    document.getElementById("exp").disabled = true;
    var rt = document.getElementById("tabla");
    if (rt.hasChildNodes()) {
        if (rt.childNodes.length == 1) {
            document.getElementById("textResultado").innerHTML = `Resultado: ${rt.firstChild.textContent}`;
        } else {
            document.getElementById("textResultado").innerHTML = `Resultado: Hay un error en la expresion`;
        }
    }
}
