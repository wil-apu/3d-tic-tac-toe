export default function handler(req, res) {
  res.status(200).json({ 
    message: 'Hola desde una función Serverless en Vercel!',
    timestamp: new Date().toISOString()
  });
}
