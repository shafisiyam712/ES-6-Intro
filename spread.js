//spread operator to get the corret from of value
const max=Math.max(4,5,6,7,89,0,56)
console.log(max);//89
const arr=[4,5,6,7,89,0,56]
console.log(Math.max(arr));//nan
console.log(arr);
console.log(...arr);// return only value not with the array
console.log(Math.max(...arr));


//use spread operator to copy
const ar1=[1,2,3]
const ar2=[...ar1]
//const ar2=ar1
ar2.push(99)
console.log(ar2);
console.log(ar1);//we get the same value but we push otherone..coz it holds reference copy but if we use spread operator it dont hold

//we can add extra element while copy
const ar3=[...ar1,9,7,6,5]
console.log(ar3);

//copy in a middle
const ar4=[44,50,...ar1,90,66]
console.log(ar4);





