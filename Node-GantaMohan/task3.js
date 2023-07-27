
const nodemailer = require('nodemailer');


const emailConfig = {
  service: 'gmail', // 'gmail'
  auth: {
    user: 'gantamohan.556@gmail.com',
    pass: 'CSE@2003',
  },
};

const transporter = nodemailer.createTransport(emailConfig);

const mailOptions = {
  from: 'gantamohan.556@gmail.com', 
  to: 'pravin.consensus@gmail.com', 
  subject: 'Test Email from Mohan Ganta..!!(20A21A0544)',
  text: 'Hello, This Is Mohan Ganta!',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurred while sending email:');
    console.log(error.message);
  } else {
    console.log('Email sent successfully:');
    console.log('Message ID: ', info.messageId);
    console.log('Preview URL: ', nodemailer.getTestMessageUrl(info));
  }
});
