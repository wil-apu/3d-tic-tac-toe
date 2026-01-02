export default function handler(req, res) {
  // En producción en Vercel, configurarás la variable de entorno SECRET_KEY
  // En local o si no está configurada, usamos '1234' como fallback para pruebas
  const CORRECT_KEY = process.env.SECRET_KEY || '1234';

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { password } = req.body;

  if (password === CORRECT_KEY) {
    return res.status(200).json({ 
      authorized: true,
      secretData: "🚀 ¡Felicidades! Has accedido a la información clasificada del proyecto.",
      details: {
        codeName: "Project Tesseract",
        nextFeature: "Modo multijugador online en tiempo real",
        launchDate: "2026"
      }
    });
  } else {
    return res.status(401).json({ 
      authorized: false, 
      error: 'Clave incorrecta. Acceso denegado.' 
    });
  }
}
