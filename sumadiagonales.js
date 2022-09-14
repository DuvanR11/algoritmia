const myArray = [
    [10, 2, 2],
    [4, 5, 6],
    [1, 8, 20]
]
let suma = 0
let diagona1 = 0
let diagonal2 = 0
for (let i = 0; i < 3; i++) {

    diagona1 = diagona1 + myArray[i][i]
    diagonal2 = diagonal2 + myArray[i][2 - i]

//    console.log('la suma es', diagona1)
//    console.log('la suma es 2', diagonal2)
}
sumaTotal = diagona1 + diagonal2
console.log('total: ', sumaTotal)