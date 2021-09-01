const nodemailer = require('nodemailer')


export default function sendMail(req,res) {


    const {nome} = req.body.campos
    const {email} = req.body.campos
    const {mensagem} = req.body.campos

    const {telefone} = req.body.campos
    const {empresa} = req.body.campos
    const {segmento} = req.body.campos

    console.log(req.body.campos)
    console.log(process.env.MAIL_HOST)

    const transport = nodemailer.createTransport({

        
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    transport.sendMail({
        from: process.env.MAIL_FROM,
        to: process.env.MAIL_FROM,
        replyTo: email,
        subject: `Obrigado pelo interesse!`,
        html: `
        <h3>Olá, meu nome é <strong>${nome}</strong> <br /> e-mail: <strong>${email}</strong> <br />telefone: ${telefone} <br /> empresa: ${empresa} <br /> segmento: ${segmento}</h3>  <br /> Mensagem: <br /> <p>${mensagem}</p>
        
        `
    }).then(response => {
        res.send(response)
    }).catch(error => [
        res.send(error)
    ])
  

}

