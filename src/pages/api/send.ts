import Joi from 'joi';
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_SENDER,
    pass: process.env.PASSWORD_SENDER,
  },
});

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  message: Joi.string().required(),
});

export default async function send(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Valider les données du formulaire
    const { name, email, message } = await schema.validateAsync(req.body);

    // Envoyer le mail
    await transporter.sendMail({
      from: process.env.EMAIL_SENDER,
      to: 'antoinelefrancq.pro@gmail.com',
      subject: 'Nouveau message de votre site web',
      html: `
        <p>Nom: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    });

    // Retourner une réponse réussie
    return res.status(200).json({ success: true });
  } catch (error:any) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
}