const mongoose = require('mongoose');


 const url=`mongodb://0.0.0.0:27017/curd`

/*  create database connection with node js and mongoose database first method */
 const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //sslValidate: true,
}
mongoose.connect(url)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })  
/*  create datbase connection with node js and mongoose database first method end */
/*  create datbase connection with node js and mongoose database second method start */
// main().catch(err => console.log(err));

// async function  main() {
//   await mongoose.connect(`${url}`,()=>{
//     console.log("database done")
//   });
// }
/*  create datbase connection with node js and mongoose database second method end */

/* */
/* create schema in userSchema.js file mode folder */