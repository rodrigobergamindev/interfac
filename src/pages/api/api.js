const nodemailer = require('nodemailer')


export default function sendMail(req,res) {

    res.send('tá chegando')


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
        to: email,
        subject: `Obrigado pelo interesse!`,
        html: `<h1>Olá ${nome}, desde já agradecemos o seu interesse, recebemos os seus dados e em breve entraremos em contato!</h1>`
    }).then(response => {
        if(response) {
            transport.sendMail({
                from: process.env.MAIL_FROM,
                to: process.env.MAIL_FROM,
                replyTo: email,
                subject: 'CONTATO ATRAVÉS DO SITE ✔️ ',
                html: `<h1>Olá, meu nome é <strong>${nome}</strong>, e-mail: <strong>${email}</strong>, telefone: ${telefone}, empresa: ${empresa}, segmento: ${segmento}  <br /> <p>${mensagem}</p>`
            })
        }
        res.send(response)
    }).catch(error => [
        res.send(error)
    ])
  

}

