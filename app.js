'use strict';

var hours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12am',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '8pm'
];


var firstAndPike = document.getElementById('1andpike');
var seaTac = document.getElementById('seatac');
var seattleCenter = document.getElementById('seacenter');
var caphill = document.getElementById('caphill');
var alki = document.getElementById('alkibeach');

// You need to pass this constructor function the max, min and cookie per sale, also the htmlElement from above ie var locationObject = new LocationConstructor(100,30,3.5,html id));

function LocationConstructor(max,min,cookiepersale,htmlElementId) {
  this.maxCustPerHour = max;
  this.minCustPerHour = min;
  this.cookiesPerSale = cookiepersale;
  this.randRange = function(){
    return Math.floor((Math.random() *(this.maxCustPerHour - this.minCustPerHour)) + this.minCustPerHour)};
  this.cookiesPerHour= this.numCustomerPerHour * this.cookiesPerSale
  this.render= function () {
    var total = 0
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      var numCustomerPerHour = this.randRange();
      var cookiesPerHour = Math.floor(numCustomerPerHour * this.cookiesPerSale);
      liEl.textContent = `${hours[i]}: ${cookiesPerHour} cookies.`;
      htmlElementId.appendChild(liEl);
      total = cookiesPerHour + total;
    }
    var liEltotal = document.createElement('li');
    liEltotal.textContent = `Total: ${total} cookies.`;
    htmlElementId.appendChild(liEltotal);
  }
};

var firstAPObject = new LocationConstructor(65,23,6.3,firstAndPike);
var seaTacObject = new LocationConstructor(24,2,1.2,seatac);
var seaCentObject = new LocationConstructor(38,11,3.7,seacenter);
var capHillObject = new LocationConstructor(38,20,2.3,caphill);
var alkiBeachObject = new LocationConstructor(16,2,4.6,alkibeach);

firstAPObject.render();
seaTacObject.render();
seaCentObject.render();
capHillObject.render();
alkiBeachObject.render();