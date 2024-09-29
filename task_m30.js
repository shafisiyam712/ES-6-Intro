//4
const combine=(a,b)=>{
 const c=[...a,...b]
 return Math.max(...c)
}
const a=[1,3,5,7]
const b=[2,4,6,8]
console.log(combine(a,b));

//3
const sqrsumavg=(a)=>{
    const arr=[]
    for(const e of a){
        const r=e*e
        arr.push(r)
    }
    s=0
    for(const ee of arr){
        s=s+ee
    }
    return s/(arr.length).toFixed(2)
}
const arr=[1,2,3]
console.log(sqrsumavg(arr));


//2
const evenName=(name)=>{
    const even=[]
    for(const n of name){
        if((n.length)%2==0){
            even.push(n)
        }
    }
    return even
}
const name=['siyam','rizu','yeamin','srabon','moallim','joni']
console.log(evenName(name));
