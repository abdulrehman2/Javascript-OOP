# 1    Polymorphism 

·     refactor switch statements to simple one liners

# 2    Encapsulation 

·     reduce complexity,

·     combine related data together

# 3    Inheritance

·     Increase reusability

# 4    Abstraction 

Reduces the breaks due to changes by hiding inner details

# 5     Objects 

## 5.1    Factory Function

- ·     Create object through a function with return statement

## 5.2    Constructor 

- ​     Uses new keyword, first letter of constructor shall be Capital,
- ​     assign the properties uses this keyword to assign properties, 
-   and no return is required

## 5.3     Constructor Property 

-  Every object has a constructor property; this property refers to the function this is used to create the object
-  **Functions itself are objects in JavaScript (and their constructor is Function method present in JavaScript engine)**

## 5.4    Primitive vs Reference Types

-  Value type copy by values 

-  Reference types are copied by reference  of property; this property refers to the function this is used to create the object

- **Functions itself are objects in JavaScript (and their constructor is Function method present in JavaScript engine)**

  

| Primitive Types           | Reference Types |
| ------------------------- | --------------- |
| Number                    | Objects         |
| String                    | Functions       |
| Boolean                   | Array           |
| Undefined                 |                 |
| null                      |                 |
| Symbol (Available in ES6) |                 |

## 5.5 Adding and Removing Properties 

- ​     Add new property with dot or bracket notation

- ​     Remove it with delete property 

  

  ```javascript
  delete circle.radius;
  ```



## 5.6   Looping Through Properties

​     We can use for in loop to enumerate the properties

```javascript
for(let key in circle){
    console.log(key);
}
```

​	Or we can use get all the keys in array

```javascript
const keys=Object.keys(circle);
```

​	To check if a property exist in an object

```
if('radius' in circle)
```



## 5.7 Hiding Private Members

In order to hide the implementation details, assign private methods, properties  using  `let` keyword instead of `this`. This will hide the inner members from outside

```javascript
function CreateCircle(radius){

 //private properties and methods
 let defaultLocation = {x:0, y:0};
 let calculateArea= function (){   
 }
 
 //public     
 this.radius = radius;
 this.draw = function(){
     conosole.log('in draw');
 }
}
```

## 5.8 Closure

Each time we create a new function, we also create a new scope. And since functions can be nested within one another, so too can our scope. The JavaScript compiler will always *look first in the local scope* for a variable name, and if unsuccessful will move up into any/all enclosing functions/scopes looking for the same variable, Outer scope encloses the inner hence **closure**



```javascript
function printNumbers() {

    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log("i=" + i);
        }, 1000 * i);
    };
}

printNumbers();
//[6,6,6,6,6]
```

To fix this, we can either use let keyword or use **Immediately invoked function expression** **(IIFE)****

IIFE allow us to execute functions immediately without polluting the global object. The syntax to create an IIFE is

```
 (function(){

})()
//the starting pair of brackets will make it an IIFE
//while the second set of brackets will allow to call this function

```



## 5.9 Get/Set 

To define getter and setter for private members,  we can use `Object.defineProperty` 

```javascript
function CreateCircle(){
 this.radius=1;
 let defaultLocation={x:0, y:0};
    
    //Object.defineProperty has three parameters  first the target object ,second the 		name of property, third the object with get set
    
    Object.defineProperty(this,'defaultLocation',{
        get:function(){
         return defaultLocation;   
        },
        set: function(value){
            defaultLocation=value;
        }
    });
   
}
```







