const palabrasAleatorias = [
    "sol", "libro", "cafe", "nube", "guitarra",
    "ventana", "camino", "sombra", "fuego", "montaña",
    "rio", "luz", "jardin", "arena", "puente"
];
function Aleatorias(){
    var indice = Math.floor(Math.random() * palabrasAleatorias.length);
    document.getElementById("Elemento").value = palabrasAleatorias[indice];
    document.getElementById("iEnqueue").value = `Enqueue(${palabrasAleatorias[indice]})`;
}
function CambioTexto(){
    document.getElementById("iEnqueue").value = `Enqueue(${document.getElementById("Elemeto").value})`;
    document.getElementById("iFront").value = `Front(${document.getElementById("Elemento").value})`;
}
function Enqueue(){
    var queue = document.getElementById("tabla");
    var renglon = "";
    if(queue.hasChildNodes()){
        renglon = queue.firstChild;
    }else{
        renglon = document.createElement("tr");
        queue.appendChild(renglon);
    }
    var celda = document.createElement("td");
    celda.style.border = "1px solid black";
    celda.textContent = document.getElementById("Elemento").value;
    renglon.appendChild(celda);
    var inicio = Array.from(queue.rows).find(r=> r.cells[0].textContent === "Inicio");
    if(!inicio){
        var renglon2 = document.createElement("tr");
        var celda2 = document.createElement("td");
        celda2.textContent = "Inicio";
        renglon2.appendChild(celda2);
        queue.appendChild(renglon2);
    }
    document.getElementById("Elemento").focus();
    Aleatorias();
    document.getElementById("iFront").value = `Front(${queue.firstChild.firstChild.textContent})`;
}
function Dequeue(){
    var queue = document.getElementById("tabla");
    if(queue.rows.length>0){
        var renglon=queue.rows[0];
        if(renglon.cells.length>0){
            renglon.deleteCell(0);
            if(renglon.cells.length ==0){
                if(queue.rows.length > 1){
                    queue.deleteRow(1);
                }
                document.getElementById("iFront").value = `Front()`;
            }
        }
        document.getElementById("iFront").value = `Front(${queue.firstChild.firstChild.textContent})`;
    }
    if(queue.rows.length > 1){
        var segundorenglon = queue.rows[1];
        if(segundorenglon.cells.length > 0){
            segundorenglon.cells[0].textContent = "Inicio";
        }
    }
}
function Clear(){
    document.getElementById("tabla").textContent = "";
    document.getElementById("mensaje").innerHTML = "Se ha eliminado todos los elementos de la pila";
    document.getElementById("iFront").value = `Front()`;
}
function Find(){
    var rt = document.getElementById("tabla");
    var control = false;
    if(rt.hasChildNodes()){
        for(let i = 0; i < rt.rows[0].hasChildNodes.length; i++){
            let nodo = rt.childNodes[0].childNodes[i].textContent;
            if(nodo == document.getElementById("Elemento").value){
                document.getElementById("mensaje").innerHTML = `Si se encuentra el elemento ${nodo}`;
                control = true;
                break;
            }   
        }if(!control){
            document.getElementById("mensaje").innerHTML = "No se encuentra el elemento";
        }
        }else{
            document.getElementById("mensaje").innerHTML = "No hay elementos en la pila";
    }
}
function isEmpty(){
    var rt = document.getElementById("tabla");
    if(rt.hasChildNodes()){
        document.getElementById("mensaje").innerHTML = "False";
    }else{
        document.getElementById("mensaje").innerHTML = "True";
    }
}