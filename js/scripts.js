var tempCelToFareh = function(celToFareh) {
  return celToFareh * 1.8 + 32;
};
var celToFareh = prompt("Enter a temperature");
var tempResult = tempCelToFareh(celToFareh);

alert(celToFareh + " in celcius is " + tempResult + " in fahrenheit");

var volGalToLit = function(galToLit) {
    return galToLit * 3.7854;
}

var galToLit = prompt("Enter volume in gallons to convert to litres");
var volResult = volGalToLit(galToLit);

alert(galToLit + " gallons is " + volResult + " litres");

var distanceCenToInch = function(cenToInch) {
    return cenToInch * 0.3937008
}

var cenToInch = prompt("Enter distance in CM to convert to Inch");
var distanceResult = distanceCenToInch(cenToInch);

alert(cenToInch + " centimeters is " + distanceResult + " in American inches")