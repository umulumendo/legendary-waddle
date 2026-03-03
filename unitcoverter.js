const onemeter = 3.281;
const oneliter = 0.264;
const onekilogram = 2.204;
const onefeet = 0.3048
const onegallon = 3.78541
const onepound = 0.453592
const inputEl = document.getElementById("number-to-covert");
const buttonEl = document.getElementById("button");
let coverteoneEl = document.getElementById("supporting-text");
let covertwoEl = document.getElementById("supporting-textwo");
let coverthreeEl = document.getElementById("supporting-texthree");

buttonEl.addEventListener("click", function() {
let basevalue = inputEl.value
coverteoneEl.textContent = `${basevalue} meter = ${basevalue * onemeter.toFixed(3)} feet | ${basevalue} feet = ${basevalue * onefeet.toFixed(3)} meter`
covertwoEl.textContent = `${basevalue} Liters = ${basevalue * oneliter.toFixed(2)} Gallons | ${basevalue} Gallons = ${basevalue * onegallon.toFixed(3)} Liters`
coverthreeEl.textContent = `${basevalue} Kilos = ${basevalue * onekilogram.toFixed(3)} Pounds | ${basevalue} Pounds = ${basevalue * onepound.toFixed(3)} Kilos`
})