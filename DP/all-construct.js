
//Brute_force
//  const allConstruct = (target, wordBank) => {
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

// const allConstruct = (target, wordBank, memo = {}) => {
//     if(target in memo) return memo[target]
//     if(target === "") return [[]]

//     let construct = []

//     for(let word of wordBank){
//         if(target.indexOf(word) === 0){
//             const remainingString = target.slice(word.length)
//             const ways = allConstruct(remainingString, wordBank, memo)
//             const targetWays = ways.map(way => [word, ...way])
//             construct.push(...targetWays)
//         }
//     }
//     memo[target] = construct
//     return construct
// }


// Tabulation

const allConstruct = (target, wordBank) => {
    // Basically I am initializing an empty array to all the elements of the table. table = [[], [], [], [], []] 
    const table = Array(target.length + 1).fill().map(() => [])

    table[0] = [[]]

    for(let i = 0; i <= target.length; i++){
        for(let word of wordBank){
            if(target.slice(i, i + word.length) === word){
                //basically I am adding current word to the every combination i.e table[i] = [[abc], [ab,c]] then word = def  newCombination = [[abc, def], [ab,c,def]]
                const newCombination = table[i].map( (subArray) => [...subArray, word])

                //then I am pushing it to the desired position, by using spread operator I am not creating any array simply copying and then pushing it. 
                table[i + word.length].push(...newCombination)
            }
        }
    }

    return table[target.length]
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
 //console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]))
//[]

console.log(allConstruct("aaaaaaaaaaz", ["a", "aa", "aaa", "aaaa", "aaaaa"]))
//the time complexity of this problem is O(n^m) and space complexity id O(n^m) where n = wordBank.length and m = target.length and that's why for larger target it crashed 