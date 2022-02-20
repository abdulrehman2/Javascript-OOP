# Prototypical Inheritance

- You can set the prototype of an object, so that it can inherit members from a different object,

- `Cirlce.prototype.constructor`(1)   is equivalent  to calling the constructor of like `new Circle(1)`;

- Whenever you set the prototype to a different one, it is best practice to reset the constructor of that object to the original function. 

- To call the super constructor of an object, user `ConstructorName.call(this, argumentsList)` 

- You can override the base object method in the derived object 

  ```javascript
  //Method overrding example
  
  function Shape(){
  
  }
  Shape.prototype.duplicate=function(){
  console.log('duplicate');
  }
  
  function Circle(radius){
      this.radius=radius;
  }
  //set the circle prototype to the shape constructor
  Circle.prototype = Object.create(Shape.prototype);
  Circle.prototype.constructor=Circle.constructor;
  
  
  //method overriden for the circle class
  Circle.prototype.duplicate=function(){
  
  }
  ```
  
  Avoid Inheritance, when their is not clear hierarchy,  it is best practice to use inheritance for 1 level hierarchy. Multiple levels will cause code to be fragile and complex. Instead use composition when clear hierarchy does not exist.
  
- Mixins allow us to perform composition in JavaScript.

- **Rest Parameter** allow us to pass multiple arguments as an array 

- **Spread operator** allow us to spread an array into individual arguments.

```

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
```

