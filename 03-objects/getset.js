function CreateCircle() {
    this.radius = 1;
    let defaultLocation = { x: 0, y: 0 };

    //Object.defineProperty has three parameters
    // first the target object ,
    //second the 		name of property,
    //third the object with get set

    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            defaultLocation = value;
        }
    });
}
console.log('Test');
var circle = new CreateCircle(1);
console.log(circle.defaultLocation);
circle.defaultLocation={x:5,y:5};
console.log(circle.defaultLocation);