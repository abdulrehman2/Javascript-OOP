# Prototype 

**A regular object in memory.**

In JavaScript, we do not have classes. Inheritance between objects is done through prototype. In simple terms the base/parent/super object is the prototype  of  the derived object.

- Every object we create in JavaScript, inherits directly all properties function from the Base Object called (`Object`). So Object is prototype of the derived object

- We can get the prototype of an object by using `Object.getPrototypeOf(x)`

- Multiple Inheritance is achieved through  prototype

- **Property descriptors** can enable/disable enumeration, deletion, updating value (writable, configurable, enumerable)

- An object has a constructor, **that constructor is not only a function but also an object**, so  that constructor will also have a prototype and that prototype will be same as of the original object.

- We can instance members or we can have prototype members. Functions should be added to prototype to decrease memory usage. 

- **Instance methods can call prototype methods and similarly prototype methods can call instance methods**

- `Object.keys(circle)` will only return the instance members, **not the prototype** members.

- `For (let key in circle)` **will return all members including prototype**

- Own property is commonly used instead of instance members in JavaScript world

- **Don't modify objects you don't own, avoid adding methods in base prototype of JavaScript** 

  ```Javascript
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
  ```

  

