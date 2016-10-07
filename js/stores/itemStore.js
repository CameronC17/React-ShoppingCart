var appDispatcher = require('../dispatchers/appDispatcher.js');
var appConstants = require('../constants/appConstants.js');
var EventEmitter = require('events').EventEmitter;
var merge = require('merge');

var _items = [
  {
    "name": "Lawnmower",
    "description": "It mows ya lawn m8",
    "price": 67.99,
    "image": "http://fullmurray.com/250/250"
  },
  {
    "name": "Hacksaw",
    "description": "It cuts ya wood m8",
    "price": 10.99,
    "image": "http://fullmurray.com/250/251"
  },
  {
    "name": "Mexican Gardener Pedro",
    "description": "It does ya garden m8",
    "price": 5,
    "image": "http://fullmurray.com/250/252"
  }
];

var ItemStore =  merge(EventEmitter.prototype , {

  getItems: function() {
    return _items;
  }

});


function handleAction(payload) {


   if(payload.action == appConstants.CLICKED) {



       CountStore.emit('update');

   }

}

appDispatcher.register(handleAction);

module.exports = ItemStore;
