function celsiusToFahrenheit(celsius) {
    return Math.round((celsius * 9/5) + 32);
}

function fahrenheitToCelsius(fahrenheit) {
    return Math.round((fahrenheit - 32) * 5/9);
}

function kilometresToMiles(km) {
    return Math.round(km * 0.621371);
}

function milesToKilometres(miles) {
    return Math.round(miles * 1.60934);
}

function kilogramsToLbs(kg) {
    return Math.round(kg * 2.20462);
}

function lbsToKilograms(lbs) {
    return Math.round(lbs * 0.453592);
}

function convertTemp() {
    const input = parseFloat(document.getElementById('temp-input').value);
    const direction = document.getElementById('temp-direction').value;
    let label;

    if (direction === 'celsiusToFahrenheit') {
        label = `${input}°C = ${celsiusToFahrenheit(input)}°F`;
    } else {
        label = `${input}°F = ${fahrenheitToCelsius(input)}°C`;
    }
    document.getElementById('temp-result').textContent = label;
}

function convertDistance() {
    const input = parseFloat(document.getElementById('dist-input').value);
    const direction = document.getElementById('dist-direction').value;
    let label;

    if (direction === 'kmToMiles') {
        label = `${input} km = ${kilometresToMiles(input)} miles`;
    } else {
        label = `${input} miles = ${milesToKilometres(input)} km`;
    }
    document.getElementById('dist-result').textContent = label;
}

function convertWeight() {
    const input = parseFloat(document.getElementById('weight-input').value);
    const direction = document.getElementById('weight-direction').value;
    let label;

    if (direction === 'kgToLbs') {
        label = `${input} kg = ${kilogramsToLbs(input)} lbs`;
    } else {
        label = `${input} lbs = ${lbsToKilograms(input)} kg`;
    }
    document.getElementById('weight-result').textContent = label;
}

if (typeof module !== 'undefined') {
    module.exports = { 
        celsiusToFahrenheit, 
        fahrenheitToCelsius,
        kilometresToMiles, 
        milesToKilometres,
        kilogramsToLbs, 
        lbsToKilograms 
    };
}