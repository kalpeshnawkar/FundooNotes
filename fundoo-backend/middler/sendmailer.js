var nodemailer = require('nodemailer');
function sendMailer(url,email,msg){
var transporter=nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.email,
      pass: process.env.password
    }
  })
  
  var mailOptions = {
    from: 'knawkar@gmail.com',
    to: email,
    subject: msg,
    text:url
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })
}
module.exports= {sendMailer
}