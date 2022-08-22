const http = require('http');


const port= process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
 res.statusCode =200;
 res.setHeader('content-Type' ,'text/html');
 res.end("<h1>create server using HTTP createServer function</h1>")
});

server.listen(port, ()=>{
    console.log(`server running at port ${port}` )
})