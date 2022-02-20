class Shape {

    constructor(color) {
        this.color = color;
    }
    draw() {
        console.log('draw');
    }

}

class Circle extends Shape {

    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    draw() {
        super.draw();
        console.log('circle draw');
    }

}

const c = new Circle(1, 'orange');