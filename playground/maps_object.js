const myUsers = [
    { name: 'shark', likes: 'ocean' },
    { name: 'turtle', likes: 'pond' },
    { name: 'otter', likes: 'fish biscuits' }
]

const usersByLikes = myUsers.map(item => {
    const container = {};

    container[item.name] = item.likes;
    container.age = item.name.length * 10;

    return container;
})

console.log(usersByLikes);

// nice

var myObject = { 'a': 1, 'b': 2, 'c': 3 };

Object.keys(myObject).map(function(key, index) {
  myObject[key] *= 2;
});

console.log(myObject);

// nice

import React from "react";
import ReactDOM from "react-dom";

const names = ["whale", "squid", "turtle", "coral", "starfish"];

const NamesList = () => (
  <div>
    <ul>{names.map(name => <li key={name}> {name} </li>)}</ul>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<NamesList />, rootElement);

// nice

const reducer = (accumulator, currentValue) => accumulator + currentValue;

var arr = [{
    id: 1,
    name: 'bill',
    amount:55
  }, {
    id: 2,
    name: 'ted',
    amount:30
  }]
  
  var result = arr.map(a => a.amount).reduce(reducer);
  console.log(result);


// It could be done without map also, see below;

var arr = [{
    id: 1,
    name: 'bill',
    amount:55
  }, {
    id: 2,
    name: 'ted',
    amount:30
  }]

let initialValue = 0
let sum = arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.amount
}, initialValue)

console.log(sum) 


// 

const person = { firstName: 'John', lastName: 'Doe'};

const propertyNames = Object.keys(person);
console.log(propertyNames);
// [ 'firstName', 'lastName' ]

const propertyValues = Object.values(person);
console.log(propertyValues);
// [ 'John', 'Doe' ]

const entries = Object.entries(person);
console.log(entries);
// [ [ 'firstName', 'John' ], [ 'lastName', 'Doe' ] ]





