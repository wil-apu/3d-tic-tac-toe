import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          3D Tic Tac Toe
        </h1>
        
        <div className="space-y-4 text-gray-700">
          <p className="text-lg leading-relaxed">
            Bienvenido al <span className="font-semibold text-blue-600">3D Tic Tac Toe</span>, 
            una versión revolucionaria del clásico juego de tres en raya.
          </p>
          
          <p className="text-lg leading-relaxed">
            Este juego lleva el tradicional Tic Tac Toe a una <span className="font-semibold">dimensión adicional</span>, 
            creando una experiencia de juego completamente nueva y desafiante. Las reglas fundamentales 
            se mantienen iguales: conectar tres símbolos en línea para ganar.
          </p>
          
          <p className="text-lg leading-relaxed">
            Sin embargo, ahora puedes formar líneas ganadoras no solo horizontal y verticalmente en un 
            plano bidimensional, sino también a través de <span className="font-semibold text-purple-600">múltiples capas en el espacio tridimensional</span>.
          </p>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              Características:
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Juego en 3 dimensiones</li>
              <li>Mismas reglas clásicas del Tic Tac Toe</li>
              <li>Múltiples posibilidades de victoria</li>
              <li>Desafío estratégico aumentado</li>
            </ul>
          </div>

          <div className="mt-8 text-center text-gray-500 text-sm flex flex-col gap-2">
            <span>Creado por <span className="font-medium text-gray-700">wil-apu</span></span>
            <Link to="/secret" className="text-xs text-blue-300 hover:text-blue-500 transition-colors">
              Acceso Desarrollador
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
