let construct2DArray =(original, m, n) => {
    // Step 1: If the conversion is not possible, return an empty array
    if (m * n !== original.length) {
        return [];
    }

    // Step 2: Construct the 2D array
    const result = [];
    for (let i = 0; i < original.length; i += n) {
        result.push(original.slice(i, i + n));
    }

    return result;
}

// Example 1
console.log(construct2DArray([1, 2, 3, 4], 2, 2));  // Output: [[1, 2], [3, 4]]

// Example 2
console.log(construct2DArray([1, 2, 3], 1, 3));     // Output: [[1, 2, 3]]

// Example 3
console.log(construct2DArray([1, 2], 1, 1));        // Output: []
