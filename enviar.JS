const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Configuração do body-parser para processar os dados enviados no corpo da requisição
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/enviar-email', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  // Configurações de envio de e-mail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'seu_email@gmail.com', // substitua pelo seu e-mail de envio
      pass: 'sua_senha_do_email' // substitua pela senha do seu e-mail de envio
    }
  });

  const mailOptions = {
    from: email,
    to: 'faclubedocarlinhos@gmail.com',
    subject: 'Nova mensagem do site',
    text: `Nome: ${name}\nEmail: ${email}\n\nMensagem: ${message}`
  };

  // Envia o e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('<h2>Ocorreu um erro ao enviar a mensagem.</h2>');
    } else {
      console.log('E-mail enviado: ' + info.response);
      res.send('<h2>Mensagem enviada com sucesso!</h2>');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
