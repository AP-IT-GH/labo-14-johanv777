let sumArray = [1, 2, 3, 4, 5];

console.log("de som van de getallen is: " + giveSum(sumArray));

function giveSum(inputArray) {
    let returnSum = 0;
    for (let i = 0; i < inputArray.length; i++) {
        returnSum = returnSum + inputArray[i];
    }
    return returnSum;
}

