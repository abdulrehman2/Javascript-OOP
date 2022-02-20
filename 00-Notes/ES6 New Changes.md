

# var vs let vs const



| Var               | Let               | Const                       |
| ----------------- | ----------------- | --------------------------- |
| scope to function | Scope to block {} | Scope to block {}           |
| can be reassigned | can be reassigned | **not allowed to reassign** |
|                   |                   |                             |



# Classes in ES6

Classes does not exist in JavaScript, in es6 we have new syntax which is sugar coated around prototype to make it the declaration cleaner, under the hood es6 also uses prototype for classes.

We can have functions under instance, prototype or static methods.

```javascript
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
```





## Function Declaration vs Function Expression

<u>function declaration</u> **are hoisted at the top** , so using them before declaration will not throw error, however <u>function expression</u> are **not hoisted to the top**, so error will be thrown, because expressions are like variables and cannot be accessed before declaration

```javascript

//this will not throw error
var c= new Circle();

//this will throw error
square();

//function declaration
function Circle(radius){
this.radius=radius;
}
//function expression
const square = function (){

};
```



## Class Declaration vs  Class Expression

We can define class with both expression and declaration. However in both case, hoisting to top is not done.

```javascript
//this will throw error
let c =new Circle();

//class declaration
class Cirlce(){

}
//class expression
const square= class{

}
```



## Method Call vs Function Call

### 	Strict Mode 

In strict mode, JavaScript engine use strict rules and prevent changing of global object	

Constructor function does not use strict mode by default, however es6 classes use strict mode 

```javascript
'use strict';


function Circle() {
    this.draw = function () {
        console.log(this);
    }
}
const c=new Circle();

//method call
c.draw();

const draw= c.draw;

//function call
//if strict mode is enabled, then this will be set to undefined to prevent accidently changing global window object(this)
draw();


```



## Private Members

### Symbol

we can use symbol, a new primitive type introduced in es6  that will create a new identifier whenever it is called. To hide a member we can use `this.[symbolProperty]` syntax. For functions we can use **computed property name** to hide the function name through symbols

```javascript
//Hiding Members through Symbols
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
```

### Weak Map

a weak map is dictionary, **keys** are objects and value can be anything. Best to declare separate  weak map for each property.

```javascript
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
}

const c = new circle();

c.draw();

```



### Getter Setter

We now have a shorter way to define get set for properties, instead of using `Object.defineProperty` method.

```javascript
	   //getter
        get radius(){
            return _radius.get(this);
        }
        
        //setter
        set radius(value){
            if (value<=0 ) throw new Error('Invalid Radius');
            _radius.set(this,value);
        }
```



## Inheritance

Instead of setting prototype and constructor, we can use es6 new keywords like **extend** to automatically inherit everything from the base class.

```javascript
class Shape {

    constructor(color) {
        this.color = color;
    }
    draw() {
        console.log('draw');
    }

}

class Circle extends Shape {

    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
}

const c=new Circle(1,'orange');
```



## Method Overriding





# Loop and Parameters

- We can pass multiple arguments with **rest parameter**  the syntax for it is `...parameterList`

- We can spread multiple arguments with **spread operator** the syntax for it is `...parametersList`

- We now have `for in` loop  to iterate over properties of an object

  ```javascript
  for (let key in circle){
  
  }
  ```

- We now have `for of`  loop to iterate over a list of objects

  ```javascript
  for (var shape of shapes){
  
  }
  ```

- We can now set the default parameter value for a function

  ```javascript
  function checkName(name=""){
  }
  ```

- We have new function in `Object` , `assign`. This method can be used to copy all the properties of different objects into a single object.

  ```javascript
  Object.assign (targetObject,sourceObject1, sourceObject2);
  // or with the spread operator, we can  spread an array
  Object.assign (targetObject,...sourceObjects);
  ```

- Template strings allow us to use JavaScript variables while declaring dynamic string, 

- ```javascript
  let element=`<img src=${urlSource}/>`;
  ```

  