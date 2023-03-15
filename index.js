
var customerName = 'bob';
var bestCustomer;


function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}


function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(newBestCustomer) {
    bestCustomer = newBestCustomer;
}
  

const leastFavoriteCustomer = 'initial least favorite customer';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new least favorite customer';
}
