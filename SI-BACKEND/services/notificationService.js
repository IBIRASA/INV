const nodemailer = require('nodemailer');
require('dotenv').config();

const notifyFinanceManager = (request) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'angeiracyadukunda@gmail.com',
        subject: 'New Product Request',
        text: `A new product request has been created`
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending notification:', error);
                reject(error);
            } else {
                console.log('Notification sent:', info.response);
                resolve(info);
            }
        });
    });
};

module.exports = { notifyFinanceManager };
