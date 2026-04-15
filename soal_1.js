function sumArray(arr, int) {
    const pairs = [];
    const seen = [];

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        const complement = int - num;
        if (seen.includes(complement)) {
            pairs.push([complement, num]);
        }
        seen.push(num);
    }
    return pairs;

}


// test cases
console.log(sumArray([2, 1, 4, 3], 5));
console.log(sumArray([1, 8, 10, 3], 11));
console.log(sumArray([1, -1, 2, -2, 3, -3], 0));
console.log(sumArray([1, 1, 1, 1], 2));
console.log(sumArray([1, 2, 3, 4, 5], 10));



