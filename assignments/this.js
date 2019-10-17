/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. implicit binding-- when you can look to the left of the dot when the function is invoked to be able to find the object that 'this' is referring to
 * 2. explicit binding-- when you immediately invoke a function using 'this'
 * 3. new binding-- uses the 'new' keyword to construct a new object, which 'this' points to
 * 4. window binding-- when not using .call, .bind, .apply, or new, and there is nothing left of the dot, javascript defaults to associating 'this' with the window object. however, strict mode prevents this and 'this' will be undefined
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
function sayMyName() {
	console.log(`My name is ${this.name}`);
}

// Principle 2

// code example for Implicit Binding
let myStats = {
	name: 'Karyn',
	age: 28,
	sayName: function() {
		console.log(this.name);
	}
};
myStats.sayName();

// Principle 3

// code example for New Binding
function Person(saysHi) {
	this.saying = saysHi;
}

let Karyn = new Person(`Hi there`);
console.log(Karyn.saying);
// Principle 4

// code example for Explicit Binding
function bird() {
	console.log(this.tweet);
}

let MaiTai = {
	tweet: 'Tweet tweet!'
};

bird.call(MaiTai);
