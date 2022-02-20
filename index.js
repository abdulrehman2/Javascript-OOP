
// function Circle(radius) {
//     return {
//         radius: 1,
//         draw: function () {
//             console.log('calling draw from factory');
//         }
//     }
// }

function CreateCircle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    this.getDefaultLocation = function () {
        return defaultLocation;
    }
    this.draw = function () {
        console.log('draw from constructor')
    }
}


const first = new CreateCircle(1);
first.draw();
var temp = first.getDefaultLocation();
console.log(temp);

temp.y = 2;
console.log(temp);

