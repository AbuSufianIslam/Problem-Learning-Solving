
//brute-force

// const howSum = (target, numbers) => {
//     if(target === 0) return []
//     if(target < 0) return null

//     for(let num of numbers){
//         if(target >= num){
//             const remainder = target-num

//             const remainderResult = howSum(remainder, numbers)

//             if(remainderResult !== null){
//                 const result = [...remainderResult, num]
//                 return result
//             }

//         }
//     }

//     return null
// }




//Memoize


const howSum = (target, numbers, memo = {}) => {

    if(target in memo) return memo[target]
    if(target === 0) return []
    if(target < 0) return null

    for(let num of numbers){
            const remainder = target-num

            const remainderResult = howSum(remainder, numbers, memo)

            if(remainderResult !== null){
                const result = [...remainderResult, num]
                memo[target] = result
                return result
            }

    }
    memo[target] = null
    return null
}





console.log(howSum(7, [2,3])) //[3,2,2]
console.log(howSum(7, [5,3,4,7])) //[4,3]
console.log(howSum(7, [2,4])) //null
console.log(howSum(8, [2,3,5])) //[2,2,2,2]
console.log(howSum(300, [7,14])) //null