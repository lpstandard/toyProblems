var Person = function (firstAndLast) {
  this.first = firstAndLast.split(' ')[0];
  this.last = firstAndLast.split(' ')[1];

  this.getFirstName = function() {
    return this.first;
  };

  this.getLastName = function() {
    return this.last;
  };

  this.getFullName = function() {
    return this.first + ' ' + this.last;
  };

  this.setFirstName = function(first) {
    this.first = first;
  };

  this.setLastName = function(last) {
    this.last = last;
  };

  this.setFullName = function(str) {
    this.first = str.split(' ')[0];
    this.last = str.split(' ')[1];
  };
};
var bob = new Person('Bob Ross');

Object.defineProperty(bob, 'first', {
  enumerable: false
});

Object.defineProperty(bob, 'last', {
  enumerable: false
});

let res = bob.getFullName();
console.log(res);
console.log(Object.keys(bob));