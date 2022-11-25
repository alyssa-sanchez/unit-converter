let convertBtn = document.getElementById("btn-convert")
let inputNum = parseInt(document.getElementById("input-num").value)
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
let meterToFeet = 3.281
let literToGallon = 0.264
let kilogramToPound = 2.204
// ---
let feetToMeter = 0.3048
let gallonToLiter = 3.78541
let poundTokKilogram = 0.453592

// meter to feet
let meterToF = inputNum * meterToFeet
let feetToM = inputNum * feetToMeter

// liter to gallon
let literToG = inputNum * literToGallon
let gallonToL = inputNum * gallonToLiter

// kilogram to pound
let kilogramToP = inputNum * kilogramToPound
let poundToK = inputNum * poundTokKilogram

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

ROUND TO 3 DECIMAL PLACE
*/

convertBtn.addEventListener("click", () => {
  lengthEl.textContent = `${inputNum} meters = ${meterToF.toFixed(
    3
  )} feet | ${inputNum} feet = ${feetToM.toFixed(3)} meters`
  volumeEl.textContent = `${inputNum} liters = ${literToG.toFixed(
    3
  )} gallons | ${inputNum} gallons = ${gallonToL.toFixed(3)} liters`
  massEl.textContent = `${inputNum} kilos = ${kilogramToP.toFixed(
    3
  )} pounds | ${inputNum} pounds = ${poundToK.toFixed(3)} kilos`
  inputNum.valueOf = ""
})
