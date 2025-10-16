const student = {
    classlist : [ 'C', 'Python', 'Linux'],
    classAdd : function (add) {
        this.classlist.push(add)
        return `새롭게 수강하는 과목 ${add}가 추가되었습니다.`
    },
    currentClass : function() {
        return `현재 수강하는 과목은 ${this.classlist}입니다.`;
    },
    
}

console.log(student.currentClass());

console.log(student.classAdd('javascript'))

console.log(student.currentClass());