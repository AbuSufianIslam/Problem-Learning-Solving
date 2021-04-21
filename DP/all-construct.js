
//Brute_force
// const allConstruct = (target, wordBank) => {
//     if(target === "") return [[]]

//     let construct = []

//     for(let word of wordBank){
//         if(target.indexOf(word) === 0){
//             const remainingString = target.slice(word.length)
//             const ways = allConstruct(remainingString, wordBank)
//             const targetWays = ways.map(way => [word, ...way])
//             construct.push(...targetWays)
//         }
//     }

//     return construct
// }



//Memoization

const allConstruct = (target, wordBank, memo = {}) => {
    if(target in memo) return memo[target]
    if(target === "") return [[]]

    let construct = []

    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const remainingString = target.slice(word.length)
            const ways = allConstruct(remainingString, wordBank, memo)
            const targetWays = ways.map(way => [word, ...way])
            construct.push(...targetWays)
        }
    }
    memo[target] = construct
    return construct
}


 console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]))
//  [
//     ['purp', 'le'],
//     ['p', 'ur', 'p', 'le']
// ]

console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]))
// [
//     ['ab', 'cd', 'ef'],
//     ['ab', 'c', 'def'],
//     ['abc', 'def'],
//     ['abcd', 'ef']
// ]

console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
//[]
 console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]))
//[]