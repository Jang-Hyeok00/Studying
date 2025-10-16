let arr = [20, 30, 50, 70, 80, 10, 90];

for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
        if (arr[i] + arr[j] == 100) {
            console.log(`${arr[i]}, ${arr[j]}`);
        } 
    }
}