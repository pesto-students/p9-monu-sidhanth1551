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

    }

    removeEdge(vertexA,vertexB){
        
        this.adjList[vertexA]=this.adjList[vertexA].filter(
            val => val!==vertexB
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



    checkAllPath(edges) {
        const nodes = edges.length;
        const list = {};
        for (let i = 0; i < nodes; i++) {
          for (let j = 0; j < edges[i].length; j++) {
            const vertex = edges[i][j];
            if (!list[i]) list[i] = [];
            list[i].push(vertex);
          }
        }
        const target = nodes - 1;
        const res = [];
        const DFS = (node, path) => {
          path.push(node);
          if (node === target) {
            res.push(path);
            return;
          }
          for (let edge of list[node]) {
            if (!path.includes(edge)) {
              DFS(edge, [...path]);
            }
          }
        };
        DFS(0, []);
        return res;
      }
    
      

      
}


let graph = new Graph();

console.log(graph.checkAllPath([[1,2],[3],[3],[]]));
console.log(graph.checkAllPath([[4,3,1],[3,2,4],[3],[4],[]]));