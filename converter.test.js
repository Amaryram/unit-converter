const { celsiusToFahrenheit, kilometresToMiles, kilogramsToLbs } = require('./converter');

describe('Temperature conversion', () => {
    test('converts 0°C to 32°F', () => {
        expect(celsiusToFahrenheit(0)).toBe(32);
    });
    test('converts 100°C to 212°F', () => {
        expect(celsiusToFahrenheit(100)).toBe(212);
    });
    test('converts -40°C to -40°F', () => {
        expect(celsiusToFahrenheit(-40)).toBe(-40);
    });
});

describe('Distance conversion', () => {
    test('converts 1 km to 0.621371 miles', () => {
        expect(kilometresToMiles(1)).toBe(1);
    });
    test('converts 10 km to 6 miles', () => {
        expect(kilometresToMiles(10)).toBe(6);
    });
});

describe('Weight conversion', () => {
    test('converts 1 kg to 2 lbs', () => {
        expect(kilogramsToLbs(1)).toBe(2);
    });
    test('converts 10 kg to 22 lbs', () => {
        expect(kilogramsToLbs(10)).toBe(22);
    });
});