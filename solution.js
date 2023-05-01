function lastDigit(n, d) {
    let arr = Array.from(String(n), Number)
    let num = 0
    let finalArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        if (num < d) {
            finalArr.push(arr[i])
            num++
        }
    }
    return finalArr.reverse()
}

console.log(lastDigit(1, 1)) // [1]
console.log(lastDigit(123767, 4)) // [3,7,6,7]
console.log(lastDigit(0, 1)) // [0]