let average
let scoreSum = 0;

let student = {
	name: '장혁',
	scores: [90, 80, 80, 95, 100],
	
	getAverage : function () {
		
		for (let i of this.scores) {
			scoreSum += i
		}

		average = scoreSum / this.scores.length
		return `${this.name}님의 평균 점수는 ${average.toFixed(1)}입니다.`;
	},
	
	getGrade : function () {
		if (average >= 90) {
			return `${this.name}님의 학점은 "A"입니다.`;
        } else if (average >= 80) {
			return `${this.name}님의 학점은 "B"입니다.`;
		} else if (average >= 70) {
			return `${this.name}님의 학점은 "C"입니다.`;
        } else if (average >= 60) {
			return `${this.name}님의 학점은 "D"입니다.`;
		} else {
			return `${this.name}님의 학점은 "F"입니다.`;
	    }
    }
};

console.log(student);
console.log(student.getAverage());
console.log(student.getGrade());