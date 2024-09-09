const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail')

const sendEmailEthereal = async(req,res) =>{
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'armando.renner52@ethereal.email',
            pass: 'F9vaxhStFQ2UTf6VFQ'
        }
    });

    let info = await transporter.sendMail({
        from:'"Flavius" <flavius.paltin@yahoo.com>',
        to:'flaviusp23@yahoo.com',
        subject:'Test Email',
        html:'<h2>Sending emails with Node.js</h2>'
    });
    res.json(info)
}

const sendEmail = async(req,res) =>{
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: 'flavius.paltin@yahoo.com', // Change to your recipient
        from: 'flaviuspaltin599@gmail.com', // Change to your verified sender
        subject: 'Email de Test. Oare merge?',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    const info = await sgMail.send(msg)
    res.json(info)
    }

module.exports = sendEmail