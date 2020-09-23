class Photo {
    constructor(width = 8, height = 10) {
        this.width = width;
        this.height = height;
    }

    price() {
        let finalPrice;

        if (this.width == 8 && this.height == 10) {
            finalPrice = 4;
        } else if (this.width == 10 && this.height == 12) {
            finalPrice = 6;
        } else {
            finalPrice = 10;
        }
        return finalPrice;
    }

    toString() {
        return `This is a ${this.width} by ${this.height} photo and it costs ${this.price()}`;
    }
}

console.log("\nSteps 1-2")
let photo1 = new Photo();
console.log(photo1.toString());

let photo2 = new Photo(12, 15);
console.log(photo2.toString());

class MattedPhoto extends Photo {
    constructor(width, height, colour) {
        super(width,height);
        this.colour = colour;

    }

    price() {
        return super.price() +10;
    }

    toString() {
        return `This is a ${this.width} by ${this.height} matted ${this.colour} photo and it costs ${this.price()}`
    }
}

class FramedPhoto extends Photo {
    constructor(width, height, material, style) {
        super( width,height);
        this.material = material;
        this.style = style;
    }

    price() {
        return super.price() + 25;
    }

    toString() {
        return `This is a ${this.width} by ${this.height} ${this.material} framed photo. The style is ${this.style} and it costs ${this.price()}`
    }
}

console.log("\nStep 4");

let photo3 = new Photo();
console.log(photo3.toString());
let photo4 = new Photo(10, 8);
console.log(photo4.toString());

let photo5 = new MattedPhoto(8,10,"green");
console.log(photo5.toString());
let photo6 = new MattedPhoto(12,15,"blue");
console.log(photo6.toString());

let photo7 = new FramedPhoto(10,8,"gold","modern");
console.log(photo7.toString());
let photo8 = new FramedPhoto(8,10,"steel","classic");
console.log(photo8.toString());