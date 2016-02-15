console.log("sanity check!")

var firstParagraph = document.getElementById('main');
console.log(firstParagraph);

firstParagraph.style.color = 'red';

var getAllElements = document.getElementsByTagName('ul');
console.log(getAllElements);

var getSingleElement = document.getElementsByTagName('ul')[0];
console.log(getSingleElement);

var allListItems = document.getElementsByTagName('li');
console.log(allListItems);

for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i]);
}

var evenElements = document.getElementsByClassName('even');
console.log(evenElements)

var oddElements = document.getElementsByClassName('odd');
console.log(oddElements)

var firstEvenElement = document.getElementsByClassName('even')[0];
console.log(firstEvenElement)

var firstOddElement = document.getElementsByClassName('odd')[0];
console.log(firstOddElement)

var main = document.querySelector('#main');
console.log(main);

var firstOddElement = document.querySelector('.odd');
console.log(firstOddElement)

var oddAndEvenElements = document.querySelectorAll('.odd, .even');
console.log(oddAndEvenElements);
// A NodeList is a "live collection". Changes refelcted live.

for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i].innerText);
}

for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i].innerText = i);
}
console.log(allListItems);

document.getElementById('main').style.backgroundColor = "goldenrod";

oddElements[0].style.color = 'pink';
oddElements.style.backgroundColor = 'black';
// Seems to only work when I target index number.

evenElements.style.color = 'black';
evenElements.style.backgroundColor = 'pink';
