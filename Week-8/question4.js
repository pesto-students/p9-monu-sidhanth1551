const parenthesisChecker = (str) => {

    let a = str.split('');
     
    let map = new Map();

    map.set(')','(');
    map.set('}','{');
    map.set(']','[');

    let map2 = new Map();

    map2.set('(',')');
    map2.set('{','}');
    map2.set('[',']');
    
    let stack =[];

    for(let i=0;i<a.length;i++){
         
        if(map2.has(a[i])){
            stack.push(a[i]);
        }
        else if(a[i]==')' || a[i]=='}' || a[i]==']'){
              let pair = map.get(a[i])
              if(stack[stack.length-1]==pair)
              stack.pop();
              else 
              return false
        }

    }

    if(stack.length==0)
    return true;
    else
    return false;
     

}



console.log(parenthesisChecker("{([])}"));//true
console.log(parenthesisChecker("([]"));//false
console.log(parenthesisChecker("([])"));//ture
console.log(parenthesisChecker("(([]}}"));//false