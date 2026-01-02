import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SecretPage() {
  const [password, setPassword] = useState('');
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setData(null);

    try {
      const response = await fetch('/api/secret', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const result = await response.json();

      if (response.ok) {
        setData(result);
      } else {
        setError(result.error || 'Error desconocido');
      }
    } catch (err) {
      setError('Error de conexión. Asegúrate de que la API está disponible.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
        <div className="mb-6">
          <Link to="/" className="text-blue-500 hover:text-blue-700 text-sm font-medium">
            ← Volver al inicio
          </Link>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Área Restringida
        </h1>

        {!data ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Introduce la clave de acceso
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="••••••••"
                required
              />
            </div>

            {error && (
              <div className="p-3 bg-red-50 text-red-700 text-sm rounded-md border border-red-200">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 rounded-md text-white font-medium transition-colors ${
                loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {loading ? 'Verificando...' : 'Acceder'}
            </button>
            
            <p className="text-xs text-center text-gray-500 mt-4">
              Pista para demo: la clave es 1234
            </p>
          </form>
        ) : (
          <div className="space-y-4 animate-fade-in">
            <div className="p-4 bg-green-50 border border-green-200 rounded-md">
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                Acceso Autorizado
              </h3>
              <p className="text-green-700 mb-4">{data.secretData}</p>
              
              <div className="bg-white p-3 rounded border border-green-100 text-sm space-y-2">
                <p><span className="font-bold">Proyecto:</span> {data.details.codeName}</p>
                <p><span className="font-bold">Próxima función:</span> {data.details.nextFeature}</p>
                <p><span className="font-bold">Lanzamiento:</span> {data.details.launchDate}</p>
              </div>
            </div>
            
            <button
              onClick={() => { setData(null); setPassword(''); }}
              className="w-full py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md transition-colors"
            >
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
