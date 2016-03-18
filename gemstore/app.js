(function(){
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
     this.products = gem;
   });

   var gem =[
     {
       name: 'Azurite',
       price: 2.95,
       canPurchase: false,
       soldOut: false
     },
     {
       name: 'Sapphire',
       price: 95,
       canPurchase: true,
       soldOut: false
     }
   ];

})();
