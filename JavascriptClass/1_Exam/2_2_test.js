// let arr = [10, 45, 22, 98, 67];
// let i = 0;

// for (let j = 1; j < arr.length; j++) {
//     if (arr[i] < arr[j]) {
//         i = j;
//     }
// }
// console.log(arr[i]);


let arr = [10, 45, 22, 98, 67];
let k = arr[0];

for (let j = 1; j < arr.length; j++) {
    if (k < arr[j]) {
        k = arr[j];
    }
}
console.log(k);