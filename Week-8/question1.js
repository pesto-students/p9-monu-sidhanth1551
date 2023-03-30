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

    reverse(){
        let prev=null;
        let current=this.head;
        let next=null;

        while(current!=null){
            next = current.nextPointer;
            current.nextPointer=prev;
            prev=current;
            current=next;
        }

        this.head=prev
        return this.head;
    }
}

const ll = new LinkedList();

ll.prepend(5)
ll.prepend(4)
ll.prepend(3)
ll.prepend(2)
ll.insertAt(10,4)
ll.append(7)
// ll.append(6)
ll.printList();
ll.reverse();
ll.printList();