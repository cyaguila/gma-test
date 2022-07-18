/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import nodemailer from 'nodemailer'

export default function (req, res) {
    // console.log(req.body)
    const transporter = nodemailer.createTransport({
        port: 465,
        host: 'smtp.gmail.com',
        auth: {
            user: 'emailclienttestgma@gmail.com',
            pass: 'egndtgsnoqslhsdd'
        },
        secure: true,
    })

     const mailData = {
        from: 'emailclienttestgma@gmail.com',
        // to: req.body.companyEmail,
        to: 'cynthia@getmyauto.com',
        subject: `Message from ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div> ${req.body.message}</div> <p>Sent from: ${req.body.email}</p>`
     }

     transporter.sendMail(mailData, (err, info) => {
        if (err)
        {
            console.log(err)
            res.end()
        }
        else{
            console.log(info)
        }
     })

     res.send(200)

}