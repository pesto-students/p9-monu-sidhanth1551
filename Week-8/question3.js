class Node{

    constructor(val,nextPointer){
       this.val=val;
       this.nextPointer=nextPointer;
    }


}

class LinkedList{
     
    constructor(){
        this.head=null;
        this.size=0;
    }

    prepend(element){
        const newNode = new Node(element);
        newNode.nextPointer=this.head
        this.head=newNode

        this.size++

    }

    append(element){
        const newNode = new Node(element);

        if(this.head===null){
            this.head=newNode;
            return;
        }

        let tail = this.head;

        while(tail.nextPointer != null){
            tail = tail.nextPointer;
        }

        tail.nextPointer=newNode;

        this.size++;

    }

    insertAt(element,index){
        const newNode = new Node(element,null);

        if(this.length()<index || index<0){
            console.log('Error')
            return
        }
        if(this.length()===index){
            this.append(element)
            return
        }
        if(0===index){
            this.prepend(element)
            return
        }
         
        let temp = this.head;
      
        for(let i=0;i<index-1;i++){
            temp=temp.nextPointer;
        }

        newNode.nextPointer=temp.nextPointer;
        temp.nextPointer=newNode
        
        this.size++;
    }

    printList(){
        let arr=['HEAD']

        let temp = this.head;

        while(temp!=null){
            arr.push(temp.val);
            temp = temp.nextPointer;
        }
        arr.push('NULL')
        console.log(arr.join(' --> '));
        return;
    }
    
    length(){
        return this.size;
    }

    isItLooped(k){
        //here we are taking parameter to connect our last node to Kth node passed. So that we can solve the problem
        let temp=null;
        if(k>0){
           temp = this.head;
        }
        while(k>0){
           temp=temp.nextPointer;
           k--;
        }

        let tail = this.head;

        while(tail.nextPointer){
            tail=tail.nextPointer;
        }
        
        //here we are creating a loop by connecting last node to Kth node.
        tail.nextPointer=temp;


        //below code is to detect loop.

        let slow=this.head;
        let fast=this.head;

        while(fast && fast.nextPointer){

            slow=slow.nextPointer;
            fast=fast.nextPointer.nextPointer;
            
            console.log(fast,'a',slow)

            if(fast===slow){
                return true;
            }
        }
       
        return false;

    }
}

const ll = new LinkedList();

ll.prepend(4)
ll.prepend(3)
ll.prepend(1)
ll.printList();
//Here below we are passing Kth node as 1 where we connect our last node with this Kth node and create a loop. and then we check if loop exists.
console.log(ll.isItLooped(1));//true
