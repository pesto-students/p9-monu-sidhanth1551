class Node{

    constructor(val,left,right){
        this.data=val;
        this.left=left;
        this.right=right;
    }
}


class BST{

    constructor(){
        this.root=null;
        this.res=[];
    }


    inOrder(root){
         
        if(root==null)
        return;

        this.inOrder(root.left)
        this.res.push(root.data);
        this.inOrder(root.right);
    }

    
    insertLevelOrder(arr,i){
  
        let root = null;
  
        if(i<arr.length){
  
          root=new Node(arr[i]);
  
          root.left = this.insertLevelOrder(arr,(2*i)+1);
  
  
          root.right = this.insertLevelOrder(arr,(2*i)+2);
        }
        return root;
  
      }

      checkIsBst(){
          
         for(let i=0;i<this.res.length-2;i++){
                if(this.res[i]>this.res[i+1]){
                    return false;
                }
         }
         return true;
      }
}


let bt = new BST()

let inputTree = [2,1,3]

let a =bt.insertLevelOrder(inputTree,0)

 bt.inOrder(a)
 console.log(bt.checkIsBst(a));

