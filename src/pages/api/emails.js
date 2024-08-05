// pages/api/emails.js

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log('Resend API Key:', process.env.RESEND_API_KEY);

    try {
      await resend.emails.send({
        from: 'abhinav@edcults.com',
        to: 'abhinavnaman6@gmail.com',
        subject: 'SAIE - Request demo confirmed',
        text: 'Request demo confirmed',
      });
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);  // Log the error details
      res.status(500).json({ error: 'Failed to send email', details: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}






// pages/api/emails.js

// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     console.log('Resend API Key:', process.env.RESEND_API_KEY);

//     try {
//       await resend.emails.send({
//         from: 'abhinav@edcults.com',
//         to: 'abhinavnaman6@gmail.com',
//         subject: 'SAIE - Request demo confirmed',
//         text: 'Request demo confirmed',
//         html: `
//           <h1>Request Demo Confirmed</h1>
//           <p>Thank you for your request. We will get back to you soon.</p>
//           <p>Best regards,</p>
//           <p>The SAIE Team</p>
//           <img src="https://example.com/image.jpg" alt="Example Image" />
//         `,
//         attachments: [
//           {
//             filename: 'document.pdf',
//             content: Buffer.from('...').toString('base64'),
//             contentType: 'application/pdf',
//           },
//         ],
//         cc: ['cc@example.com'],
//         bcc: ['bcc@example.com'],
//         headers: {
//           'X-Custom-Header': 'Custom Value',
//         },
//       });
//       res.status(200).json({ message: 'Email sent successfully' });
//     } catch (error) {
//       console.error('Error sending email:', error);  // Log the error details
//       res.status(500).json({ error: 'Failed to send email', details: error.message });
//     }
//   } else {
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
// }