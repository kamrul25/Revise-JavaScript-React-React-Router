// ------------------
// Encapsulation, private & public
// ----------------------

class BankAccount{
    #balance; // private propert (encapsulation)
    accountHolder; //public property
    static bankName = "Kamrul Bank"; // Static propert (Shared across all instance)

    constructor(accountHolder, initialBalance){
        this.accountHolder = accountHolder;
        this.#balance = initialBalance;
    }

    //Public method to access private balance
    getBalance(){
        return this.#balance;
    }
    
    deposit(amount){
        if (amount > 0) {
            this.#balance += amount;
            console.log(`${this.accountHolder} deposited $${amount}`);
        }
    }

    withdraw(amount){
        if (amount <= this.#balance) {
            console.log(`${this.accountHolder} withdraw $${amount}`);
        }else{
            console.log(`Insufficient funds for ${this.accountHolder}.`);
        }
    }

    static getBankName(){
        return BankAccount.bankName;
    }
}

// Example usage
const john = new BankAccount("John", 500);
console.log(john.getBalance()); // 500
john.deposit(200);
console.log(john.getBalance()); // 700
console.log(BankAccount.getBankName()); // Kamrul Bank

/* -----------------------
-- Inheritance
--------------------------*/

class SavingsAccount extends BankAccount{
    #interestRate; //private property

    constructor(accountHolder, initialBalance, interestRate){
        super(accountHolder, initialBalance) ; // inherit parent constructor
        this.#interestRate = interestRate;
    }

    addInterest(){
        const interest = this.getBalance() * this.#interestRate / 100;
        this.deposit(interest);
        console.log(`Inerest added: $${interest}`);
    }
}

// Example of inheritance instance
const hasan = new SavingsAccount("Hasan", 1000, 5);
hasan.addInterest(); // Adds 5% interest 