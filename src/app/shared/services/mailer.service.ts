import { Injectable } from '@angular/core';
import * as nodemailer from 'nodemailer';

@Injectable({
  providedIn: 'root'
})
export class MailerService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.initMailer();
  }

  private initMailer() {
    // this.transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: 'lokeshpui@gmail.com', // Replace with your Gmail email
    //     pass: '16DanteAve' // Replace with your Gmail app password or actual password
    //   }
    // });
  }

  sendMail(name: string, email: string, message: string): Promise<any> {
    const mailOptions: nodemailer.SendMailOptions = {
      from: email,
      to: 'lokeshui16@gmail.com', // Replace with the email address where you want to receive form submissions
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    return this.transporter.sendMail(mailOptions);
  }
}

