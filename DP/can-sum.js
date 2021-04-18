// brute-force
// const canSum = (target, numbers) => {
//     if(target === 0) return true
//     if(target < 0) return false

//     for(let num of numbers){
//         if(target >= num){
//             const remainder = target - num
//             if(canSum(remainder, numbers)){
//                 return true
//             }
//         }
         
//     }

//     return false
// }

//Memoize 

const canSum = (target, numbers, memo = {}) => {
    if(target in memo) return memo[target]
    if(target === 0) return true
    if(target < 0) return false

    for(let num of numbers){
        if(target >= num){
            const remainder = target - num
            if(canSum(remainder, numbers, memo)){
                memo[target] = true
                return true
            }
        }
         
    }
    memo[target] = false
    return false
}


console.log(canSum(7, [2,3])) //true
console.log(canSum(7, [5,3,4,7])) //true
console.log(canSum(7, [2,4])) //false
console.log(canSum(8, [2,3,5])) //true
console.log(canSum(300, [7,14])) //false