var pricePerAvo = require('../pricePerAvo');
var cheapestDeal = require('../cheapestDeal');
var mostExpensiveDeal = require('../mostExpensiveDeal');
var averagePrice = require('../averagePrice');
var assert = require('assert');
var deals = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50.";


var message = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50";
var message1 = message.replace(/for R/g, ':').replace(/ /g, '').split(',');
var message2 = [];
message1.forEach(function(item){
message2.push(item.split(':'));
});
//console.log(message2);
var deals = message2.map(function(deal){
return {price:deal[[1]],qty:deal[[0]]};
});


describe('deals data', function(){
  it('should return the price per avo for each deal', function(){
    var b = ["3.00", "3.50", "3.33", "2.90"];
    var result = pricePerAvo(deals);
    assert.deepEqual(result, b);
  });
});
describe('deals data',function(){
  it('should return the cheapest deal', function(){
    var results = cheapestDeal(deals)
    assert(results, '5 for R14.50')
  });
});
describe('deals data', function(){
  it('should return the most expensive deal', function(){
    var results = mostExpensiveDeal(deals)
    assert.equal = (results, '2 for R7')
  });
});
describe('deals data', function(){
  it('find the average price across all deals', function(){
    var results = averagePrice(deals)
    assert.equal(results, 3.18)
  });
});













// var message = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50.";
// var messageArray = [];
// messageArray.push(message.split(','))
