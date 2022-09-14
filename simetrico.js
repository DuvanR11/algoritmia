
// Array simetrico
const myArray = ['1', '2', '3', '3', '2', '1']
const longitud = myArray.length
const mitad = myArray.length / 2
let temporal = longitud - 1
let alerta = 0

for (let i = 0; i < mitad && alerta == 0; i++) {
    if(myArray[i] != myArray[temporal]){
        alerta = 1;
      }else{
        temporal--
      } 
}

if (alerta == 0) {
    console.log("longitud",longitud)
    console.log("Arreglo es Simetrico")
  } else {
    console.log("Arreglo NO ES Simetrico")
  }