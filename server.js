// server.js - Versão Definitiva para Vercel

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares essenciais
app.use(cors());
app.use(express.json());

// Configuração do Nodemailer (não precisa mudar)
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_PORT == 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// A rota que vai receber os dados do formulário
// O vercel.json direciona /api/send-email para este arquivo,
// então a rota POST deve corresponder a isso.
app.get('/api/send-email', (req, res) => {
  const { name, email, message } = req.query;

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

  try {
    transporter.sendMail(mailOptions, (error, info) => {
    if (error) throw error;
    
    console.log('E-mail enviado: ' + info.response);
    return res.status(200).json({ success: true, message: 'E-mail enviado com sucesso!' });
    });
  }
  catch (error) {
    console.log('ERRO INTERNO NO NODEMAILER:', error);
    return res.status(500).json({ success: false, error: 'Falha ao enviar o e-mail.' });
  }
  
});

// Exportamos o 'app' para a Vercel poder usá-lo.
// NENHUM app.listen DEVE ESTAR AQUI.
module.exports = app;