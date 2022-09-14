
var pares = prompt("Ingrese secuencia de letras");
 var ocurencias= 0;
 var revisados = [];
 var caracteresRepetidos = function(str) {
                
 for (var i=0; i<str.length; i++) {
       if (!revisados.includes(str[i]) && str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
                    revisados.push(str[i]);
                    ocurencias = ocurencias+1;
                }
            }
            return ocurencias;
        }

        console.log( revisados ); 
        console.log( caracteresRepetidos(pares) );