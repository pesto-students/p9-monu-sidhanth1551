const findJudge = (n,trust)=> {
  
    const trustedBy = new Array(n+1).fill(0);
    const trusts =    new Array(n+1).fill(0);

    for(const[a,b] of trust){

        trusts[a]++;
        trustedBy[b]++;
    }

    for(let i=1;i<=n;i++){
     
        if(trustedBy[i]===n-1 && trusts[i]===0)

        return i;

    }

    return -1;

}

console.log(findJudge(2, [[1,2]])); // Output: 2
console.log(findJudge(3, [[1,3],[2,3]])); // Output: 3
console.log(findJudge(3, [[1,3],[2,3],[3,1]])); // Output: -1