

//Brute-force

// const knapsack0or1 = (weights, values, capacity) => {
//     let start = Date.now();

//     function helperMethod(weights, values, capacity, length){
//         if(length <= 0 || capacity <= 0) return 0;
 
//         if(weights[length - 1] <= capacity){
        
//             return Math.max(values[length - 1] + helperMethod(weights, values, capacity - weights[length - 1], length - 1), helperMethod(weights, values, capacity, length - 1));
//         // console.log(memo);
//         }else if(weights[length - 1] > capacity){
        
//             return helperMethod(weights, values, capacity, length - 1);
//         // console.log(memo);
//         }
//     }

//     let optimumValue = helperMethod(weights, values, capacity, weights.length);
//     let end = Date.now()
//     console.log(` Start ${start}ms & End ${end} & time taken ${end - start} ms`);
//     return optimumValue;

// }


//Memoization First Way Best Way or Correct Way


// const knapsack0or1 = (weights, values, capacity) => {

//     // debugger
//     //let start = Date.now();
//     let length = weights.length;
//     let table = Array(length + 1).fill().map(() => Array(capacity + 1).fill(-1));
//     //console.log(table);
//     function helperMethod(weights, values, capacity, length){
//         if(length === 0 || capacity === 0) return 0;

//         if(table[length][capacity] !== -1) return table[length][capacity];

//         if(weights[length - 1] <= capacity){
//             table[length][capacity] = Math.max(values[length - 1] + helperMethod(weights, values, capacity - weights[length - 1], length - 1), helperMethod(weights, values, capacity, length - 1));
//             //console.log(table);
//             return table[length][capacity];
//         }else if(weights[length -1] > capacity){
//             table[length][capacity] = helperMethod(weights, values, capacity, length - 1);
//             //console.log(table);
//             return table[length][capacity];
//         }
        
//     }

//     let optimumValue = helperMethod(weights, values, capacity, length);

//     // let end = Date.now()
//     // console.log(` Start ${start}ms & End ${end} & time taken ${end - start} ms`);

//     return optimumValue;
// }

//Memoization Second Way
// const knapsack0or1 = (weights, values, capacity) => {
//     let start = Date.now();

//     function helperMethod(weights, values, capacity, length, memo = {}){
//         let key = capacity + ',' + length;

//         if(key in memo) return memo[key];
//         if(length <= 0 || capacity <= 0) return 0;
 
//         if(weights[length - 1] <= capacity){
        
//             memo[key] = Math.max(values[length - 1] + helperMethod(weights, values, capacity - weights[length - 1], length - 1, memo), helperMethod(weights, values, capacity, length - 1, memo));
//         // console.log(memo);
//             return memo[key]
//         }else if(weights[length - 1] > capacity){
        
//             memo[key] = helperMethod(weights, values, capacity, length - 1, memo);
//         // console.log(memo);
//             return memo[key];
//         }
//     }

//     let optimumValue = helperMethod(weights, values, capacity, weights.length);
//     let end = Date.now()
//     console.log(` Start ${start}ms & End ${end} & time taken ${end - start} ms`);
//     return optimumValue;

// }


// Tabulation

const knapsack0or1 = (weights, values, capacity) =>{
    let length = weights.length;
    let table = Array(length + 1).fill().map(() => Array(capacity + 1).fill(-1));
    for(let i = 0; i <= length; i++)
        table[i][0] = 0;
    for(let j = 0; j <= capacity; j++)
        table[0][j] = 0;
    //console.log(table);
    for(let row = 1; row <= length; row++){
        for(let col = 1; col <= capacity; col++){
            if(weights[row - 1] <= col){
                table[row][col] = Math.max(values[row-1] + table[row -1][col - weights[row - 1]], table[row - 1][col]);
            }else{
                table[row][col] = table[row - 1][col];
            }
        }
    }

    return table[length][capacity];

}  

console.log(knapsack0or1([2,3,6,7], [1,4,5,6], 10)); // 10

console.log(knapsack0or1([100,85, 55, 45, 130,190,100,25, 190,65, 100,45, 65, 50, 70, 40], [465,400,255,350,650,1000,455,100,1200,320,750,50, 550,100,600,255],  200)); // 1505

console.log(knapsack0or1([2, 3, 6, 9], [1, 4, 5, 6], 11)); //10

console.log(knapsack0or1([100,85, 55, 45, 130,190,100,25, 190,65, 100,45, 65, 50, 70, 40], [465, 400, 255, 350, 650, 1000,455, 100, 1200,320, 750, 50,  550, 100, 600, 240], 200)); //1500
console.log(knapsack0or1([2,70,30,69,100], [1,70,30,69,99], 100)); //100

console.log(knapsack0or1([1,70,30,69,100], [2,70,30,69,100], 100)); //101

console.log(knapsack0or1([2,70,30,69,100], [1,70,30,69,100], 0)); //0
