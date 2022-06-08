/* exported Account */

/* Want to create an OOP account object for acount creation with number, holder, and transaction properties
1) this.number, holder set to number and holder
2) Empty array for transactions */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

/* Want to create a prototype deposit method for account object
1) Only want to push transaction if amount is greater than 0 and not a decimal so set conditional if
1.1) in if statement, push a new Transaction with deposit as type and amount as amount
1.2) Return true because condition went thru
2) return false if the condition was not met */
Account.prototype.deposit = function (amount) {
  if (amount > 0 && amount % 1 === 0) {
    this.transactions.push(new Transaction('deposit', amount));
    return true;
  }
  return false;
};

/* Want to create a prototype withdrawal method for account object
1) Same as deposit but type is different */
Account.prototype.withdraw = function (amount) {
  if (amount > 0 && amount % 1 === 0) {
    this.transactions.push(new Transaction('withdrawal', amount));
    return true;
  }
  return false;
};

/* Want to create a prototype method for getBalance that will get the total balance of the account once all deposits and withdrawals are added or subbtracted up
1) Set a new variable balance to 0
2) Run a loop through every single transaction in account
2.1) If condition for if type is deposit, want to add it to balance
2.2) if condition for if type is withdrawal, want to subtract it from balance
3) Want to return resulting variable balance */
Account.prototype.getBalance = function () {
  var balance = 0;
  for (var transactionsIndex = 0; transactionsIndex < this.transactions.length; transactionsIndex++) {
    if (this.transactions[transactionsIndex].type === 'deposit') {
      balance += this.transactions[transactionsIndex].amount;
    }
    if (this.transactions[transactionsIndex].type === 'withdrawal') {
      balance -= this.transactions[transactionsIndex].amount;
    }
  }
  return balance;
};
