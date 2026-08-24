const { 
    celsiusToFahrenheit, 
    fahrenheitToCelsius,
    kilometresToMiles, 
    milesToKilometres,
    kilogramsToLbs, 
    lbsToKilograms 
} = require('./converter');

describe('Temperature conversion', () => {
    test('converts 0°C to 32°F', () => {
        expect(celsiusToFahrenheit(0)).toBe(32);
    });
    test('converts 100°C to 212°F', () => {
        expect(celsiusToFahrenheit(100)).toBe(212);
    });
    test('converts 32°F to 0°C', () => {
        expect(fahrenheitToCelsius(32)).toBe(0);
    });
    test('converts 212°F to 100°C', () => {
        expect(fahrenheitToCelsius(212)).toBe(100);
    });
});

describe('Distance conversion', () => {
    test('converts 10 km to 6 miles', () => {
        expect(kilometresToMiles(10)).toBe(6);
    });
    test('converts 10 miles to 16 km', () => {
        expect(milesToKilometres(10)).toBe(16);
    });
});

describe('Weight conversion', () => {
    test('converts 10 kg to 22 lbs', () => {
        expect(kilogramsToLbs(10)).toBe(22);
    });
    test('converts 10 lbs to 5 kg', () => {
        expect(lbsToKilograms(10)).toBe(5);
    });
});