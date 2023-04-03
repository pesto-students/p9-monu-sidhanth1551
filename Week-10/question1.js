class Node{

    constructor(val,left,right){
        this.data=val;
        this.left=left;
        this.right=right;
    }
}


class BT{

    constructor(){
        this.root=null;
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

    maxDepthofBT(root){

        if(root==null)
        return 0;

        let lDepth = this.maxDepthofBT(root.left);
        let rDepth = this.maxDepthofBT(root.right);

        if(lDepth>rDepth)
        return lDepth+1;
        else
        return rDepth+1;

    }

}

let bt = new BT()

let inputTree = [3,9,20,null,null,15,7]
let a =bt.insertLevelOrder(inputTree,0)

console.log('maxDepth is = ',bt.maxDepthofBT(a))
