const express = require('express')
const database=require('./db')
const userSchema = require('./Model/userSchema')
const app = express();
const port =3000

app.listen(port, ()=>{
    console.log("welcome to server")
})
let arr=[9,3,6,54,20,11];
console.log("original",arr);
arr.sort();
console.log(arr)