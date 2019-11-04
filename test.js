// const myAlert = () => {
//   const x = "Help!";
//   const alerter = () => {
//     alert(x);
//   };
//   setTimeout(alerter, 1000);
//   console.log("What happened?");
// };

const PhoneTemplate = function (brand, model, withCamera) {
  this.brand = brand;
  this.model = model;
  this.withCamera = withCamera || false;
  this.takePhoto = function () {
    if (this.withCamera) {
      console.log(this.model + 'can take photos');
    } else {
      console.log(this.model + 'cannot take photos');
    }
  }
}

PhoneTemplate.prototype.callsomeone = function(name){
  return name;
}

let iPhone = new PhoneTemplate('Apple', 'iPhone', true);
let ZenPhone = new PhoneTemplate('ASUS', 'ZenPhone', false);


console.log(iPhone);