// 1) Ejercisio Fizzbuzz
for (let index = 1; index < 20; index++) {
   if(index % 15 == 0) {
    console.log(index, 'Fizzbuzz' )
   }else if(index % 5 == 0){
    console.log(index, 'buzz' )
   }else if(index % 3 == 0){
    console.log(index, 'Fizz' )
   }else{
    console.log(index)
   }
}
