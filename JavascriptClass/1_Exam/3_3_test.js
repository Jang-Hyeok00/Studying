let text = 'The quick brown fox jumped over the lazy dog'

function longest(text) {
    let currentWord = '';
    let longestWord = '';

    for (let i = 0; i < text.length; i++) {
        if (text[i] !== ' ') {
            currentWord += text[i];
        } else {
            if (currentWord.length > longestWord.length) {
                longestWord = currentWord;
            }

            currentWord = '';
        }
    }

    if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
    }
    return longestWord;
}

console.log(longest(text));

// currentWord += text[i]; 문자에 + 하면 그 옆에 같이 붙어 나온다는 걸 깨달았습니다.
// 후에 친구들에게 배운 사실. longestWord.length를 계속 주면 for문을 돌릴때마다 length를 계산해야한다고 한다.
// 이는 처리 속도가 느려지고 컴퓨터에도 더 부담이 되는 구조라고 한다.
// 따라서 더 빨리 처리하기 위해서 longestWorld.length를 담는 변수를 하나 만들면 그게 더 좋다고 한다.
// 이걸 시간 복잡도라고 하는 것 같다.