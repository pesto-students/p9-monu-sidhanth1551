

var threeSumClosest = function(nums, target) {
      
    nums.sort((a,b)=>a-b)
    console.log(nums)
    let closest = Infinity;

    for(let i=0;i<nums.length-2;i++){
        let left=i+1;
        let right = nums.length-1;
        while(left<right){
           let localSum = nums[i]+nums[left]+nums[right];
           if(Math.abs(localSum-target)<Math.abs(closest-target))
           closest=localSum
           if(localSum>target)
           right--
           else
           left++
        }

    }

    return closest;



    
};

console.log(threeSumClosest([-1,2,1,-4],1))