// 3) Fibonnacci
function generateFibonnacci(limit){
    const fib = [0, 1]
    for (let index = 2; index < limit; index++) {
        fib.push(fib[index - 1] + fib[index - 2])
        console.log(fib[index - 1], '+', fib[index - 2], '=', fib[index])
    }
    console.log("Ultimo: ", fib[limit - 1])
    return fib
}
generateFibonnacci(10)
