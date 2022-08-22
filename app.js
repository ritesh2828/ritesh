// create server
const { application } = require('express');
const express= require('express');
// const chalk = require('chalk');
const app= express();



// example of console.count() start
const x = 1
const y = 2
const z = 3
console.count(
  'The value of x is ' + x + 
  ' and has been checked .. how many times?'
)
console.count(
  'The value of x is ' + x + 
  ' and has been checked .. how many times?'
)
console.count(
  'The value of y is ' + y + 
  ' and has been checked .. how many times?'
)
// example of console.count() end

// start the count the element of array on
const oranges=['orange', 'orange',"ritesh"];
const apples=['just one apple'];
oranges.forEach((element)=>{
console.count(element,"OOranges");
});
apples.forEach((element)=>{
console.count(element, "AApples");
})

// End the count the element of array on
//Print the stack trace start
const function2=()=>{
    console.trace();
};
const function1=()=>{
    function2();
}
//Print the stack trace End
//caluclate the time spent start
/*const doSomething=()=>{
    console.log("test");

};
const measureDoingSomething=()=>{
    console.time("dosomething()");
    doSomething();
    console.timeEnd('doSomething()');
};
measureDoingSomething();*/
//caluclate the time spent End
// example of chalk npm package start


// example of chalk npm package end
// example of progress start
const ProgressBar = require('progress');
const bar = new ProgressBar(':bar', {total:100});
const timer= setInterval(()=>{
    bar.tick();
    if(bar.complete){
        clearInterval(timer);
    }
},100)
// example of progress End
// example of Accept input from the command line start
const readline=require('readline').createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question('what is your name ?', (name)=>{
console.log(`hi${name}`);
})
// example of Accept input from the command line end
// Promse example start
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
// Promse example End
// create server start
app.listen(8080,()=>{
    console.log("server ready");
    });
// create server end
