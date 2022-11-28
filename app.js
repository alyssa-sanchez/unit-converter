let convertBtn = document.getElementById("btn-convert")
let inputNumber = document.getElementById("input-num")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", () => {
  let unit = inputNumber.value
  let meter = 3.281
  let liter = 0.264
  let kg = 2.204
  let unitToM = (unit / meter).toFixed(3)
  let unitToLiter = (unit / liter).toFixed(3)
  let unitToKilos = (unit / kg).toFixed(3)
  if (true) {
    // LENGTH
    lengthEl.textContent += `${unit} meters = ${(unit * meter).toFixed(
      3
    )} feet | ${unit} feet = ${unitToM} meters `

    // VOLUME
    volumeEl.textContent += `${unit} liters = ${(unit * liter).toFixed(
      3
    )} gallons | ${unit} gallons = ${unitToLiter} liters `

    // MASS
    massEl.textContent += `${unit} kilos = ${(unit * kg).toFixed(
      3
    )} pounds | ${unit} pounds = ${unitToKilos} kilos `
  }
  inputNumber.value = "" // to clear the input
})

function reset() {
  location.reload()
}
