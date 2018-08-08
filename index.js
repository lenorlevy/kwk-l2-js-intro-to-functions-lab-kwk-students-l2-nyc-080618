// Write your code in this file!
function getUKTime() {
  var result = new Date().getHours() + 5;
  return result;
}

function discountTicket(oldPrice) {
  var newPrice = oldPrice * 0.8;
  return newPrice;
}

function tweetReply(name) {
  var tweet = "Hey " + name + ", thanks so much for the support!"
}
