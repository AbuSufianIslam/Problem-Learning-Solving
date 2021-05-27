// this problem states that whether there is a set of number or numbers that is equivalent to the target number. There can be repeitation number in the numbers array and each set of combination that you have to make there can be no repeitation. It's a special problem of 0,1 Knapsack Problem.



//Brute-force
// const subsetSum = (numbers, target, length = numbers.length) =>{
//     if(target === 0) return true;
//     if(length < 0 || target < 0) return false;

//     if(numbers[length - 1] <= target){
//         return subsetSum(numbers, target - numbers[length - 1], length - 1) || subsetSum(numbers, target, length - 1);
//     }else{
//         return subsetSum(numbers, target, length - 1);
//     }
// }

//Memoization

const subsetSum = (numbers, target) => {
    let length = numbers.length;
    let table = Array(length + 1).fill().map(() => Array(target + 1).fill(-1));

    function helperMethod(numbers, target, length, table){
        if(target === 0) return true;

        if(length < 0 || target < 0) return false;

        if(table[length][target] !== -1) return table[length][target];

        if(numbers[length - 1] <= target){
            table[length][target] = helperMethod(numbers, target - numbers[length - 1], length - 1, table) || helperMethod(numbers, target, length -1, table);
        }else{
            table[length][target] = helperMethod(numbers, target, length -1, table);
        }
        

        return table[length][target];
    }

    return helperMethod(numbers, target, length, table);
}



// lets calculate time
// const startTime = process.hrtime()
// const res = subset_sum(arr, sum)
// const diff = process.hrtime(startTime)

// console.log(`Result:`, res)
// console.log(`Time: ${ (diff[0] * 1e9 + diff[1]) / 1000000} ms`)

console.log(subsetSum([ 2, 9, 10, 1, 99, 3], 4));//true
console.log(subsetSum([ 2, 9, 10, 1, 99, 3], 7));//false
console.log(subsetSum([17, 2, 8, 34, 4, 0.5, 42, 6, 3, 7, 15, 14, 9], 20));//true
