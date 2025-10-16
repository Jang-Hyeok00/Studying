let word = ["flower", "flow", "flowght"];

function commonPrefix(word) {
  let correctPrefix = "";
  let currentWord = word[0].length;

  for (let a = 1; a < word.length; a++) {
    if (currentWord > word[a].length) {
      currentWord = word[a].length;
    }
  }
  console.log(currentWord);

  for (let i = 0; i < currentWord; i++) {
    let currentPrefix = word[0][i];
    for (let j = 1; j < word.length; j++) {
      if (currentPrefix !== word[j][i]) {
        return correctPrefix;
      }
      /* for문이 끝날때 라는 의미를 가지는 코드라서 사용하는 의미가 없다
                if (j === word.length - 1) {
                
                correctPrefix += currentPrefix;
            } */

      /* 아래 return으로 대체
            if (currentWord === correctPrefix.length) {
                return correnctPrefix;
            } */
    }
    correctPrefix += currentPrefix; //첫 번째 주석을 이렇게 간소화 할 수 있다.
  }
  return correctPrefix; //위 if문의 예외 조건(가장 작은 단어를 모든 index가 포함하고 있을 때)을 처리
}

console.log(commonPrefix(word));
