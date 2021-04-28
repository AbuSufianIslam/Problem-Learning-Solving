// Brute-Force

// const bestSum = (target, numbers) => {
//     if(target === 0) return []
//     if(target < 0) return null

//     let shortestCombination = null

//     for (let num of numbers){
//         const remainder = target - num
//         const remainderResult = bestSum(remainder, numbers)

//         if(remainderResult !== null){
//             const result = [...remainderResult, num]

//             if(shortestCombination === null ||shortestCombination.length >= result.length){
//                 shortestCombination = result
//             }
//         }
            
//     }

//     return shortestCombination
// }

//Memoization

// const bestSum = (target, numbers, memo = {}) => {

//     if(target in memo) return memo[target]
//     if(target === 0) return []
//     if(target < 0) return null

//     let shortestCombination = null

//     for (let num of numbers){
//         const remainder = target - num
//         const remainderResult = bestSum(remainder, numbers, memo)

//         if(remainderResult !== null){
//             const result = [...remainderResult, num]

//             if(shortestCombination === null || shortestCombination.length >= result.length){
//                 shortestCombination = result
//             }
//         }
            
//     }
//     memo[target] = shortestCombination
//     return shortestCombination
// }


//Tabulation

const bestSum = (target, numbers) => {
    let table = Array(target + 1).fill(null)
    table[0] = []

    for(let i = 0; i <= target; i++){
        if(table[i] !== null){
            for(let num of numbers){
                if(i + num <= target){
                    const curr = table[i + num]
                    const combination = [...table[i], num]
                    if(curr === null || curr.length > combination.length){
                        table[i + num] = combination
                    }
                }
            }
        }
    }

    return table[target]
}



console.log(bestSum(7, [5,3,4,7]))  //[7]
console.log(bestSum(8, [2,3,5]))  //[3,5]
console.log(bestSum(8, [1,4,5]))  //[4,4]
console.log(bestSum(100, [1,2,5,25]))  //[25,25,25,25]
