function celsiusToFahrenheit(celsius) {
    return Math.round((celsius * 9/5) + 32, 2);
}

function kilometresToMiles(km) {
    return Math.round(km * 0.621371, 2);
}

function kilogramsToLbs(kg) {
    return Math.round(kg * 2.20462, 2);
}

function convertTemp() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    const result = celsiusToFahrenheit(celsius);
    document.getElementById('temp-result').textContent = 
        `${celsius}°C = ${result}°F`;
}

function convertDistance() {
    const km = parseFloat(document.getElementById('kilometres').value);
    const result = kilometresToMiles(km);
    document.getElementById('dist-result').textContent = 
        `${km} km = ${result} miles`;
}

function convertWeight() {
    const kg = parseFloat(document.getElementById('kilograms').value);
    const result = kilogramsToLbs(kg);
    document.getElementById('weight-result').textContent = 
        `${kg} kg = ${result} lbs`;
}

if (typeof module !== 'undefined') {
    module.exports = { celsiusToFahrenheit, kilometresToMiles, kilogramsToLbs };
}
