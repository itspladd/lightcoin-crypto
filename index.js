class Account {

  constructor(username) {
    this.username = username;
    this._balance = 0;
    this.transactions = [];
  }

  get balance() {
    return Number(this.transactions
      .reduce((sum, next) => sum + next.value, 0)
      .toFixed(2));
  }

  set balance(amt) {
    this._balance = amt;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

  logTransactions() {
    this.transactions.forEach(trans => console.log(`**${trans.constructor.name}: $${trans.value}`));
  }
}

class Transaction {

  constructor(amount, account) {
    this._value = amount;
    this.account = account;
  }

  commit() {
    if (this.isAllowed()) {
      this.account.addTransaction(this);
    } else {
      console.log("Transaction not allowed. Not enough money in account.");
      console.log("Balance: ", this.account.balance);
      console.log("Requested transaction: ", this.constructor.name, this.value);
    }
  }

  isAllowed() {
    return this.account.balance + this.value >= 0;
  }

  set value(val) {
    this._value = val;
  }

}

class Withdrawal extends Transaction  {

  get value() {
    return -this._value;
  }
}

class Deposit extends Transaction {


  get value() {
    return this._value;
  }
}




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("itspladd");

const t0 = new Deposit(70, myAccount);
t0.commit();
//console.log('Transaction 0:', t0);

const t1 = new Withdrawal(50, myAccount);
t1.commit();
//console.log('Transaction 1:', t1);

const t2 = new Withdrawal(20, myAccount);
t2.commit();
//console.log('Transaction 2:', t2);

const t3 = new Deposit(100, myAccount);
t3.commit();
//onsole.log('Transaction 3:', t3);

const t4 = new Withdrawal(200, myAccount);
t4.commit();
//console.log('Transaction 4:', t4);

console.log(`************************************`);
console.log(`*****All transactions completed*****`);
console.log(`************************************`);

console.log('Final balance:', myAccount.balance);
console.log('Transaction history:');
myAccount.logTransactions();
