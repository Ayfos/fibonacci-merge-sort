// PRIMERO: función merge (independiente)
function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

// SEGUNDO: función mergeSort (la principal)
function mergeSort(array) {
    // Caso base
    if (array.length <= 1) {
        return array;
    }

    // Dividir
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    // Ordenar cada mitad recursivamente
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // Fusionar
    return merge(sortedLeft, sortedRight);
}
console.log(mergeSort([]));               // []
console.log(mergeSort([73]));             // [73]
console.log(mergeSort([1, 2, 3, 4, 5]));  // [1, 2, 3, 4, 5]
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));  // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110]));  // [79, 100, 105, 110]