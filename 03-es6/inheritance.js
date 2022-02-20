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
}

const c=new Circle(1,'orange');