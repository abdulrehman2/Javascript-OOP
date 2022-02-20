const _radius =  Symbol();
const _draw =  Symbol();


class Circle {

    constructor(radius) {

        this[_radius] = radius;
    }

    //computed property
    [_draw]() {
        console.log('draw');
    }

}

const c=new Circle(1);
console.log(c);