function fibNum(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibNum(n-1) + fibNum(n-2);
}
console.log(fibNum(0));
console.log(fibNum(1));
console.log(fibNum(4));
console.log(fibNum(8));

// función recursiva que devuelve un array con los números de Fibonacci hasta n
function fibsRec(n) {
    if (n === 0) {
        return [];
    }
    if (n === 1) {
        return [0];
    }
    return fibsRec(n-1).concat([fibNum(n-1)]);
}
console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(3));
console.log(fibsRec(8));