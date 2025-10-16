let number = [10, 20, 30, 40, 50];
let num_add = 0;
let average = 0;

for(let i = 0; i < number.length; i++) {
    num_add += number[i]
}

average = num_add / number.length

console.log(average)