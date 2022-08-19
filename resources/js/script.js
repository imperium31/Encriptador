function encriptacion(texto){
    texto = texto.split('');
    var contador = 0;

    while( contador < texto.length){
        if (texto[contador]=='a'){
            texto[contador] = 'ai';
        }
        else if(texto[contador]=='e'){
            texto[contador] = 'enter';
        }
        else if(texto[contador]=='i'){
            texto[contador] = 'imes';
        }
        else if(texto[contador]=='o'){
            texto[contador] = 'ober';
        }
        else if(texto[contador]=='u'){
            texto[contador] = 'ufat';
        }
        contador++;
    }

    texto = texto.join('');


    
    return texto
}


function desencriptacion(texto){
    texto = texto.split('');
    var contador = 0;

    while( contador < texto.length){
        if (texto[contador]=='a'){
            texto.splice(contador+1,1);
            }
        else if(texto[contador]=='e' ){
            texto.splice(contador+1,4);
        }
        else if(texto[contador]=='i'){
            texto.splice(contador+1,3);
        }
        else if(texto[contador]=='o'){
            texto.splice(contador+1,3);
        }
        else if(texto[contador]=='u'){
            texto.splice(contador+1,3);
        }
        contador++;
    }

    texto = texto.join('');


    
    return texto
}

function copiatexto(){
    let textocopiado = document.getElementById("receptor");
    textocopiado.select();
    document.execCommand("copy");
}
    
    function enviodato(){
        var conte = document.getElementById("contenido").value;
        var contenedor = encriptacion(conte);
        document.getElementById("receptor").value = contenedor;
    }

    function enviodato2(){
        var conte = document.getElementById("contenido").value;
        var contenedor = desencriptacion(conte);
        document.getElementById("receptor").value = contenedor;
    }
