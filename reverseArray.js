const myArray = [1, 2, 3, 4, 5]
const longitud = myArray.length
let temporal = longitud - 1
for (let index = 0; index < longitud; index++) {
   a = myArray[temporal]
   console.log(a)
   temporal--
    
}

a = myArray.reverse();
console.log(a)