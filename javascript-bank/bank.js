/* exported Bank */
/* Want to create a function that creates object for bank with properties of nextAccountNumber and an empty array for account */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

/* Want to create a prototype method to open a new account with the parameters (holder, balance)
1) Set a condition for if balance is greater than 0 and is an integer
1.1) If condition is true, create a new Account with nextaccountnumber and holder as parameter
1.2) Increment nextAccountNumber
1.3) Run the deposit method of the account object with balance argument
1.4) Push the new account into banks account
2) If the condition was never met, return null */
Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && balance % 1 === 0) {
    var accounts = new Account(this.nextAccountNumber, holder);
    this.nextAccountNumber++;
    accounts.deposit(balance);
    this.accounts.push(accounts);
    return accounts.number;
  }
  return null;
};

/* Want to create a prototype method to getAccount based on input number
1) Loop thru every account inside bank.accounts
1.1) Set condition if the account.number is equal to number
1.2) return the account that matches
2) If loop never found a match, return null */
Bank.prototype.getAccount = function (number) {
  for (var accountsIndex = 0; accountsIndex < this.accounts.length; accountsIndex++) {
    if (this.accounts[accountsIndex].number === number) {
      return this.accounts[accountsIndex];
    }
  }
  return null;
};

/* Want to create a prototype method to get total asset of the bank
1) Define a new variable called total and assign 0 to it
2) Run a loop through every account in the bank
2.1) Call the getBalance method of the account at index and add and assign the value to total
3) Once loop complete return total variable */
Bank.prototype.getTotalAssets = function () {
  var total = 0;

  for (var accIndex = 0; accIndex < this.accounts.length; accIndex++) {
    total += this.accounts[accIndex].getBalance();
  }
  return total;
};
