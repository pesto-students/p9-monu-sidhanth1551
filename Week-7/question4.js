const stock = function(arr){
    
    if(arr == null || arr.length <= 1) 
    return 0;

let minBuy=arr[0];
let profit=0;

for(let i=1;i<arr.length;i++){
    minBuy=Math.min(minBuy,arr[i])
    profit=Math.max(profit,arr[i]-minBuy)
}
return profit;
}

console.log(stock([7,1,5,3,6,12]))