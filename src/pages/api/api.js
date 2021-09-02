const nodemailer = require('nodemailer')


export default function sendMail(req,res) {


    const {nome} = req.body.campos
    const {email} = req.body.campos
    const {mensagem} = req.body.campos

    const {telefone} = req.body.campos
    const {empresa} = req.body.campos
    const {segmento} = req.body.campos


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
        subject: `CONTATO ATRAVÉS DO SITE! ✔️`,  
        html: `
        <h3>Olá, meu nome é <strong>${nome}</strong> <br /> e-mail: <strong>${email}</strong> <br />telefone: ${telefone} <br /> empresa: ${empresa} <br /> segmento: ${segmento}</h3>  <br /> <p>Mensagem:</p> <br /> <p>${mensagem}</p>
        
        `
    }).then(
            transport.sendMail({
            from: process.env.MAIL_FROM,
            to: process.env.MAIL_FROM,
            replyTo: email,
            subject: `INterfac agradece seu contato ✔️`,
            html: `
            <h3>Olá <strong>${nome}!</strong>, agradecemos o interesse e em breve entraremos em contato. <br /></h3>
            
            `
        })
    ).then(response => {
        res.send(response)
    })
    
    .catch(error => [
        res.send(error)
    ])
  

}

