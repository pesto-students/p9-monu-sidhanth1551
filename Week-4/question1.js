function getNumber(){
    return Math.random() * 100;
}

const myPromise = new Promise(function (resolve,reject){
 let divisor =5;
 let x= Math.round(getNumber());
 console.log(x);
  if(x%divisor!=0){
    resolve('OK');
  }
  else{ 
    reject('ERROR');
  }
  
})
myPromise.then(
    (value) => console.log(value),
)
.catch(
    (error) => console.log(error),
)
