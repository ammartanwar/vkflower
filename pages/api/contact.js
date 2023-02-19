require('dotenv').config()
const PASSWORD = process.env.password

export default function (req, res) {
    require('dotenv').config()
    
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: 'ammartanwar60@gmail.com',
        pass: process.env.password,
      },
      secure: true,
    })
    const mailData = {
      from: req.body.email,
      to: 'ammartanwar60@gmail.com',
      subject: `Message From ${req.body.name}`,
      html: `<div>New Inquiry :- </div><div><p>Mobile Number: ${req.body.mobile}</p></div><p>Email:
      ${req.body.email}</p>`
    }
    const mailDataRecieve = {
        from: 'ammartanwar60@gmail.com',
        to: req.body.email,
        subject: `Message From VkFlora`,

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