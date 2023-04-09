require('dotenv').config()
const PASSWORD = process.env.password

export default function Contact (req, res) {
    require('dotenv').config()
    
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: 'rvksumabana@gmail.com',
        pass: process.env.password,
      },
      secure: true,
    })
    const mailData = {
      from: req.body.email,
      to: 'rvksumabana@gmail.com',
      subject: `Message From ${req.body.name}`,
      html: `<div>New Inquiry :- </div><div><p>Mobile Number: ${req.body.mobile}</p></div><p>Email:
      ${req.body.email}</p>`
    }
    const mailDataRecieve = {
        from: 'rvksumabana@gmail.com',
        to: req.body.email,
        subject: `Message From RVK Sumabana`,

        html: `<div><p>Thank you for reaching Us. We will get back to you in a moment</p></div>`
      }
    transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })

    transporter.sendMail(mailDataRecieve, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info)
      })
    res.status(200)
  }