require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

const serverless = require('serverless-http')

const router = express.Router();
// const globalVariable        = require('./nodemon.js');
// const senderEmail = globalVariable.senderEmail;
// const senderEmailPwd = globalVariable.senderEmailPwd;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/',router);

router.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// app.post('/api/form',(req,res)=>{

//   var nodemailer = require('nodemailer');

//   var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//      user: process.env['REACT_APP_EMAIL'],
      // pass: process.env['REACT_APP_PWD']
     
//     }
//   });

//   let mailOptions = {
      
//       from   : '"Shiv Clinic" <shivclinic83@gmail.com>', // sender address
//       to     : req.body.email, // list of receivers
//       subject: req.body.subject, // Subject line
//       text   : req.body.text, // plain text body
//       html   : req.body.mail // html body
//     };

//   // transporter.sendMail(mailOptions, function(error, info){
//   //   if (error) {
//   //     console.log(error);
//   //   } else {
//   //     console.log('Email sent: ' + info.response);
//   //   }
//   // });
//   /**/
//   transporter.sendMail(mailOptions, (error, info) => {
//       console.log('in mail');
//       if (error) {
        
//         console.log("send mail error",error);
//         return "Failed";
//       }
//       if(info){
//         console.log('in info');
//         // return "Success";
//         res.status(200).json({ 
          
//           message: "Success",
//           // return "Success",
//         });
//       }
//       res.render('index');
//     });

//   // console.log('ress',req.body)


// }) 

// const PORT = 3001
const port = process.env['PORT'] || 3001;
  console.log(`Your port is ${port}`);

// app.listen(PORT,()=>{
//   // console.log('server listening on port ${PORT}')
//   console.log(`Your port is ${port}`);
// })
module.exports.handler = serverless(app);