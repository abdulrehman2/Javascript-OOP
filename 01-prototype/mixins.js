
//Mix different objects to perform composition

// ... Rest operator  (take multiple paramters as an array)
// ... Spread oeprator (spread an array of parameters as individual)


function mixin(taget, ...sources) {
    Object.assign(taget, ...sources);
}


let canWalk = {
    walk: function () {
        console.log('Walking');
    }
};


let canEat = {
    eat: function () {
        console.log('Eating');
    }
};

let canSwim = {
    swim: function () {
        console.log(swiming);
    }
};

function Person() {

}

function GoldFish() {

}

mixin(Person.prototype, canWalk, canEat);
mixin(GoldFish.prototype, canSwim, canEat);


var fish=new GoldFish();
var human=new Person();



