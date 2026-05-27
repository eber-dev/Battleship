import Ship from './Ship.js';

export class Gameboard {
    constructor() {
        this.board = Array.from({ length: 10 }, () => Array(10).fill(null));
        this.attacked = [];
    }

    placeShip(size, x, y, direction) {
        const ship = new Ship(size);

        if (x > 9 || y > 9) {
            alert('Coordenadas invalidas');
            return;
        }

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
            this.attacked.push([x, y]);
            alert('Miss');
            this.attacked.forEach((subarray) => {
                if (subarray[0] === x && subarray[1] === y) {
                    return;
                }
            });
        } else {
            target.hit();
        }
    }

    clean() {
        this.board = Array.from({ length: 10 }, () => Array(10).fill(null));
    }

    allshipSunks() {
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board.length; j++) {
                if (this.board[i][j] !== null) {
                    if (!this.board[i][j].isSunk()) {
                        return false;
                    } else {
                        return true;
                    }
                }
            }
        }
    }
}
