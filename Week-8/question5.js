const nextGreaterElement=(arr)=> {
      
    let len = arr.length;

    const resArr = new Array(len).fill(-1);

    let stack =[];

   
    
    for(let i=len-1;i>=0;i--){

       if(stack.length!=0){

          
        while(stack.length>0 && stack[stack.length-1]<=arr[i]){
            stack.pop();
        }
          

       }

       resArr[i]=stack.length==0?-1:stack[stack.length-1];
       stack.push(arr[i])
       
    }

    console.log(resArr);
     
}

nextGreaterElement([1,3,2,4])//[ 3, 4, 4, -1 ]
nextGreaterElement([ 11, 13, 21, 3 ])//[ 13, 21, -1, -1 ]
