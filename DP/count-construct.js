// Brute_force
// const countConstruct = (target, wordBank) => {
//     if(target === "") return 1

//     let totalCount = 0
//     for(let word of wordBank){
//         if(target.indexOf(word) === 0){
//             const remainingString = target.slice(word.length)
//             const way = countConstruct(remainingString, wordBank)
//             totalCount += way
//         }
//     }

//     return totalCount
// }


//Memoization
// const countConstruct = (target, wordBank, memo = {}) => {
//     if(target in memo) return memo[target]
//     if(target === "") return 1

//     let totalCount = 0
//     for(let word of wordBank){
//         if(target.indexOf(word) === 0){
//             const remainingString = target.slice(word.length)
//             const way = countConstruct(remainingString, wordBank, memo)
//             totalCount += way
//         }
//     }

//     memo[target] = totalCount
//     return totalCount
// }



//tabulation
const countConstruct = (target, wordBank) => {
    let table = Array(target.length + 1).fill(0)
    table[0] = 1

    for(let i = 0; i <= target.length; i++){
        if(table[i] !== 0){
            for(let word of wordBank){
                if(target.slice(i, i + word.length) === word){
                    table[i + word.length] += table[i] 
                }
            }
        }
    }

    return table[target.length]
}




console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]))//2
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))//1
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))//0
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))//4
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]))//0
