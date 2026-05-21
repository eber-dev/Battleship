import { Ship } from '../classes/Ship.js';

describe('Ship', () => {
    test('sinks after enough hits', () => {
        const ship = new Ship(2);

        ship.hit();
        ship.hit();

        expect(ship.isSunk()).toBe(true);
    });
});
