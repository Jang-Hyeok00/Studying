let Library = {
    books : ['노인과 바다', '동물농장', '셰익스피어의 비극', '레미제라블'],
    borrowed : [],
    addBook : function (add) {
        this.books.push(add);
        return `도서관에 ${add} 책이 추가되었습니다.`;
    },
    findBook : function (search) {

        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i] === search ) {
                return `${search} 책이 도서관에 있습니다.`
            }
        }
        return `${search} 책이 도서관에 없습니다.`
    },
    borrowBook : function (borrow) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i] === borrow) {
                for (let j = 0; j < this.borrowed.length; j++) {
                    if (this.borrowed[j] === borrow) {
                        return `${borrow} 책은 이미 대출중입니다.`
                    }
                }
                this.borrowed.push(borrow)
                return `${borrow} 책을 대출했습니다.`
            }
        }
        return `${borrow} 책은 도서관에 없습니다.`
    },
    returnBook : function(reduce) {
        for (let i = 0; i < this.borrowed.length; i++) {
            if (this.borrowed[i] === reduce) {
                this.borrowed.pop(reduce)
                return `${reduce} 책을 반납했습니다.`
            }
        }
        return `${reduce} 책은 대출되지 않았습니다.`
    }
}


console.log(Library)
console.log(Library.findBook('어린왕자'))

console.log(Library.addBook('어린왕자'))
console.log(Library)
console.log(Library.findBook('어린왕자'))
console.log(Library.findBook('자바스크립트'))

console.log(Library.borrowBook('노인과 바다'))
console.log(Library.borrowBook('어린왕자'))
console.log(Library)
console.log(Library.borrowBook('자바스크립트'))
console.log(Library.borrowBook('어린왕자'))


console.log(Library.returnBook('어린왕자'))
console.log(Library.returnBook('어린왕자'))
console.log(Library)
