
const Calc = function(arr,val){

    for(let i=0;i<arr.length;i++){
        if(arr.includes(arr[i]+val)){
            return true
        }
    }

  return false
}

console.log(Calc( [5, 10, 3, 2, 50, 80],78));
console.log(Calc( [-10, 20] ,30));

