import {Request, Response} from "express"
import nodemailer from "nodemailer"

export const contato = async (req: Request, res: Response)  => {
    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "3941891991dcf7",
          pass: "955c8c72f9aec3"
        }
      });

      let message = {
        from: req.body.from,
        to: "suport@gmail.com",
        subject: req.body.subject,
        html: req.body.html,
        text: req.body.text,
      }
    const send = await transport.sendMail(message)
    res.json({EmailEnviado: send})
}