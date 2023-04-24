function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    let oddIndicesArr = [];
    for (i = 1; i < arr.length; i += 2) {
      oddIndicesArr = oddIndicesArr.concat(arr[i]);
    }
    return oddIndicesArr;
  }
function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    let oddIndicesArr = [];
    for (i = arr.length - 1 ; i >= 1; i--) {
        if (i % 2 !== 0){
            oddIndicesArr = oddIndicesArr.concat(arr[i]);
        }
    }
    return oddIndicesArr;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    let oddIndicesArr = [];
    for (i = 1; i < arr.length; i*=2) {
            oddIndicesArr = oddIndicesArr.concat(arr[i])
    }
    return oddIndicesArr;
}


function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    let oddIndicesArr = [];
    for (i = 1; i < arr.length; i*=n) {
            oddIndicesArr = oddIndicesArr.concat(arr[i])
    }
    return oddIndicesArr;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    let oddIndicesArr = [];
    let roundNumber = Math.round(arr.length / 2 - 1);
    for (i = 0; i <= roundNumber; i++) {
      oddIndicesArr = oddIndicesArr.concat(arr[i]);
    }
    return oddIndicesArr;
  }

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    let oddIndicesArr = [];
    let floorNumber = Math.round(arr.length / 2 - 1);
    for (i = arr.length - 1; i > floorNumber; i--) {
      oddIndicesArr = oddIndicesArr.concat(arr[i]);
    }
    return oddIndicesArr;
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
