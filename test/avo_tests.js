var pricePerAvo = require('../pricePerAvo');
var cheapestDeal = require('../cheapestDeal');
var mostExpensiveDeal = require('../mostExpensiveDeal');
var averagePrice = require('../averagePrice');
var assert = require('assert');
var deals = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50.";

describe('deals data', function(){
  it('should return the price per avo for each deal', function(){
    var b = 'x';
    var result = pricePerAvo(deals);
    assert.equal(result, b);
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
