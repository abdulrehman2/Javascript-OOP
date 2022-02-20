'use strict';


function Circle() {
    // new function will create its own scope
    this.draw = function () {
        console.log('draw',this);
    }
    //
    this.arrowDraw = () => {
        console.log('arrow Draw',this);
    }

}

const c = new Circle();

//method call
c.draw();
c.arrowDraw();

const draw = c.draw;
const arrowDraw=c.arrowDraw;

//function call
//if strict mode is enabled, then this will be set to undefined to prevent accidently changing global window object(this)
draw();
arrowDraw();

