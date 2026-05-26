import { Link } from 'react-router-dom';
import { Gamepad2, Trophy, Zap } from 'lucide-react';

export default function GamesHubPage() {
  const games = [
    {
      id: 'pacman',
      title: 'Pac-Man',
      description: 'Classic arcade maze game. Eat all dots while avoiding ghosts!',
      icon: '👻',
      path: '/games/pacman',
      difficulty: 'Medium',
      color: 'from-yellow-400 to-orange-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 rounded-full mb-4 shadow-lg">
            <Gamepad2 className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-bold text-purple-600">Games Hub</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
            Play & Have Fun
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Take a break from calculators and enjoy classic games. Free, no ads in gameplay, instant fun.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <Link
              key={game.id}
              to={game.path}
              className="group block bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden border-2 border-transparent hover:border-purple-300"
            >
              <div className={`h-48 bg-gradient-to-br ${game.color} flex items-center justify-center text-8xl`}>
                {game.icon}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{game.title}</h3>
                  <span className="px-2 py-1 text-xs font-bold bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full">
                    {game.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{game.description}</p>
                <div className="flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all">
                  <Zap className="h-4 w-4" />
                  Play Now →
                </div>
              </div>
            </Link>
          ))}

          <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 flex flex-col items-center justify-center text-center border-2 border-dashed border-gray-300 dark:border-gray-600">
            <Trophy className="h-12 w-12 text-gray-400 mb-3" />
            <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300">More Coming Soon</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Snake, Tetris, 2048, Memory Match...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
