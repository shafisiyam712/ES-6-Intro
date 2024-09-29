//function expression
const add=function(a,b){
    return a+b
}
// const s=add(7,9)
// console.log(s);

//arrow function
const add2=(a,b)=>a+b//implicit no return need
const sum=add2(6,9)
console.log(sum);

//single parameter 
const getAge=(person)=>person.age
const student={name:'rahim',age:45}
console.log(getAge(student));

// you can avoid bracket in this
const getThird=numbers=>numbers[2]
console.log(getThird([2,3,7,9,0,4,3]));

const doub=num=>num*2
console.log(doub(2));

//no parameter
const getPI=()=>Math.PI
console.log(getPI());

//large arrow function
//if you get result from it you have to use return because it is now not any implicit mood
const result=(x,y,z,m)=>{
    const ad=x+y;
    const mul=z*m;
    return mul-ad
}
console.log(result(2,4,5,3));



