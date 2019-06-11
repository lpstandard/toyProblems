// // functional share
// let House = function(color){
//   let obj = {};

//   obj.color = color;
//   obj.door = 'open';

//   obj.openDoor = houseMethod.openDoor;
//   obj.closeDoor = houseMethod.closeDoor;


//   return obj;
//   }

//   let houseMethod = {};

//   houseMethod.openDoor = function(){
//     this.door = 'open';
//   };

//   houseMethod.closeDoor = function(){
//     this.door = 'close';
//   }

// let house = House('red');
// console.log(house.openDoor('red'));
// 
// prototypal
// let House = (color) => {
//   let obj = Object.create(House.prototype);
  
//   obj.color = color;
//   obj.door = 'door';

//   return obj;
// }

// House.prototype.openDoor = () => {
//   this.door = 'open';
// };

// House.prototype.closeDoor = () => {
//   this.door = 'close';
// };

// let house = House('red');

// console.log(house);

//psuedoclassical
// let House = (color) => {
//   this.color = color;
//   this.door = 'open';
// }

// House.prototype.openDoor = () => {
//   this.door = 'open';
// }

// House.prototype.closeDoor = () => {
//   this.door = 'close';
// }

// let house = new House('red');

// console.log(house);