// Write your code in this file!
function getUKTime() {
  var result = new Date().getHours() + 5;
  return result;
}

getUKTime();

function discountTicket(oldPrice) {
  var newPrice = oldPrice * 0.8;
  return newPrice;
}

discountTicket