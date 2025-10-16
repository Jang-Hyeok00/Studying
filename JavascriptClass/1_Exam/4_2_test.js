let book = {
    name : '동물농장',
    price : 50000,
    getFinPrice : function() {
        this.price += ( this.price * 0.1 );
        return '세금 10%가 추가되었습니다.';
    }
};

console.log(book);
console.log(book.getFinPrice());
console.log(book);