var tempCelToFareh = function(celToFareh) {
  return celToFareh * 1.8 + 32;
};
var celToFareh = prompt("Enter a Temperature");
var tempResult = tempCelToFareh(celToFareh);

alert(tempResult);

var volGalToLit = function(galToLit) {
    return galToLit * 3.7854;
}

var galToLit = prompt("Enter in Volume");
var volResult = volGalToLit(galToLit);

alert(volResult);

var distanceImptoMet = function(impToMet) {
    return impToMet * 0.3937008
}

var impToMet = prompt("Enter in Distance");
var distanceResult = distanceImptoMet(impToMet);

alert(impToMet + " CM is " + distanceResult + " in IN")