let student = {
    name : '장혁',
    age : 26,
    birthday : function() {
        this.age += 1;
        return `${this.name}님의 생일이 지나 ${this.age}살이 되었습니다.`;
    }
};

console.log(student);
console.log(student.birthday());
//console.log 안하고 student.birthday()해도 this.age += 1이 작동함.
console.log(student);