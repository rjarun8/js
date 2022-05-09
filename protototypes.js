const a ={prop1:1}
const b={prop2:2}
const c = {prop3:3}

c.__proto__=b;
b.__proto__=a;

console.log(c.prop2)

console.log(Object.getPrototypeOf(b))

const f={prop5:5};
f.__proto__=null;


const i = {
    method1(){return "method1"}
}
const j = {
    method2(){return "method2"}
}

Object.setPrototypeOf(i,j)
console.log(i.method2())


function car(){
    this.fuel=100;
    this.wheels=4;
}

car.prototype.type="vehicle"
car.prototype.addFuel=function (amount){this.fuel +=amount}

const obj = new car()
const obj2 = new car()
obj.wheels = 6
obj2.wheels = 8




obj.type="space"
console.log('obj2 :', obj2.type);
console.log('obj :', obj.type);

console.log('obj2 :', obj2);
console.log('obj :', obj);

obj.addFuel(100);
console.log('obj2 :', obj2.fuel);
console.log('obj :', obj.fuel);

console.log(Object.getPrototypeOf(f))

const g = {x:100}
const h=Object.create(g)
console.log(Object.getPrototypeOf(h)); //similar to h.__proto__=g

Object.getPrototypeOf(obj2).hasOwnProperty('prop1')

function addOrDeleteProp(object, propertyName) {
	// write your code here
    if(object.hasOwnProperty(propertyName)){
        delete object[propertyName];
        
    }
    else{
        object[propertyName]='objects are cool';
        
    }
	return object;
}
