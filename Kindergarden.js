class Kindergarden {
    constructor() {
        this.kidLimit = 0;
        this.kidList = [];
    }

    intro() {
        console.log(`"Barsukai" can accept 3 kids.`);
    }

    updateKidsLimit(kidLimit) {
        this.kidLimit += kidLimit;
        if (this.kidLimit < this.kidList.length) {
            console.log(`"Barsukai" can not update kids limit right now.`);
        } else {
            console.log(`"Barsukai" can accept ${this.kidLimit} kids now.`);
        }

    }

    addKid(kidName) {
        const kid = { kidName };
        this.kidList.push(kid);

        if (this.kidLimit < this.kidList.length) {
            console.log(`${kidName} can not enter "Barsukai" kindergarden - it's at a full capacity of ${this.kidLimit} kids.`);
        } else {
            console.log(`${kidName} has entered "Barsukai" kindergarden.`);
        }
    }

    sayHi() {

    }


}

module.exports = Kindergarden;