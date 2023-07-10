function createStack() {
    // Write your code here...
    var items=[];

    return {
        push(item){
            items.push(item);
            console.log(items);
        },
        pop(){
            items.pop();
            console.log(items);
        }
    }
}
const stack=createStack();
const stack2=createStack();

stack.push(10);
stack.push(5);
stack.pop();// => 5
stack.pop();// => 5
console.log(stack.items);// => undefined
stack.items=[1,2,3,4,5,6];
console.log(stack.items);// => undefined






