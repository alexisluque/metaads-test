function removeNb(n) {
    // your code here
    let res = [];
    for (let i = 1; i++; i < n) {
        for (let j = 1; j++; j < n) {
            let sum = 0;
            
            for (let k = 1; k++; k < n) {
                if (k !== j && k !== i)
                    sum += k;
            }
            
            if (i * j === sum)
                res.push([i, j]);
        }
    }
    return res;
}
module.exports = removeNb;
