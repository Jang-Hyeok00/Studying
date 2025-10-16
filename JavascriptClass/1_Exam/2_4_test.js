let a = 'hello world';
let l_num = 0;
let L = 'l'


for (let i = 0; i < a.length; i++) {
    if (a[i] == L) {
        l_num += 1;
    }
}
console.log(l_num)