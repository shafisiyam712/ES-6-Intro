const actor={
    name:'Leo',
    age: 50,
    phone:'00129876',
    country:'USA',
    money:20000,
}
//return properties
const prop=Object.keys(actor)
console.log(prop);
//return values
const val=Object.values(actor)
console.log(val);
//return a two dimentional array
const pair=Object.entries(actor)
console.log(pair);

//deleting a prop and return a new object rest
const {country,...rest}=actor
console.log(rest);

//seal dont allow adding but allow updating
Object.seal(actor)
actor.love='none'
actor.money=3500000
console.log(actor);

//freeze dont allow anything
Object.freeze(actor);

