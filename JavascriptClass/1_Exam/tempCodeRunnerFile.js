let num = 7;

for (let i = 1; i <= num; i++) {
    let output = '';

    for (let j = 0; j < num - i; j++) {
        output += ' ';
    }

    for (let k = 0; k < 2 * i - 1; k++) {
        output += '*';
    }

    console.log(output);
}