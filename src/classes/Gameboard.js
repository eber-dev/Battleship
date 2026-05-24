import Ship from './Ship.js';

export class Gameboard {
    constructor() {
        this.board = Array.from({ length: 10 }, () => Array(10).fill(null));
        this.ship = [];
        this.failed = [];
        this.attacked = [];
    }

    placeShip(size, x, y, direction) {
        const ship = new Ship(size);

        if (direction === 'horizontal') {
            if (x + size > this.board.length) return;

            for (let i = x; i < x + size; i++) {
                if (this.board[i][y] !== null) {
                    return;
                }
            }

            for (let i = x; i < x + size; i++) {
                this.board[i][y] = ship;
            }
        } else if (direction === 'vertical') {
            if (y + size > this.board.length) return;

            for (let i = y; i < y + size; i++) {
                if (this.board[x][i] !== null) {
                    return;
                }
            }

            for (let i = y; i < y + size; i++) {
                this.board[x][i] = ship;
            }
        }
    }

    receiveAttack(x, y) {
        const target = this.board[x][y];

        if (target === null) {
            console.log('Miss');
        } else {
            target.hit();

            console.log('Hit');

            if (target.isSunk()) {
                console.log('Ship sunk');
            }
        }
    }
}
