const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: "d2687ad6",
  apiSecret: "Kc29bn6v2lJZCRTd"
});
 
 const  YOUR_VIRTUAL_NUMBER =" 7494002429"
// nexmo.message.sendSms(
//     YOUR_VIRTUAL_NUMBER, '15105551234', 'yo',
//       (err, responseData) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.dir(responseData);
//         }
//       }
//    );
   
 const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const server = app.listen(3000,()=>{
console.log("hhhh i am server")
});


app.post('/send', (req, res) => {
  // Send SMS
  nexmo.message.sendSms(
    YOUR_VIRTUAL_NUMBER, req.body.toNumber, req.body.message, {type: 'unicode'},
    (err, responseData) => {if (responseData) {console.log(responseData)}}
  );
});