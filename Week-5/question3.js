
const hasDuplicate= (arr)=> {
    return new Set(arr).size!==arr.length;
   }
const v= hasDuplicate([1,5,6,4])

console.log(v);