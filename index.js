class Account {

  constructor(username) {
    this.username = username;
    this.balance = 0;
  }

}

class Withdrawal {

  constructor(amount) {
    this.amount = amount;
  }

/*   commit() {
    balance -= this.amount;
  } */

}

class Deposit {

  constructor(amount) {
    this.amount = amount;
  }

/*   commit() {
    balance += this.amount;
  } */

}



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("itspladd");

/* const t1 = new Withdrawal(50.25);
t1.commit();
console.log('Transaction 1:', t1);

const t2 = new Withdrawal(9.99);
t2.commit();
console.log('Transaction 2:', t2);

const t3 = new Deposit(100.10);
t3.commit();
console.log('Transaction 3:', t3); */

console.log('Balance:', myAccount.balance);
