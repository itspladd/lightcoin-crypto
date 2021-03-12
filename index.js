class Account {

  constructor(username) {
    this.username = username;
    this._balance = 0;
  }

  get balance() {
    return Number(this._balance.toFixed(2));
  }

  set balance(amt) {
    this._balance = amt;
  }
}

class Transaction {

  constructor(amount, account) {
    this._value = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.value;
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

const t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

const t2 = new Withdrawal(9.99, myAccount);
t2.commit();
console.log('Transaction 2:', t2);

const t3 = new Deposit(100.10, myAccount);
t3.commit();
console.log('Transaction 3:', t3);

console.log('Balance:', myAccount.balance);
