'use strict';

var hours = [
  '6:00am',
  '7:00am',
  '8:00am',
  '9:00am',
  '10:00am',
  '11:00am',
  '12:00am',
  '1:00pm',
  '2:00pm',
  '3:00pm',
  '4:00pm',
  '5:00pm',
  '6:00pm',
  '7:00pm',
  '8:00pm'
];


var firstAndPike = document.getElementById('1andpike');
var seaTac = document.getElementById('seatac');
var seattleCenter = document.getElementById('seacenter');
var caphill = document.getElementById('caphill');
var alki = document.getElementById('alkibeach');
var tablehead = document.getElementById('tablehead');

// You need to pass this constructor function the max, min and cookie per sale, also the htmlElement from above ie var locationObject = new LocationConstructor(100,30,3.5,html id));

function LocationConstructor(max,min,cookiepersale,htmlElementId,rowTitle) {
  this.maxCustPerHour = max;
  this.minCustPerHour = min;
  this.cookiesPerSale = cookiepersale;
  this.rowTitle = rowTitle;
  this.randRange = function(){
    return Math.floor((Math.random() *(this.maxCustPerHour - this.minCustPerHour)) + this.minCustPerHour)};
  this.cookiesPerHour= this.numCustomerPerHour * this.cookiesPerSale
  this.render= function () {
    var total = 0
    var rowTitleRend = document.createElement('td');
    rowTitleRend.textContent = this.rowTitle;
    htmlElementId.appendChild(rowTitleRend);
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('td');
      var numCustomerPerHour = this.randRange();
      var cookiesPerHour = Math.floor(numCustomerPerHour * this.cookiesPerSale);
      liEl.textContent = `${cookiesPerHour} cookies.`;
      htmlElementId.appendChild(liEl);
      total = cookiesPerHour + total;
    }
    var liEltotal = document.createElement('td');
    liEltotal.textContent = `Total: ${total} cookies.`;
    htmlElementId.appendChild(liEltotal);
  }
};

var firstAPObject = new LocationConstructor(65,23,6.3,firstAndPike,'First and Pike');
var seaTacObject = new LocationConstructor(24,2,1.2,seatac, 'SeaTac Airport');
var seaCentObject = new LocationConstructor(38,11,3.7,seacenter,'Seattle Center');
var capHillObject = new LocationConstructor(38,20,2.3,caphill,'Capitol Hill');
var alkiBeachObject = new LocationConstructor(16,2,4.6,alkibeach,'Alki');

firstAPObject.render();
seaTacObject.render();
seaCentObject.render();
capHillObject.render();
alkiBeachObject.render();

function tableHeadRender(){
  var blank = document.createElement('th');
  blank.innerHTML = ('');
  tablehead.appendChild(blank);
  for (var hourCount = 0; hourCount < hours.length; hourCount++){
    var tableHeadRow = document.createElement('th');
    tableHeadRow.textContent = hours[hourCount];
    tablehead.appendChild(tableHeadRow)
  }
  var totals = document.createElement('th');
  totals.innerHTML = ('Totals');
  tablehead.appendChild(totals);
};

tableHeadRender();