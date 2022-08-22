const dosomethingAsync =()=>{
    return new Promise((resolve , reject)=>{
   setTimeout(()=>resolve("I did something"), 1000);
    });
};

const doSomething = async () => {
    console.log(await dosomethingAsync());
  };
  console.log("before")
  doSomething();
  console.log("after");

  