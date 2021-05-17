
//Brute-Force

// const coinSum = (change, coins) => {

//     const findWays = (current, startIndex) =>{
//         if(current === 0) return 1;
//         if(current < 0) return 0;

//         let ways = 0;
//         for(let i = startIndex; i < coins.length; i++){
//             let coin = coins[i];
//             ways += findWays(current - coin, i);
//         }

//     return ways;
//     }
    
//     return findWays(change, 0);

// }


// Tabulation
const coinSum = (change, coins) => {
    let ways = Array(change + 1).fill(0);
    ways[0] = 1;

    for(let coin of coins){
        for(let amount = 1; amount <= change; amount++){
            if(amount >= coin){
                ways[amount] += ways[amount - coin]; 
            }
        }
    }

    return ways[change]
}






console.log(coinSum(6, [1, 5])); //2
console.log(coinSum(0, [2, 3, 4, 7]));  //1 
console.log(coinSum(9, [5])); //0
console.log(coinSum(7, [2, 4])); //0
console.log(coinSum(4, [1, 5, 10, 25]));  //1
console.log(coinSum(5, [1, 5, 10, 25]));  //2
console.log(coinSum(10, [1, 5, 10, 25]));  //4  
console.log(coinSum(25, [1, 5, 10, 25]));  //13  
console.log(coinSum(12, [2, 3, 7]));  //4
console.log(coinSum(7, [2, 3, 4, 7]));  //3
console.log(coinSum(100, [78,10,4,22,44,31,60,62,95,37,28,11,17,67,33,3,65,9,26,52,25,69,41,57,93,70,96,5,97,48,50,27,6,77,1,55,45,14,72,87,8,71,15,59])); //3850949


