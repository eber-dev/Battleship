export class Ship {
    constructor(longitud) {
        this.longitude = longitud;
        this.impact = 0;
        this.sunk = false;
    }

    hit() {
        this.impact++;
        return this.impact;
    }

    isSunk() {
        if (this.impact === this.longitude) {
            this.sunk = true;
        } else {
            this.sunk = false;
        }
        return this.sunk;
    }
}
