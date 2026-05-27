import Ship from './Ship.js';

export class Gameboard {
    constructor() {
        this.board = Array.from({ length: 10 }, () => Array(10).fill(null));
        this.attacked = [];
    }

    placeShip(size, x, y, direction) {
        const ship = new Ship(size);

        if (x > 9 || y > 9 || x < 0 || y < 0) {
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
        if (x > 9 || y > 9 || x < 0 || y < 0) {
            return;
        }

        const target = this.board[x][y];
        let atacado = this.attacked.some((coordenada) => {
            return coordenada[0] === x && coordenada[1] === y;
        });

        if (atacado === true) {
            return;
        }

        if (target === null) {
            this.attacked.push([x, y]);
        } else {
            this.attacked.push([x, y]);
            target.hit();
        }
    }

    clean() {
        this.board = Array.from({ length: 10 }, () => Array(10).fill(null));
        this.attacked.splice(0, this.attacked.length);
    }

    allshipSunks() {
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board.length; j++) {
                if (this.board[i][j] !== null) {
                    if (!this.board[i][j].isSunk()) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
}
