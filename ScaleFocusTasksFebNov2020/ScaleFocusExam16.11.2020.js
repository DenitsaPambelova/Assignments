// function getMinimumMoves(arr) {
//     let counter = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== i + 1) {
//             let temp = arr[i]
//             let idx = arr.indexOf(i + 1)
//             arr[i] = arr[idx]
//             arr[idx] = temp
//             counter++
//         }
//     }
//     return counter;
//
// }

// most optimized solution with most test coverage  /11 out of 14 test cases/ in hackerrank, timeout fot test with array size of 100 000 elements:
function minimumSwaps(arr) {
    let swapCount = 0;
    for (let index = 0; index < arr.length; index++) {
        const currentInt = arr[index];
        const position = index + 1;
        if (currentInt !== position) {
            let indexToSwap
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === position) {
                    indexToSwap = i;
                    break
                }
            }
            arr[indexToSwap] = currentInt;
            arr[index] = position;
            swapCount = swapCount + 1;
        }
    }
    return swapCount;
}
console.log(minimumSwaps([2,5,7,2,9,10,12,15,0,4,8]))