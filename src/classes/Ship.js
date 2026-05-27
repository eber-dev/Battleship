export class Ship {
    constructor(longitud) {
        this.longitude = longitud;
        this.impact = 0;
    }

    hit() {
        this.impact++;
        return this.impact;
    }

    isSunk() {
        if (this.impact >= this.longitude) {
            return true;
        } else {
            return false;
        }
    }
}
