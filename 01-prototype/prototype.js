function Circle(radius) {

    this.radius = radius;

    this.move = function () {
        this.draw();
        console.log('move');
    }
}

Circle.prototype.draw = function () {
    //this.move();
    console.log('draw');
}

Circle.prototype.toString = function () {
    console.log('Circle with radius' + this.radius);
}