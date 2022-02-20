
//intermediate function inheritance ( accepts to constructor for parent and child)
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    //set the constructor to orignal value, a best practice
    Child.prototype.constructor = Child;
}


function Shape(color) {
    this.color = color;
}
Shape.prototype.duplicate = function () {
    console.log('duplicate');
}

function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}

extend(Circle, Shape);
Circle.prototype.draw = function () {
    console.log('draw');
}
//method override
//override the duplicate from shape
Circle.prototype.duplicate = function () {
    //call the base function 
    //Shape.prototype.duplicate.call(this);
    //new implementation
    console.log('duplicate from the circle');
}



function Square(size) {
    this.size = size;
}

extend(Square, Shape);

//Polymorphism , same method name, but multiple implementations
Square.prototype.duplicate = function () {
    console.log('duplicate of square');
}

var shapes = [
    new Circle(1, 'yellow'),
    new Square(5)
];

for (let shape of shapes) {
    shape.duplicate();
}
