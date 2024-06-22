// /pages/api/proxy.js
//added bec of CORS issue
export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const response = await fetch('https://api.saib.ai/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: req.body,
        });
  
        const data = await response.json();
        res.status(response.status).json(data);
      } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  