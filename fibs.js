function fibs(n) {

    if (n === 0) {
        return [];
    }

    if (n === 1) {
        return [0];

    }

    const resultado = [0, 1];
    for (let i = 2; i < n; i++) {
        const siguiente = resultado[resultado.length - 1] + resultado[resultado.length - 2];
        resultado.push(siguiente);

    }
    return resultado;
}
console.log(fibs(8));
console.log(fibs(3));
console.log(fibs(1));
console.log(fibs(0));