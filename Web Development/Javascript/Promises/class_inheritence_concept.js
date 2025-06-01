class Shape {
    constructor(color) {
        this.color = color;
    }

    paint() {
			console.log(`Painting with color ${this.color}`);
    }

    area() {
        throw new Error('The area method must be implemented in the subclass');
    }

    getDescription() {
        return `A shape with color ${this.color}`;
    }
}

class Rectangle extends Shape {

    constructor (width, height, color)
    {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area() {
        return this.width * this.height;
    }
}