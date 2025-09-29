// server.js - Backend para o formulário de contato da NETZ

// 1. IMPORTAÇÃO DOS MÓDULOS NECESSÁRIOS
// Express: Framework que simplifica a criação do servidor.
// Nodemailer: Módulo para enviar e-mails.
// CORS: Middleware para permitir que seu site (frontend) se comunique com este servidor.
// dotenv: Para carregar variáveis de ambiente de um arquivo .env (mais seguro).
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config(); // Carrega as variáveis do arquivo .env

// 2. INICIALIZAÇÃO DO SERVIDOR
const app = express();
const PORT = process.env.PORT || 3000; // O servidor rodará na porta 3000

// 3. CONFIGURAÇÃO DOS MIDDLEWARES
// Permite que o servidor entenda dados enviados em formato JSON.
app.use(express.json());
// Habilita o CORS para que o seu site possa fazer requisições para este servidor.
app.use(cors());

// 4. CONFIGURAÇÃO DO SERVIÇO DE E-MAIL (NODEMAILER)
// Aqui, configuramos como o e-mail será enviado.
// Usaremos as credenciais que você colocará no arquivo .env.
// É mais seguro do que colocar seu e-mail e senha diretamente no código.
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,   // Ex: 'smtp.gmail.com'
  port: process.env.EMAIL_PORT,   // Ex: 587 (para TLS) ou 465 (para SSL)
  secure: process.env.EMAIL_PORT == 465, // true para porta 465, false para outras
  auth: {
    user: process.env.EMAIL_USER, // Seu endereço de e-mail
    pass: process.env.EMAIL_PASS, // Sua senha de aplicativo (importante!)
  },
});

// 5. DEFINIÇÃO DA ROTA (ENDPOINT) PARA RECEBER OS DADOS
// Criamos uma rota '/send-email' que vai "ouvir" por requisições do tipo POST.
// O formulário do seu site enviará os dados para este endereço.
app.post('/send-email', (req, res) => {
  // Extraímos os dados enviados pelo formulário (nome, email, mensagem).
  const { name, email, message } = req.body;

  // Verificação básica para garantir que os campos não estão vazios.
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Todos os campos são obrigatórios.' });
  }

  // Montamos o corpo do e-mail que será enviado.
  const mailOptions = {
    from: `"Contato Site NETZ" <${process.env.EMAIL_USER}>`, // Remetente
    to: process.env.EMAIL_RECEIVER, // Para quem o e-mail será enviado (você)
    subject: `Novo Contato de ${name}`, // Assunto do e-mail
    html: `
      <h2>Nova mensagem recebida pelo site da NETZ:</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${message}</p>
    `,
  };

  // Tentamos enviar o e-mail usando o transporter que configuramos.
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erro ao enviar o e-mail:', error);
      // Se der erro, enviamos uma resposta de falha para o frontend.
      return res.status(500).json({ success: false, error: 'Falha ao enviar o e-mail.' });
    }
    console.log('E-mail enviado com sucesso:', info.response);
    // Se der tudo certo, enviamos uma resposta de sucesso.
    res.status(200).json({ success: true, message: 'E-mail enviado com sucesso!' });
  });
});

// 6. INICIA O SERVIDOR
// O servidor começa a "ouvir" por requisições na porta definida.
app.listen(PORT, () => {
  console.log(`Servidor da NETZ rodando na porta ${PORT}`);
  console.log('Aguardando dados do formulário...');
});

