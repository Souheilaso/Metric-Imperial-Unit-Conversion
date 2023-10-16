// Length (Meter/Feet)

function metersToFeet(meters){
    let calcMeter = Number(meters) * 3.281
    return `${calcMeter.toFixed(3)} feet`
    
}

function feetToMeters(feet){
     let calcFeet = Number(feet) * 0.3048;
     return `${calcFeet.toFixed(3)} meters`
   
}

// Volume (Liters/Gallons)
function litersToGallons(liters){
    let calcLiters = Number(liters) * 0.264172
    return `${calcLiters.toFixed(3)} gallons`
}

function gallonsToLiters(gallons){
    let calcGallons = Number(gallons) * 3.78541
    return `${calcGallons.toFixed(3)} liters`
}


// Mass (Kilograms/Pounds)

function kilogramsToPounds(kilograms) {
    let calcKilo =  Number(kilograms * 2.20462);
    return `${calcKilo.toFixed(3)} kilograms`
    
}


function poundsToKilograms(pounds) {
    let calcPounds = pounds * 0.453592;
    return `${calcPounds.toFixed(3)} pounds`
}



// Length (Meter/Feet)

function metersToFeet(meters){
    let calcMeter = Number(meters) * 3.281
    return `${calcMeter.toFixed(3)} feet`
    
}

function feetToMeters(feet){
     let calcFeet = Number(feet) * 0.3048;
     return `${calcFeet.toFixed(3)} meters`
   
}

// Volume (Liters/Gallons)
function litersToGallons(liters){
    let calcLiters = Number(liters) * 0.264172
    return `${calcLiters.toFixed(3)} gallons`
}

function gallonsToLiters(gallons){
    let calcGallons = Number(gallons) * 3.78541
    return `${calcGallons.toFixed(3)} liters`
}


// Mass (Kilograms/Pounds)

function kilogramsToPounds(kilograms) {
    let calcKilo =  Number(kilograms * 2.20462);
    return `${calcKilo.toFixed(3)} kilograms`
    
}


function poundsToKilograms(pounds) {
    let calcPounds = pounds * 0.453592;
    return `${calcPounds.toFixed(3)} pounds`
}


// END OF FUNCTIONS

let inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthResult = document.getElementById("length-result")
const volumeResult = document.getElementById("volume-result")
const massResult = document.getElementById("mass-result")
const resetButton = document.getElementById("reset-btn")

convertBtn.addEventListener("click", function(){
    let inputValue = inputEl.value
    
    let lenghthMeterFeet = (`${inputValue} meters = ${metersToFeet(inputValue)} | ${inputValue} feet = ${feetToMeters(inputValue)}`);
    lengthResult.textContent = lenghthMeterFeet
  
    
    let volumeLiterGallon = (`${inputValue} liters = ${litersToGallons(inputValue)} | ${inputValue} gallons = ${gallonsToLiters(inputValue)}`);
    volumeResult.textContent = volumeLiterGallon
    
    let massKiloPounds = (`${inputValue} kilograms = ${kilogramsToPounds(inputValue)} | ${inputValue} pounds = ${poundsToKilograms(inputValue)}`);
    massResult.textContent = massKiloPounds
    
})

resetButton.addEventListener("click", function(){
    inputEl.value = ""
    lengthResult.textContent = ""
    volumeResult.textContent = ""
    massResult.textContent = ""
})