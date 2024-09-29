//object destructuring 
const actor={
    name:'Leo',
    age: 50,
    phone:'00129876',
    country:'USA'
}
//use property name as a variable that contains that property value
const {name,age:pg,phone}=actor
console.log(name);
console.log(phone);
console.log(pg);

//array destructuring
const numbers=[1,2,3,4,5]
const [f1,,f3]=numbers
console.log(f1,f3);

function doubleIT(n1,n2){
    return [n1*2,n2*2]
}
const [n,nn]=doubleIT(6,9)
console.log(n,nn);


