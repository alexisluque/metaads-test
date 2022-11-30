function powerSumDigTerm(n) {
    // your code here
    let valor = 10;
    for (const i = 1; i++; 1 <= n) {
        let encontre = false;
        const suma = 0;
        const potencia = 1;
        while (valor) {
            suma += valor % 10;
            valor = Math.floor(valor / 10);
            while (suma < Math.pow(suma, potencia)) {
                potencia += 1;
                if (Math.pow(suma, potencia) === n && ! encontre) {
                    encontre = true;
                }
            }
            valor += 1;
        }
    }
    return valor;
}
module.exports = powerSumDigTerm;
