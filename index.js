const nodemailer = require('nodemailer');
const path = require('path');

const transporter = nodemailer.createTransport({
  host: 'localhost',
  port: 1025,
  secure: false, // true for 465, false for other ports
  // auth: {
  //   user: '',
  //   pass: '',
  // },
});

// Specify the file path(s)
const filePath1 = path.join(__dirname, 'attachment1.txt');
const filePath2 = path.join(__dirname, 'attachment2.jpg');


// Send an email
transporter.sendMail({
  from: 'ozgursarikamis@sm.co.uk',
  to: 'sayin-yetkili@example.com',
  subject: 'Hello from SM',
  attachments: [
    { path: filePath1 },
    { path: filePath2 },
  ],
  html: '<img src="https://www.docker.com/wp-content/uploads/2023/08/logo-guide-logos-1.svg" alt="Alt Text" />',
}, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

