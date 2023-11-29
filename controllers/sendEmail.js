const nodemailer = require('nodemailer')

const sendEmail = async(req,res) => {

    let testAccount = await nodemailer.createTestAccount()

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'alex.jones@ethereal.email',
            pass: 'XyHsWdVma7g8mgB1wr'
        }
    });

    const info = await transporter.sendMail({
        from: '"Fred Foo" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello", // Subject line
        //stext: "Hello world", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    res.json(info)
}

module.exports = sendEmail