let sum = 0;
let average = 0;


let student = {
    name : '장혁',
    scores : [90, 80, 80, 70, 20, 90],
    getAverage : function() {
        for (let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }
        average = sum / this.scores.length;

        return `${this.name}님의 평균은 ${average.toFixed(1)}점 입니다.`;
    },
    getGrage : function() {
        if (average >= 90) {
            return `${this.name}님의 학점은 S 입니다.`
        } else if (average >= 80) {
            return `${this.name}님의 학점은 A 입니다.`
        } else if (average >= 70) {
            return `${this.name}님의 학점은 B 입니다.`
        } else if (average >= 60) {
            return `${this.name}님의 학점은 C 입니다.`
        } else if (average >= 50) {
            return `${this.name}님의 학점은 D 입니다.`
        } else {
        return `${this.name}님의 학점은 F 입니다.`
        }
    },
}

console.log(student)
console.log(student.getAverage())
console.log(student.getGrage())