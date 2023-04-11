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

    getLevelOrder(root){

        let queue=[];
        let finalResArr=[];
        

        queue.push(root);

        while(queue.length>0){
            let resArr=[];
            let node =queue.shift()
            if(node.data!=null)
            resArr.push(node.data);

            if(node.left)
            queue.push(node.left);
            if(node.right)
            queue.push(node.right)
            
            if(resArr.length>0)
            finalResArr.push(resArr)
        }

        return finalResArr;
    }
}

let bt = new BT()

let inputTree = [3,9,20,null,null,15,7]
let a =bt.insertLevelOrder(inputTree,0)

console.log(bt.getLevelOrder(a));

