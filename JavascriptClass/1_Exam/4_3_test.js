let account = {
    money : 0,
    deposit : function(money) {
        this.money += money
        return `계좌에 ${money}원이 입금되어 ${this.money}원이 되었습니다.`
    },
    withdraw : function(money) {
        if (this.money >= money) {
            this.money -= money
            return `계좌에 ${money}원이 출금되어 ${this.money}원이 되었습니다.`
        } else {
            return '오류! : 잔액이 부족합니다!';
        }
    }
};

console.log(account);
console.log(account.deposit(30000));
console.log(account);
console.log(account.withdraw(20000));
console.log(account);
console.log(account.withdraw(50000));
