const text = 'aabbbbbcccccaaaaaaa'

function calculate(text) {
    let text_num = 1;
    let text_str = '';
    for (let i = 0; i <= text.length; i++) {
        if (text[i] == text[i + 1]) {
            text_num += 1;
        } else /* if (text[i] != text[i + 1]) */ {
            text_str = `${text_str}${text[i]}${text_num}`
            text_num = 1;
        }
        if (text.length < text_str.length) {
            return text;
        }
    }
    return text_str;
}

console.log(calculate(text));