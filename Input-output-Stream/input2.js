// const getInput = async (resolve)=>{ 
//     const readline = require('readline')
//                         .createInterface({ input: process.stdin, output: process.stdout });
//     readline.on('line',(line)=>{ readline.close(); resolve(); }) 
// }

// const numberOfInputLines = 10;

// for (let i = 0, p = Promise.resolve(); i < numberOfInputLines; i++) { 
//     p = p.then(_ => new Promise(resolve => getInput(resolve) )); 
// }


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


var lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
    main()
    //console.log(lines);
});
// inputString = ''
// currentLine = 0

// rl.on("data", function(data){

//     inputString += data
  
//     rl.close()
// })

// // rl.question("What is your name ? ", function(name) {
// //     rl.question("Where do you live ? ", function(country) {
// //         console.log(`${name}, is a citizen of ${country}`);
// //         rl.close();
// //     });
// // });

// rl.on("close", function() {
//     inputString = inputString.toString().trim().split('\n').map(string => {
//         return string.trim();
//     });
    
//     main(); 
//     console.log("\nBYE BYE !!!");
//     process.exit(0);
// });

// function readNextline() {
//     return inputString[currentLine++];
// }
// // Make a Snippet for the code above this and then write your logic in main();


function main() {
    const q = parseInt(lines[0], 10)
    console.log(q)
    let arr = []
    console.log(lines)
    for (let qItr = 1; qItr < lines.length; qItr++) {
        const a = parseInt(lines[qItr], 10)
        arr.push(a)
    }

    console.log(`${q} is target and ${arr} is the coin`)
    process.exit(0);
}
// function abbreviation(arr) {
//     // Write your code here
//     return arr

// }