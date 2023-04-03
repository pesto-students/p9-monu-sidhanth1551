class Queue{

    constructor(){
        this.s1=[];
        this.s2=[];
    }

    enqueue(x){

        while(this.s1.length!=0){
            this.s2.push(this.s1.pop());
        }

        this.s1.push(x);
    //    console.log('s1',this.s1,x)
        while(this.s2.length!=0){
            this.s1.push(this.s2.pop()); 
        }
      //  console.log('b',this.s1)
    }

    deQueue(){
         
        if(this.s1.length==0)
        return -1;

        let x = this.s1[this.s1.length-1]
        this.s1.pop();

     //   console.log('a',this.s1)

        return x;
    }
}

let q = new Queue();

let queries = ["1 2", "1 3", "2", "1 4", "2"];


for (let i = 0; i < queries.length; i++) {
    let query_type = queries[i].split(" ")[0];
    if (query_type === "1") {
      let x = parseInt(queries[i].split(" ")[1]);
      q.enqueue(x);
    } else if (query_type === "2") {
      console.log(q.deQueue());
    }
  }

  //Output :  2 3