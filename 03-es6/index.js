//new syntax
class Circle {

    //constructor is the keyword

    constructor(radius) {
        this.radius = radius;

        //these functions will be part of instance of object
        this.move = function () {
            console.log('move');
        }
    }
    //we can add the methods here, no need to add the function keyword
    //these functions will lie under prototype of this object, not under instance
    draw() {
        console.log('draw');
    }

    //we can also have static methods, that are not tied to any particular instance

    static parse(value) {
        return new Circle(JSON.parse(value).radius);
    }

}

c = new Circle(1);

c.draw();
c.move();

var c2=Circle.parse('{ "radius": 5 }');
console.log(c2);
