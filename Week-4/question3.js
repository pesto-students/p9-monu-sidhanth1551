const number=7;
let n1=0, n2=1, nextTerm;

console.log("Fibonaci series..");

function numberIterators(number){
    console.log(n1);
    console.log(n2);
        return {

        next:function(){
            if(n2<number){
                nextTerm=n1+n2;
                n1=n2;
                n2=nextTerm;
                return {
                    value:nextTerm,
                    done:false

                }
            }
            else{
                return{
                    done:true
                }
            }
        }
    } 

}


const series = numberIterators(number);

console.log(series.next().value);
console.log(series.next().value);
console.log(series.next().value);
console.log(series.next().value);
console.log(series.next().value);
console.log(series.next().value);