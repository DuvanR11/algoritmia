const desafio = [
    [1, 1, 1], //Juan
    [0, 1, 1] //Camilo
]
let punCamilo = 0
let punJuan = 0
for (let index = 0; index < desafio.length; index++) {

    for (let i = 0; i < desafio[index].length; i++) {

        const camilo = desafio[1][i];
        const juan = desafio[0][i];

        if(camilo == juan){
            // console.log("0 puntos")
        }else if(camilo >= juan){
            punCamilo += 1
        }else{
            punJuan += 1
        }
    }
}
console.log(punCamilo)
console.log(punJuan)