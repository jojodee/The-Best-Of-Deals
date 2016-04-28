module.exports = function(priceInfo){
var pricePerDeal = [];
priceInfo.forEach(function(deal){
   pricePerDeal.push(Number(deal.price/deal.qty).toFixed(2));

});
console.log(pricePerDeal);
return pricePerDeal;
}
