// server.js - Versão CORRIGIDA para Vercel

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors()); // CORS continua sendo importante

// Configuração do Nodemailer (sem alterações)
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_PORT == 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// MUDANÇA 1: A rota agora é a raiz '/'. 
// O vercel.json já direciona '/api/send-email' para este arquivo,
// então para o Express, a requisição chega na raiz.
app.post('/api/send-email', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Todos os campos são obrigatórios.' });
  }

  const mailOptions = {
    from: `"Contato Site NETZ" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER,
    subject: `Novo Contato de ${name}`,
    html: `
      <h2>Nova mensagem recebida pelo site da NETZ:</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${message}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erro ao enviar o e-mail:', error);
      return res.status(500).json({ success: false, error: 'Falha ao enviar o e-mail.' });
    }
    console.log('E-mail enviado com sucesso:', info.response);
    res.status(200).json({ success: true, message: 'E-mail enviado com sucesso!' });
  });
});

// MUDANÇA 2: Removemos completamente o app.listen. A Vercel cuida de iniciar o servidor.
// app.listen(PORT, () => { ... }); // LINHAS APAGADAS

// MUDANÇA 3: Exportamos o 'app' para a Vercel poder usá-lo como uma função serverless.
module.exports = app;