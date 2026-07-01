import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Initialize the Resend SDK using the hidden environment variable key
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 1. Security Check: Block everything that isn't a POST request
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // 2. Destructure the incoming JSON payload sent from your TSX form
    const { name, company, email, asset, scope } = req.body;

    // 3. Trigger the email transmission using your newly verified subdomain
    // FIX: Destructure { data, error } directly from the response
    const { data, error } = await resend.emails.send({
      from: 'Website Form <info@mail.divinityconsult.org>', 
      to: ['hello@divinityconsult.org'], 
      replyTo: email, 
      subject: `⚡ New Project Brief from ${name} (${company})`,
      html: `
        <div style="font-family: monospace; padding: 20px; background-color: #F6F7F8; color: #000; border: 1px solid #000;">
          <h2 style="text-transform: uppercase; border-bottom: 2px solid #000; padding-bottom: 10px;">§ New Website Enquiry</h2>
          <p><strong>Client Name:</strong> ${name}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Contact Email:</strong> ${email}</p>
          <p><strong>Asset / Location:</strong> ${asset}</p>
          <br />
          <p><strong>SCOPE OF WORK:</strong></p>
          <div style="background: #fff; padding: 15px; border: 1px dashed #000; white-space: pre-wrap;">${scope}</div>
        </div>
      `,
    });

    // Handle Resend API level issues (like an invalid domain or blocked account)
    if (error) {
      return res.status(400).json({ error: error.message });
    }

    // 4. Return success back to your frontend React code
    // data.id will now resolve perfectly because 'data' is typed correctly by the SDK
    return res.status(200).json({ success: true, id: data?.id });

  } catch (error: any) {
    // If anything fails (e.g. wrong API key), return the error status safely
    return res.status(500).json({ error: error.message });
  }
}