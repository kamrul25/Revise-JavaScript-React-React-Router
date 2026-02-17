// ===============================
//  Encapsulation, Private & Public
// ===============================

class BankAccount {
  #balance;           // Private property (encapsulation)
  accountHolder;      // Public property

  static bankName = "Global Bank"; // Static property (shared across all instances)

  constructor(accountHolder, initialBalance) {
    this.accountHolder = accountHolder;
    this.#balance = initialBalance;
  }

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`${this.accountHolder} deposited $${amount}.`);
    }
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`${this.accountHolder} withdrew $${amount}.`);
    } else {
      console.log(`Insufficient funds for ${this.accountHolder}.`);
    }
  }

  static getBankName() {
    return BankAccount.bankName;
  }
}

// ===== Get user input from browser =====

// Prompt user for account details
const name = prompt("Enter account holder name:");
const balanceInput = prompt("Enter initial balance:");

// Convert input to number
const initialBalance = Number(balanceInput);

// Create account with user input
const userAccount = new BankAccount(name, initialBalance);

console.log(`Account created for ${userAccount.accountHolder}.`);
console.log(`Initial balance: $${userAccount.getBalance()}`);
console.log(`Bank: ${BankAccount.getBankName()}`);

// Example deposit 
const depositAmount = Number(prompt("Enter amount to deposit:"));
userAccount.deposit(depositAmount);
console.log(`New balance: $${userAccount.getBalance()}`);

// Example  withdraw
const withdrawAmount = Number(prompt("Enter amount to withdraw:"));
userAccount.withdraw(withdrawAmount);
console.log(`Final balance: $${userAccount.getBalance()}`);
