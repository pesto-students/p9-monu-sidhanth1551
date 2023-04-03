class Graph{

    constructor(){
        this.adjList={};
        this.noOfVertex=0;
    }

    addVertex(vertex){
        
        this.adjList[vertex]=[];
        this.noOfVertex++;
    }

    addEdge(vertexA, vertexB){

        if(!this.adjList[vertexA])
        this.addVertex(vertexA);

        if(!this.adjList[vertexB])
        this.addVertex(vertexB);
        
        if(!this.adjList[vertexA].includes(vertexB))
        this.adjList[vertexA].push(vertexB);
        if(!this.adjList[vertexB].includes(vertexA))
        this.adjList[vertexB].push(vertexA);
    }

    removeEdge(vertexA,vertexB){
        
        this.adjList[vertexA]=this.adjList[vertexA].filter(
            val => val!==vertexB
        );

        this.adjList[vertexB]=this.adjList[vertexB].filter(
            val => val!==vertexA
        );
    }

    removeVertex(vertex){
        const child = this.adjList[vertex];
        child.forEach(i => this.removeEdge(i,vertex));
        delete this.adjList[vertex];
        this.noOfVertex--;
    }

    bfs(){

        const firstNode = Object.keys(this.adjList)[0];
        const visitedNodes = new Set(...[firstNode]);
        const queue = [];

        while(queue.length>0){

            let currNode = queue.shift();

            for(let i=0;i<this.adjList[currNode].length;i++){
         
                const key = this.adjList[currNode][i].toString();
                if(!visitedNodes.has(key)){

                    visitedNodes.add(key);
                    queue.push(key);
                }



            }
        }
    }

    dfs(){

        const firstNode = Object.keys(this.adjList)[0];
        const visitedNodes = new Set(...[firstNode]);
        const stack = [];

        while(stack.length>0){

            let currNode = stack.pop();

            for(let i=0;i<this.adjList[currNode].length;i++){
         
                const key = this.adjList[currNode][i].toString();
                if(!visitedNodes.has(key)){

                    visitedNodes.add(key);
                    stack.push(key);
                }



            }
        }
    }


    checkPath(n,edges,source,destination){

        const List = {};

        for(let i=0;i<n;i++){
            const vertex1 = edges[i][0];
            const vertex2 = edges[i][1];
            
            if(!List[vertex1])
            List[vertex1]=[];

            if(!List[vertex2])
            List[vertex2]=[];

            List[vertex1].push(vertex2);
            List[vertex2].push(vertex1);

        }

  

        const stack = [source];
        const visited = [];
        visited[source]=true;


        while(stack.length>0){

            let currNode = stack.pop();
            if(currNode==destination)
            return true;

            for(let i=0;i<List[currNode].length;i++){
         
                const key = List[currNode][i].toString();
                if(!visited[key]){
                    stack.push(key);
                    visited[key]=true;
                }



            }
        }

        return false;
    }
}


let graph = new Graph();

console.log(graph.checkPath(3,[[0,1],[0,2],[3,5],[5,4],[4,3]],0,2));