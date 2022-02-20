const _radius = new WeakMap();
const _move = new WeakMap();
class circle {
    constructor(radius) {

        _radius.set(this, radius);
        _move.set(this, () => {
            console.log('move', this);
        });
    }
    draw() {
        _move.get(this)();
        console.log('draw');
    }

        //getter
        get radius(){
            return _radius.get(this);
        }
        
        
        //setter
        set radius(value){
            if (value<=0 ) throw new Error('Invalid Radius');
            _radius.set(this,value);
        }




}

const c = new circle();

//c.draw();
