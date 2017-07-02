function createBuildings(floor, color) {
  this.floor = floor;
  this.color = color;
}


var myBuilding = new createBuildings(3, 'blue');

createBuildings.prototype.addFloor = function(num) {
  // if(this.floor > 2) {
  //   console.log('yes')
  // }
  this.floor += num;
}

myBuilding.addFloor(2)

console.log(myBuilding);
