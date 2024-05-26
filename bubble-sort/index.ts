export const sorting = (n: Array<number>): Array<number> => {
    let len = n.length;
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len - i - 1; j++) {
            if(n[j] > n[j + 1]) {
                let aux = n[j];
                n[j] = n[j + 1]
                n[j + 1] = aux;
            }
        }
    }
    return n;
}

console.log(sorting([100,87,22,42]));