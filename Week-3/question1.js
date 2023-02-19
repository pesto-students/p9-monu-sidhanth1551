
function add(n){
    let sum=0;
    for(a of n){
     console.log(a)
      sum+=a;
    }  
    return sum;
}


const memoize=(fun)=> {
   
     let cache={};
    return function (...args){
       let n=args;

       if(n in cache){
        console.log(cache);
        return cache[n];
       }
       else{
        let result = fun(n);
        cache[n]=result;
        console.log(cache);
        return result;
       }
    }
}




const memoizeAdd = memoize(add);

console.time();
console.log(memoizeAdd(100,200));
console.timeEnd();

console.time();
console.log(memoizeAdd(100,200));
console.timeEnd();
