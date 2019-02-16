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

var firstAPObject = {
  maxCustPerHour: 65,
  minCustPerHour: 23,
  cookiesPerSale: 6.3,
  name: 'First and Pike',
  randRange: function(){
    return Math.floor((Math.random() *(this.maxCustPerHour - this.minCustPerHour)) + this.minCustPerHour)},
  cookiesPerHour: this.numCustomerPerHour * this.cookiesPerSale,

  render: function () {
    var total = 0
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      var numCustomerPerHour = this.randRange();
      var cookiesPerHour = Math.floor(numCustomerPerHour * this.cookiesPerSale);
      liEl.textContent = `${hours[i]}: ${cookiesPerHour} cookies.`;
      firstAndPike.appendChild(liEl);
      total = cookiesPerHour + total;
    }
    var liEltotal = document.createElement('li');
    liEltotal.textContent = `Total: ${total} cookies.`;
    firstAndPike.appendChild(liEltotal);
  }
};

var seaTacObject = {
  maxCustPerHour: 24,
  minCustPerHour: 2,
  cookiesPerSale: 1.2,
  randRange: function(){
    return Math.floor((Math.random() *(this.maxCustPerHour - this.minCustPerHour)) + this.minCustPerHour)},
  cookiesPerHour: this.numCustomerPerHour * this.cookiesPerSale,

  render: function () {
    var total = 0
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      var numCustomerPerHour = this.randRange();
      var cookiesPerHour = Math.floor(numCustomerPerHour * this.cookiesPerSale);
      liEl.textContent = `${hours[i]}: ${cookiesPerHour} cookies.`;
      seaTac.appendChild(liEl);
      total = cookiesPerHour + total;
    }
    var liEltotal = document.createElement('li');
    liEltotal.textContent = `Total: ${total} cookies.`;
    seaTac.appendChild(liEltotal);
  }
};

var seaCentObject = {
  maxCustPerHour: 38,
  minCustPerHour: 11,
  cookiesPerSale: 3.7,
  randRange: function(){
    return Math.floor((Math.random() *(this.maxCustPerHour - this.minCustPerHour)) + this.minCustPerHour)},
  cookiesPerHour: this.numCustomerPerHour * this.cookiesPerSale,

  render: function () {
    var total = 0
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      var numCustomerPerHour = this.randRange();
      var cookiesPerHour = Math.floor(numCustomerPerHour * this.cookiesPerSale);
      liEl.textContent = `${hours[i]}: ${cookiesPerHour} cookies.`;
      seattleCenter.appendChild(liEl);
      total = cookiesPerHour + total;
    }
    var liEltotal = document.createElement('li');
    liEltotal.textContent = `Total: ${total} cookies.`;
    seattleCenter.appendChild(liEltotal);
  }
};

var capHillObject = {
  maxCustPerHour: 38,
  minCustPerHour: 20,
  cookiesPerSale: 2.3,
  randRange: function(){
    return Math.floor((Math.random() *(this.maxCustPerHour - this.minCustPerHour)) + this.minCustPerHour)},
  cookiesPerHour: this.numCustomerPerHour * this.cookiesPerSale,

  render: function () {
    var total = 0
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      var numCustomerPerHour = this.randRange();
      var cookiesPerHour = Math.floor(numCustomerPerHour * this.cookiesPerSale);
      liEl.textContent = `${hours[i]}: ${cookiesPerHour} cookies.`;
      caphill.appendChild(liEl);
      total = cookiesPerHour + total;
    }
    var liEltotal = document.createElement('li');
    liEltotal.textContent = `Total: ${total} cookies.`;
    caphill.appendChild(liEltotal);
  }
};

var alkiBeachObject = {
  maxCustPerHour: 16,
  minCustPerHour: 2,
  cookiesPerSale: 4.6,
  randRange: function(){
    return Math.floor((Math.random() *(this.maxCustPerHour - this.minCustPerHour)) + this.minCustPerHour)},
  cookiesPerHour: this.numCustomerPerHour * this.cookiesPerSale,

  render: function () {
    var total = 0
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      var numCustomerPerHour = this.randRange();
      var cookiesPerHour = Math.floor(numCustomerPerHour * this.cookiesPerSale);
      liEl.textContent = `${hours[i]}: ${cookiesPerHour} cookies.`;
      alki.appendChild(liEl);
      total = cookiesPerHour + total;
    }
    var liEltotal = document.createElement('li');
    liEltotal.textContent = `Total: ${total} cookies.`;
    alki.appendChild(liEltotal);
  }
};

firstAPObject.render();
seaTacObject.render();
seaCentObject.render();
capHillObject.render();
alkiBeachObject.render();