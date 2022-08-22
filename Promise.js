const data = require('./data')
let done = true;

const isItDoneyest = new Promise((resolve, reject)=>{
 if(done){
    const workDone = 'Here is the theing I built';
    resolve(workDone);
 }
 else{
    const why ='still working on something else';
    reject(why);
 }
})
 const chechkIftsDone = ()=>{
    isItDoneyest.then((ok)=>{
        console.log(ok);
    })
    .catch((err)=>{
        console.log(err)
    })
 }
 chechkIftsDone()
 // start the using file stystem with promise handle start
 const fs = require('fs');
  const getFile = (fileName)=>{
  return new Promise((resolve, reject)=>{
    fs.readFile(fileName,(err,data)=>{
    if(err){
        reject(err);
        return;
    }
    resolve(data)
    })
    
  })
  } 
  getFile('./data.js')
  .then((data)=>{console.log("data", data.toString())})
  .catch((err)=>{console.log(err)})
 // start the using file stystem with promise handle end

 // start the example of chaning Promise start
 const status = response => {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    }
    return Promise.reject(new Error(response.statusText));
  };
  
  const json = response => response.json()
  
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(status) // note that the `status` function is actually **called** here, and that it **returns a promise***
    .then(json) // likewise, the only difference here is that the `json` function here returns a promise that resolves with `data`
    .then(data => {
      // ... which is why `data` shows up here as the first parameter to the anonymous function
      console.log('Request succeeded with JSON response', data);
    })
    .catch(error => {
      console.log( error);
    });
 // start the example of chaning Promise end