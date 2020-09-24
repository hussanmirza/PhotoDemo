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


export let photo1 = new Photo();
export let photo2 = new Photo(12, 15);
export let photo3 = new Photo();
export let photo4 = new Photo(10, 8);
export let photo5 = new MattedPhoto(8,10,"green");
export let photo6 = new MattedPhoto(12,15,"blue");
export let photo7 = new FramedPhoto(10,8,"gold","modern");
export let photo8 = new FramedPhoto(8,10,"steel","bold");