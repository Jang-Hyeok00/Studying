let nums = [2, 7, 11, 15, 3, 6];
let target = 9;

function sumarr(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        console.log(`[ ${nums[i]}, ${nums[j]} ]`);
      }
    }
  }
}

sumarr(nums, target);

/** 2. function 안에 변수를 하나 선언 let = res = [];
 *     후 if문 안에 console을 찍지 말고
 *      results.push([nums[i], nums[j]]);
 *     를 작성 (.push로 result에 추가)
 *     마지막 for문이 끝나고 return res; 를 하고 function 밖에
 *      console.log(sumarr(nums, target));
 *     을 찍어도 됨
 *   
 * 2. 코드 결과
function sumarr(nums, target) {
    let results = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                results.push([nums[i], nums[j]]);
            }
        }
    }
  return results;
}

console.log(sumarr(nums, target));

 **/
