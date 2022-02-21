// ES5 function (regular function)
// const getFirstName = function (fullname) {   (this is same as the syntax -> function getFirstName(fullname) {})
// return fullName.split(' ')[0];
// };
// Arrow function
// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];
// };
//Arrow function - concise
// const getFirstName = (fullName) => fullName.split(' ')[0];
// const name = 'Aruun Kumar';
// console.log('FirstName:', getFirstName(name));

// ES5 function inside an object :
// const user = { 
// name: 'Aruun',
// cities: ['Richmond', 'Sunrise'],
// printPlacesLived: function () {
//  this.cities.forEach(function (city){    --> forEach iterates thru array and for each iteration executes the function with the array value.
//     console.log(this.name + ' has lived in ' + city);  --> this will fail since this is within another function and is not bound and wont be accessible
//  });
// };
// };

// Arrow equivalent 
// const user = { 
// name: 'Aruun',
// cities: ['Richmond', 'Sunrise'],
// printPlacesLived: function () {  --> this cannot be an arrow function bcos the 'this' below wont work as its not accesbile. Instead we can write like PrintPlacesLived() {}
//  this.cities.forEach((city) => {    --> forEach takes a function as input
//     console.log(this.name + ' has lived in ' + city);  
//  });
// };
// };


// const multiplier = {
//  numbers: [4,9,16],
//  multiplyBy : 2,
//  multiply() {           // This is the ES6 function syntax
//      return this.numbers.map((num) => num * this.multiplyBy);  // map is similar to ForEach but lets us to tranform the returned array value 
//     }
// };

// console.log(multiplier.multiply());

const onShowHide = () => {
     visibility = !visibility;
    renderVisibilityApp();
};

let visibility = false;
const renderVisibilityApp = () => {
    let template = (
    <div>
        <h1>Visibility Toggle</h1>

         <button onClick={onShowHide}>{ visibility ? "Hide Details" : "Show Details"}</button> 
        <p>{ visibility && "Here is the hidden message"} </p>
        
    </div>
    );
    
    const appRoot = document.getElementById('root');
    ReactDOM.render(template,appRoot);
    }
    
renderVisibilityApp();

//Object destructuring example--
const book = {
    name: 'React book',
    author: 'Andrew Mead',
    publisher: {
       name: 'Oriley'
    }
}

const {name: publisherName = 'self published'} = book.publisher;

console.log(publisherName);

//Array restructuring is similar . example below...
// const [item1, item2, ,item4] = arrayName