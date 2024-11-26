function optionKey(){
    var selects = document.getElementsByTagName("select");
    for(let i = 0; i < selects.length; i++){
        for(let j = 0; j < 26; j++){
            var option = document.createElement("option");
            option.value = j;
            option.textContent = j;
            selects[i].appendChild(option);
        }
    }
}
function ejemplo1(){
    document.getElementById("mensajeOriginal").value = `La programación es el arte de transformar ideas en realidad mediante el código, resolviendo problemas y creando soluciones innovadoras`.toUpperCase();
    document.getElementById("llave1").value = 16;
    document.getElementById("llave2").value = 12;
    document.getElementById("llave3").value = 21;
    document.getElementById("llave4").value = 6;
    document.getElementById("llave5").value = 2;
    document.getElementById("llave6").value = 1;
}
function ejemplo2(){
    document.getElementById("mensajeOriginal").value = `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) 
desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos espécimen. No sólo sobrevivió 500 años, sino que también ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. 
Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenían pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.`.toUpperCase();
    document.getElementById("llave1").value = 1;
    document.getElementById("llave2").value = 2;
    document.getElementById("llave3").value = 3;
    document.getElementById("llave4").value = 4;
    document.getElementById("llave5").value = 5;
    document.getElementById("llave6").value = 6;
}
function limpiar(){
    document.getElementById("mensajeOriginal").value = "";
    document.getElementById("mensajeEncriptado").value = "";
    document.getElementById("llave1").value = 1;
    document.getElementById("llave2").value = 1;
    document.getElementById("llave3").value = 1;
    document.getElementById("llave4").value = 1;
    document.getElementById("llave5").value = 1;
    document.getElementById("llave6").value = 1;
}
function allows(event){
    var keycode = event.keyCode || event.which;
    var typeTool = String.fromCharCode(keycode);
    if(!/^[A-Z]$/.test(typeTool) && keycode !=13 && keycode !=32 && keycode !=8){
        event.preventDefault();
    }
}
function capital(textArea){
    textArea.value = textArea.value.toUpperCase();
}
function encriptar(){
    var mensaje = document.getElementById("mensajeOriginal").value;
    var salida = "", k = 1;
    for(let i = 0; i < mensaje.length; i++){
        var letter = mensaje.charCodeAt(i);
        var desplazamiento = parseInt(document.getElementById("llave"+k++).value);
        if(/^[A-Z]$/.test(mensaje[i]))
            if(letter + desplazamiento > 90) salida += String.fromCharCode(letter + desplazamiento - 26);

            else salida += String.fromCharCode(letter + desplazamiento);

        else salida += String.fromCharCode(letter);

        if(k==7) k=1;
    }
    document.getElementById("mensajeEncriptado").value = salida.trim();  
}
function guardarLlave(){
    var archivo = document.createElement("a");
    var contenido = document.getElementById("llave1").value + "," + document.getElementById("llave2").value + ","
    + document.getElementById("llave3").value + "," + document.getElementById("llave4").value + ","
    + document.getElementById("llave5").value + "," + document.getElementById("llave6").value;
    archivo.setAttribute("href", "data:text/plane;charset=uft-8," + encodeURIComponent(contenido));
    archivo.setAttribute("download", "Key.txt");
    archivo.style.display = "none";
    document.body.appendChild(archivo);
    archivo.click();
    document.body.removeChild(archivo);
}
function guardarMensaje(){
    if(document.getElementById("mensajeEncriptado").value.trim()!=""){
        var archivo = document.createElement("a");
        var contenido = document.getElementById("mensajeEncriptado").value;
        archivo.setAttribute("href", "data:text/plane;charset=uft-8," + encodeURIComponent(contenido));
        archivo.setAttribute("download", "MensajeEncriptado.txt");
        archivo.style.display = "none";
        document.body.appendChild(archivo);
        archivo.click();
        document.body.removeChild(archivo);
    } else alert("No hay mensaje para guardar");
}