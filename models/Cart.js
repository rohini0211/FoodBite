module.exports = function Cart(oldCart) {
  this.items = oldCart.items || {};
  this.totalQty = oldCart.totalQty || 0;
  this.totalPrice = oldCart.totalPrice || 0;

  this.add = function(item, id) {
    var storedItem = this.items[id];
    if(!storedItem){
      storedItem = this.items[id] = {item: item, qty: 0, foodPrice: 0};
    }
    storedItem.qty++;
  storedItem.foodPrice = storedItem.item.foodPrice * storedItem.qty;
    this.totalQty++;
    this.totalPrice += storedItem.item.foodPrice;
  };

  this.generateArray = function(){
    var arr = [];
    for(var id in this.items){
      arr.push(this.items[id]);
    }
    return arr;
  };

  this.reduceByOne = function(id) {
      this.items[id].qty--;
      this.items[id].foodPrice -= this.items[id].item.foodPrice;
      this.totalQty--;
      this.totalPrice -= this.items[id].item.foodPrice;

      if(this.items[id].qty <= 0){
        delete this.items[id];
      }
  };

  this.removeAll = function(id){
    this.totalQty -= this.items[id].qty;
    this.totalPrice -= this.items[id].item.foodPrice;
    delete this.items[id];
  };

};
