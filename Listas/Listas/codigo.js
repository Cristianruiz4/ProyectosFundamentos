function CambioTexto(){
    var texto = document.getElementById("Elemento").value;
    document.getElementById("iPush").value = `Push(${texto})`;
    document.getElementById("iUnshift").value = `Unshift(${texto})`;
    document.getElementById("iIndex").value = `IndexOf(${texto})`;
    document.getElementById("iIncludes").value = `Includes(${texto})`;
    
    var numero = document.getElementById("Posicion").value
    document.getElementById("iInsert").value = `Insert_at(${texto},${numero})`;
}

function Push(){
    var lista = document.getElementById("tabla");
    var renglon = "";
    if(lista.hasChildNodes()){
        renglon=lista.firstChild;
    }else{
        renglon = document.createElement("tr");
        lista.appendChild(renglon);
    }

    var celda = document.createElement("td");
    celda.style.border = "1px solid black";

    celda.textContent = document.getElementById("Elemento").value;
    renglon.appendChild(celda);

}