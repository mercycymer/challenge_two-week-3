class BankAccount {
    constructor( accountname,type,date,balance,acctNum,active) {
        // your code here
        this.acountName = accountname;
        this.type = type;
        this.date = date;
        this.balance=balance;
        this.acountNum = acctNum;
        this.active = active;
    }
    open(acountName,acountNum) {
        // your code here
        const openAcc = [
            this.acountName = acountName,
            this.type = ' Type of Account :savings account',
            this.date = new Date().toString() + 'is the date the account was opened ',
            this.balance = 'the current balance is :'+ 0,
            this.acountNum = acountNum,
            this.active = 'is this account active?' + true +''+'and'

        ]
        return  `${openAcc} thank you our dear customer for opening up an 
        account in our bank `;
    }

    getBalance() {
        // your code here
        const balance = [ 
            this.acountName,
            this.type,
            this.date,
            this.balance,
            this.acountNum ]
        return  ` your account balance is ${balance} `;
    }

   

    deposit(credit) {
        // your code here
        const depositAmt = [
            this.acountName,
            this.type,
            this.date,
            this.balance = this.balance + credit,
            this.acountNum
        ]
        return  `${depositAmt} thank you for making a deposit transaction `;

    }

    withdraw(debit) {
        // your code here
        const withdrawAmt = [
            this.acountName,
            this.type,
            this.date,
            this.balance = this.balance - debit,
            this.acountNum
        ]
        return  `${withdrawAmt} thank you for making a withdraw transaction`;
    }

    close(){
        const closeAcc = [
            this.acountName,
            this.type,
            this.date = new Date().toString(),
            this.balance,
            this.acountNum,
            this.active = false
        ]
        return  `${closeAcc} this account has been closed `;

    }
}
let user1 = new BankAccount();
let user2 = new BankAccount();
console.log(user1.open('Account Name: mercy','Account Number :9084645536'));
console.log(user1.getBalance());
console.log('--------------------');
console.log(user1.deposit(5000));
console.log(user1.getBalance());
console.log('--------------------');
console.log(user1.withdraw(2000));
console.log(user1.getBalance());
console.log('--------------------');
console.log(user1.close());
console.log('--------------------');
console.log('--------------------');
console.log('--------------------');
console.log(user2.open('Aggie','7363656522772'));
console.log(user2.getBalance());
console.log('--------------------');
console.log(user2.deposit(5000));
console.log(user2.getBalance());
console.log('--------------------');
console.log(user2.withdraw(2000));
console.log(user2.getBalance());
console.log('--------------------');
console.log(user2.close());