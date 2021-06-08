//  this problem states that return the numbers of possible combination of number or numbers that is equivalent to the target number. There can be repeitation of number in the array and each set of combination that you have to make there can be no repeitation. It's a special problem of 0,1 Knapsack Problem.



//rute-Force
// const countSubsetSum = (numbers, target, index = numbers.length - 1) => {
//     if(target === 0) return 1;
//     if(index < 0 || target < 0) return 0;
//     let count = 0;
//     // if(numbers[index] <= target){
//     //     count += countSubsetSum(numbers, target - numbers[index], index - 1) + countSubsetSum(numbers, target, index - 1);
//     // }else{
//     //     count += countSubsetSum(numbers, target, index - 1);
//     // }
//     if(numbers[index] <= target){
//         count += countSubsetSum(numbers, target - numbers[index], index - 1);
//     }
//     count += countSubsetSum(numbers, target, index - 1);
    

//     return count;
// }

//Memoization
// const countSubsetSum = (numbers, target) =>{
//     let length = numbers.length;
//     let table = Array(length + 1).fill().map(() => Array(target + 1).fill(-1));
    
//     function helperMethod(numbers, target, length, table){
//         if(target === 0) return 1;
//         if(length === 0 || target < 0) return 0;
    
//         if(table[length][target] !== -1) return table[length][target];
        
//         let count = 0;
//         if(numbers[length - 1] <= target){
//             count += helperMethod(numbers, target - numbers[length - 1], length -1, table);
//         }
//         count += helperMethod(numbers, target, length - 1, table);

//         table[length][target] = count;
//         return table[length][target];
//     }

//     let optimumValue = helperMethod(numbers, target, length, table);

//     return optimumValue;
// }


//Tabulation
const countSubsetSum = (numbers, target) =>{
    let length = numbers.length;
    let table = Array(length + 1).fill().map(() => Array(target + 1).fill(0));
    for(let i = 0; i <= length; i++){
        table[i][0] = 1;
    }

    for(let row = 1; row <= length; row++){
        for(let col = 1; col <= target; col++){
            if(numbers[row -1] <= col){
                table[row][col] = table[row - 1][col - numbers[row - 1]] + table[row -1][col];
            }else{
                table[row][col] = table[row - 1][col];
            }
        }
    }

    return table[length][target];
}


console.log(countSubsetSum([2, 3, 5, 6, 8, 10], 10));//3
console.log(countSubsetSum([1, 2, 3, 3], 6));//3
console.log(countSubsetSum([1, 1, 1, 1], 1));//4
console.log(countSubsetSum([17, 2, 8, 34, 4, 42, 6, 3, 7, 15, 14, 9], 20));// 10