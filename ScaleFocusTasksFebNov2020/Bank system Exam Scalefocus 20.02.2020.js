function solution(){

class BankAccount {
    constructor(accountNum, owner, curr_balance, currency) {
        this.accountNum = accountNum;
        this.owner = owner;
        this.curr_balance = curr_balance;
        this.currency = currency;
        this.account = 0;
    }

    current_balance() {
        console.log(`Your current balance is ${this.curr_balance.toFixed(2)} ${this.currency}`)
        return this.curr_balance;
    }

    deposit(amount) {

            this.account += amount;
            this.curr_balance += amount

        return `Successfully deposited ${amount} ${this.currency}`
    }

    withdraw(amount) {
         if (amount<=this.curr_balance) {
            this.account -= amount;
            this.curr_balance -= amount;
            return `Successfully drawn ${amount.toFixed(2)} ${this.currency}`
         }
         return `Not enough balance - available: ${this.curr_balance}  Asking: ${amount}`

    }
    pay (amount){
        if (amount<=this.curr_balance) {
            this.account -= amount;
            this.curr_balance -= amount
        }

        //console.log(`Successful payment for ${a} ${super.currency}`);
        return `Successful payment for ${amount} ${this.currency}`
    }

    account_info() {
        return this.account
    }
    decrease_balance(a){
        this.curr_balance-=a;
        return this.curr_balance
    }


}

 class BankCard extends BankAccount {
    constructor(card_number, card_type, expire_date,curr_balance,currency) {
        super(curr_balance,currency);
        this.card_number = card_number;
        this.card_type = card_type;
        this.expire_date = expire_date;

    }
    check_if_expired(cn) {
        if (cn===this.card_number) {
            let isExpired;
            let expirationDate = new Date(this.expire_date);
            let currentDate = new Date();

            if (expirationDate > currentDate) {
                isExpired = false
                return `Checking if card has expired: ${isExpired}`;    //not expired


            } else if (expirationDate < currentDate) {
                isExpired = true;
                return `Checking if card has expired: ${isExpired}`;
            }
        }
    }
    withdraw_card(a){
        return super.withdraw(a)
    }
    deposit_card(a){
         return super.deposit(a)
     }


}
class Payment extends BankCard{
    super(owner){
        this.owner=owner
    }
    createCard (name){
        if (name===this.owner){

        }
    }
}

    return  {BankAccount,BankCard, Payment}
}

solution();
let classes = solution();
let bank = new classes.BankAccount(123456789,"Dimitar Tomov",1000.50,"USD");

console.log(bank.current_balance());
console.log(bank.deposit(200))
console.log(bank.withdraw(300));
console.log(bank.current_balance());
console.log(bank.pay(50))
console.log(bank.current_balance());
let card=new classes.BankCard(1234567891234567,"VISA","2020-11-15")
console.log(card.check_if_expired(1234567891234567))
console.log(card.withdraw_card(100))
console.log(card.deposit_card(100))
// // console.log(card.card_info());
// console.log(bank.current_balance());
// console.log(card.deposit(200))
// console.log(bank.current_balance());

// console.log(bank.current_balance());

// console.log(hall.toString());
// console.log(hall.close());
// //--------------------------------------------------------------------------------------
// let movieHall = new classes.MovieTheater(10, "Europe", "10m");
// console.log(movieHall.hallEvent("Top Gun: Maverick"));
// console.log(movieHall.toString());
// //--------------------------------------------------------------------------------------
// let concert = new classes.ConcertHall(5000, "Diamond");
// console.log(concert.hallEvent("The Chromatica Ball", ["LADY GAGA"]));
// console.log(concert.toString());
// console.log(concert.close());
// console.log(concert.toString());
//
// let acc=new BankAccount();
// 123456789  //account number
// Dimitar Tomov //owner name
// 1000.50  - current balance
// USD   - currency
// 1234567891234567   -card number
// 123 -security code;
// VISA- type of card
// 2020-02-29   //expire date

