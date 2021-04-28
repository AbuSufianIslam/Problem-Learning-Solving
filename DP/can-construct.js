
// Brute_force

// const canConstruct = (target, wordBank) => {
//     if(target === "") return true


//     for(let word of wordBank){
//         if(target.indexOf(word) === 0){
//             const remainingString = target.slice(word.length)

//             if(canConstruct(remainingString, wordBank) === true){
//                 return true
//             }

//         }
//     }

//     return false

// }



// Memoization
// const canConstruct = (target, wordBank, memo = {}) => {
//     if(target in memo) return memo[target]
//     if(target === "") return true

//     for(let word of wordBank){
//         if(target.indexOf(word) === 0){
//             const remainingString = target.slice(word.length)

//             if(canConstruct(remainingString, wordBank, memo) === true){
//                 memo[target] = true
//                 return true
//             }

//         }
//     }
//     memo[target] = false
//     return false

// }


// Tabulation

const canConstruct = (target, wordBank) => {
    table = Array(target.length + 1).fill(false)
    table[0] = true

    for(let i = 0; i < table.length; i++){
        if(table[i] !== false){
            for(let word of wordBank){
                //I am going to slice from the i th position till the length of each word(Basically if target = abcdef and if i = 0 and if first word = abc then slicing of abcdef from (0,3) is abc and then is it equal the current word or not if the word = ef and slicing of abcdef from (0,2) which is ab is not equal the word and I am not going inside the condition)
                if(target.slice(i, i + word.length) === word){
                    table[i + word.length] = true
                }
            }
        }
    }

    return table[target.length]

}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))//true
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))//false
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))//true
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]))//false
