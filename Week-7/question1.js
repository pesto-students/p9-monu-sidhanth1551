var maxSubArray = function(nums) {
     
    var maxSum=nums[0];
    var currSum=0;
     
      for(let i=0; i<nums.length;i++){
          currSum+=nums[i];
          if(currSum>maxSum)
          maxSum=currSum;

          if(currSum<0)
          currSum=0;
      }
 
    return maxSum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))