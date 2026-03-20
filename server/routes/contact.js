import express from 'express';
import nodemailer from 'nodemailer';
import Contact from '../models/Contact.js';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Create transporter for Nodemailer
const createTransporter = () => {
  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Save to database (if MongoDB is connected)
    try {
      const contact = new Contact({ name, email, message });
      await contact.save();
    } catch (dbError) {
      console.log('Database save skipped (MongoDB not connected):', dbError.message);
    }

    // Send email
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = createTransporter();
      
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Send to yourself
        replyTo: email,
        subject: `Portfolio Contact: ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log('✅ Email sent successfully');
    } else {
      console.log('⚠️ Email credentials not configured. Skipping email send.');
    }

    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });
  } catch (error) {
    console.error('❌ Contact form error:', error);
    res.status(500).json({ 
      error: 'Failed to send message. Please try again later.' 
    });
  }
});

export default router;

