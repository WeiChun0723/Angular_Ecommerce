interface CreditCard {
    borrowMoney():number;
}

interface DebitCard {
    transfer(accountnumber:string, amount:number):number;
}

interface AtmCard {
    withdraw(amount:number):number;
}

class BankCard implements CreditCard, DebitCard, AtmCard {
    borrowMoney(): number {
        throw new Error("Method not implemented.");
    }
    transfer(accountnumber: string, amount: number): number {
        throw new Error("Method not implemented.");
    }
    withdraw(amount: number): number {
        throw new Error("Method not implemented.");
    }
}

function doBorrowMoney():CreditCard {
    return new BankCard();
}

let myCard:CreditCard = doBorrowMoney();
myCard.borrowMoney();

class Human {}
class Male extends Human {}
class Female extends Human {}

function getGender(sex:string):(Male|Female) {
    if (sex == "M") return new Male()
    return new Female()
}

// polymorphism
let human:Human = getGender("F");
let human01:(Male | Female) = getGender("F");

/*
@AtmCard
@DebitCard
@CreditCard
class BankCard {}
*/