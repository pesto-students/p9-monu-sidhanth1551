
function doTask1(str){
  
    return new Promise((resolve,reject)=> {
        if(str)
        resolve('doTask1 executed');
        else
        reject('string nahi hai');
    })
}

function doTask2(){

    return new Promise((resolve,reject)=>{
         
        resolve('doTask2 executed');
    })

}

function doTask3(){

    return new Promise((resolve,reject)=>{
         
        resolve('doTask3 executed');
    })

}

async function* generate(){
    
    yield doTask1('Hello World');
    yield doTask2();
    yield doTask3();

    console.log('All done');
}




async function main1(){
    
    for await( val of generate()){
        console.log(val);
    }
}

main1().catch((e)=>console.log(e));