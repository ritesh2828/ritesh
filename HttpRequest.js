const https= require('https');


const options ={
    hostname:"https://jsonplaceholder.typicode.com/todos/1",
    // port :443,
    // path:"/todos",
    methode:'Get'
};
const req =https.request(options,(res)=>{
 console.log(`StatusCode:${res.statusCode}`);

 res.on(`data`,(d)=>{
      process.stdout.write(d);
 })
});


req.on(`error`, (error)=>{
 console.log(error);
})