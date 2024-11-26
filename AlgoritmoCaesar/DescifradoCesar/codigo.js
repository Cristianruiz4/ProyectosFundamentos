function reiniciar(){
    window.location.reload();
}

function guardarMensaje(){
    if(document.getElementById("mensajeEncriptado").value.trim()!=""){
        var archivo = document.createElement("a");
        var contenido = document.getElementById("mensajeEncriptado").value;
        archivo.setAttribute("href", "data:text/plane;charset=uft-8," + encodeURIComponent(contenido));
        archivo.setAttribute("download", "MensajeDesencriptado.txt");
        archivo.style.display = "none";
        document.body.appendChild(archivo);
        archivo.click();
        document.body.removeChild(archivo);
    } else alert("No hay mensaje para guardar");
}

function cargar(){
    //Definimos una inner function para cargar las llaves
    document.getElementById("archivoLlave").addEventListener("change", function(event){
        var archivo = event.target.files[0];
        if(archivo){
            var reader = new FileReader();
            reader.onload = function(e){
                var contenido = e.target.result;
                var llaves = contenido.split(",");
                var selects = document.getElementsByTagName('select');
                for(let i = 0, k=0; i < selects.length; i++){
                    var option = document.createElement("option");
                    option.value = llaves[k];
                    option.textContent = llaves[k++];
                    option.defaultSelected = true;
                    selects[i].appendChild(option);
                }
            }

            reader.onerror = function(e){
                alert("Error al abrir el archivo")
            }
            reader.readAsText(archivo);
        }
        else{
            alert("Seleccione un archivo");
        }
    });
    //Funcion para cargar el archivo encriptado
    document.getElementById("archivoEncriptado").addEventListener("change", function(event){
        var archivo = event.target.files[0];
        if(archivo){
            var reader = new FileReader();
            reader.onload = function(e){
                var contenido = e.target.result;
                document.getElementById("mensajeEncriptado").value =  contenido;
            }
            reader.onerror = function(e){
                alert("Error al abrir el archivo");
            }
            reader.readAsText(archivo);
        }
        else{
            alert("Seleccione un archivo");
        }
    });
}
function desencriptar(){
    var mensaje = document.getElementById("mensajeEncriptado").value;
    var salida = "", k = 1;
    for(let i = 0; i < mensaje.length; i++){
        var letter = mensaje.charCodeAt(i);
        var desplazamiento = parseInt(document.getElementById("llave" + k++).value);
        if(/^[A-Z]$/.test(mensaje[i]))
            if(letter - desplazamiento < 65) salida += String.fromCharCode(letter - desplazamiento + 26);

            else salida += String.fromCharCode(letter - desplazamiento);

        else salida += String.fromCharCode(letter);

        if(k==7) k=1;
    }
    document.getElementById("mensajeOriginal").value = salida.trim(); 
}
