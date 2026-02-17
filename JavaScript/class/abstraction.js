/************************
 ********* Abstraction******
 **********************
*/

// Parent class or super class
class  Account {
    constructor(accountHolder){
        if (new.target === Account) {
            throw new Error("Can't instatiate abstract class Accont directly.");
        }
        this.accountHolder = accountHolder;
    }

    calculateInterest(){
        throw new Error("calculateInterest() must be implemented by subclass.");
    }
}

//subclass or child class

class FixedDepositAccount extends Account {
    constructor(accountHolder, balance, interestRate){
        super(accountHolder);
        this.balance = balance;
        this.interestRate = interestRate;
    }

    calculateInterest(){
        return (this.balance * this.interestRate) / 100;
    }
}

const fixedDeposit = new FixedDepositAccount("Kamrul Hasan Jaman", 123435, 7);
console.log(`Interest Rate of the balance is : $${fixedDeposit.calculateInterest()}`);
