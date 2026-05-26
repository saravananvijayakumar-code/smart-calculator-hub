import { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CELL = 20;
const ROWS = 21;
const COLS = 21;

// 0=wall, 1=dot, 2=empty, 3=power pellet
const MAZE: number[][] = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0],
  [0,3,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,3,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
  [0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0],
  [0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0],
  [0,0,0,0,1,0,0,0,0,2,0,2,0,0,0,0,1,0,0,0,0],
  [0,0,0,0,1,0,2,2,2,2,2,2,2,2,2,0,1,0,0,0,0],
  [0,0,0,0,1,0,2,0,0,2,2,2,0,0,2,0,1,0,0,0,0],
  [2,2,2,2,1,2,2,0,2,2,2,2,2,0,2,2,1,2,2,2,2],
  [0,0,0,0,1,0,2,0,0,0,0,0,0,0,2,0,1,0,0,0,0],
  [0,0,0,0,1,0,2,2,2,2,2,2,2,2,2,0,1,0,0,0,0],
  [0,0,0,0,1,0,2,0,0,0,0,0,0,0,2,0,1,0,0,0,0],
  [0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0],
  [0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0],
  [0,3,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,3,0],
  [0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0],
  [0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0],
  [0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

type Dir = 'up' | 'down' | 'left' | 'right';
interface Ghost { x: number; y: number; dir: Dir; color: string; scared: boolean; }

function getInitialDots() {
  const dots: boolean[][] = [];
  for (let r = 0; r < ROWS; r++) {
    dots[r] = [];
    for (let c = 0; c < COLS; c++) {
      dots[r][c] = MAZE[r][c] === 1 || MAZE[r][c] === 3;
    }
  }
  return dots;
}

function countDots(dots: boolean[][]) {
  let count = 0;
  for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) if (dots[r][c]) count++;
  return count;
}

export default function PacManGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [started, setStarted] = useState(false);

  const pacRef = useRef({ x: 10, y: 15, dir: 'right' as Dir, nextDir: 'right' as Dir, mouthOpen: true });
  const ghostsRef = useRef<Ghost[]>([
    { x: 9, y: 9, dir: 'up', color: '#ff0000', scared: false },
    { x: 10, y: 9, dir: 'up', color: '#ffb8ff', scared: false },
    { x: 11, y: 9, dir: 'down', color: '#00ffff', scared: false },
    { x: 10, y: 10, dir: 'left', color: '#ffb852', scared: false },
  ]);
  const dotsRef = useRef(getInitialDots());
  const scoreRef = useRef(0);
  const livesRef = useRef(3);
  const powerRef = useRef(0);
  const frameRef = useRef(0);
  const animRef = useRef<number>(0);

  const canMove = (x: number, y: number) => {
    if (x < 0 || x >= COLS || y < 0 || y >= ROWS) return true; // tunnel
    return MAZE[y][x] !== 0;
  };

  const move = useCallback((obj: { x: number; y: number; dir: Dir }, dir: Dir) => {
    let nx = obj.x, ny = obj.y;
    if (dir === 'left') nx--;
    if (dir === 'right') nx++;
    if (dir === 'up') ny--;
    if (dir === 'down') ny++;
    // Tunnel wrap
    if (nx < 0) nx = COLS - 1;
    if (nx >= COLS) nx = 0;
    if (ny < 0) ny = ROWS - 1;
    if (ny >= ROWS) ny = 0;
    if (canMove(nx, ny)) { obj.x = nx; obj.y = ny; return true; }
    return false;
  }, []);

  const resetPositions = () => {
    pacRef.current = { x: 10, y: 15, dir: 'right', nextDir: 'right', mouthOpen: true };
    ghostsRef.current = [
      { x: 9, y: 9, dir: 'up', color: '#ff0000', scared: false },
      { x: 10, y: 9, dir: 'up', color: '#ffb8ff', scared: false },
      { x: 11, y: 9, dir: 'down', color: '#00ffff', scared: false },
      { x: 10, y: 10, dir: 'left', color: '#ffb852', scared: false },
    ];
  };

  const startGame = () => {
    setScore(0); setLives(3); setGameOver(false); setWon(false); setStarted(true);
    scoreRef.current = 0; livesRef.current = 3; powerRef.current = 0;
    dotsRef.current = getInitialDots();
    resetPositions();
  };

  const gameLoop = useCallback(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    frameRef.current++;
    const pac = pacRef.current;
    const ghosts = ghostsRef.current;

    // Move pac-man every 8 frames
    if (frameRef.current % 8 === 0) {
      pac.mouthOpen = !pac.mouthOpen;
      if (canMove(pac.x + (pac.nextDir === 'right' ? 1 : pac.nextDir === 'left' ? -1 : 0),
                  pac.y + (pac.nextDir === 'down' ? 1 : pac.nextDir === 'up' ? -1 : 0))) {
        pac.dir = pac.nextDir;
      }
      move(pac, pac.dir);

      // Eat dot
      if (pac.y >= 0 && pac.y < ROWS && pac.x >= 0 && pac.x < COLS && dotsRef.current[pac.y][pac.x]) {
        const isPower = MAZE[pac.y][pac.x] === 3;
        dotsRef.current[pac.y][pac.x] = false;
        scoreRef.current += isPower ? 50 : 10;
        setScore(scoreRef.current);
        if (isPower) {
          powerRef.current = 60;
          ghosts.forEach(g => g.scared = true);
        }
        if (countDots(dotsRef.current) === 0) { setWon(true); return; }
      }
    }

    // Move ghosts every 10 frames
    if (frameRef.current % 10 === 0) {
      if (powerRef.current > 0) powerRef.current--;
      if (powerRef.current === 0) ghosts.forEach(g => g.scared = false);

      ghosts.forEach(g => {
        const dirs: Dir[] = ['up', 'down', 'left', 'right'];
        const opposite: Record<Dir, Dir> = { up: 'down', down: 'up', left: 'right', right: 'left' };
        const valid = dirs.filter(d => {
          if (d === opposite[g.dir]) return false;
          let nx = g.x, ny = g.y;
          if (d === 'left') nx--; if (d === 'right') nx++; if (d === 'up') ny--; if (d === 'down') ny++;
          if (nx < 0) nx = COLS - 1; if (nx >= COLS) nx = 0;
          if (ny < 0) ny = ROWS - 1; if (ny >= ROWS) ny = 0;
          return canMove(nx, ny);
        });
        if (valid.length > 0) {
          g.dir = valid[Math.floor(Math.random() * valid.length)];
        }
        move(g, g.dir);
      });

      // Collision check
      ghosts.forEach(g => {
        if (g.x === pac.x && g.y === pac.y) {
          if (g.scared) {
            g.x = 10; g.y = 9; g.scared = false;
            scoreRef.current += 200;
            setScore(scoreRef.current);
          } else {
            livesRef.current--;
            setLives(livesRef.current);
            if (livesRef.current <= 0) { setGameOver(true); return; }
            resetPositions();
          }
        }
      });
    }

    // Draw
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, COLS * CELL, ROWS * CELL);

    // Maze
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if (MAZE[r][c] === 0) {
          ctx.fillStyle = '#1a1a6e';
          ctx.fillRect(c * CELL, r * CELL, CELL, CELL);
          ctx.strokeStyle = '#3333cc';
          ctx.strokeRect(c * CELL + 1, r * CELL + 1, CELL - 2, CELL - 2);
        }
        if (dotsRef.current[r][c]) {
          ctx.fillStyle = '#ffff00';
          const size = MAZE[r][c] === 3 ? 5 : 2;
          ctx.beginPath();
          ctx.arc(c * CELL + CELL / 2, r * CELL + CELL / 2, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // Pac-Man
    ctx.fillStyle = '#ffff00';
    ctx.beginPath();
    const px = pac.x * CELL + CELL / 2;
    const py = pac.y * CELL + CELL / 2;
    const angle = pac.dir === 'right' ? 0 : pac.dir === 'down' ? Math.PI / 2 : pac.dir === 'left' ? Math.PI : -Math.PI / 2;
    const mouth = pac.mouthOpen ? 0.3 : 0.05;
    ctx.arc(px, py, CELL / 2 - 2, angle + mouth, angle + Math.PI * 2 - mouth);
    ctx.lineTo(px, py);
    ctx.fill();

    // Ghosts
    ghosts.forEach(g => {
      ctx.fillStyle = g.scared ? '#0000ff' : g.color;
      const gx = g.x * CELL + CELL / 2;
      const gy = g.y * CELL + CELL / 2;
      ctx.beginPath();
      ctx.arc(gx, gy, CELL / 2 - 2, Math.PI, 0);
      ctx.lineTo(gx + CELL / 2 - 2, gy + CELL / 2 - 2);
      ctx.lineTo(gx + CELL / 4, gy + CELL / 4);
      ctx.lineTo(gx, gy + CELL / 2 - 2);
      ctx.lineTo(gx - CELL / 4, gy + CELL / 4);
      ctx.lineTo(gx - CELL / 2 + 2, gy + CELL / 2 - 2);
      ctx.fill();
      // Eyes
      ctx.fillStyle = '#fff';
      ctx.beginPath(); ctx.arc(gx - 3, gy - 2, 3, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(gx + 3, gy - 2, 3, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#000';
      ctx.beginPath(); ctx.arc(gx - 3, gy - 2, 1.5, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(gx + 3, gy - 2, 1.5, 0, Math.PI * 2); ctx.fill();
    });

    if (!gameOver && !won) {
      animRef.current = requestAnimationFrame(gameLoop);
    }
  }, [gameOver, won, move]);

  useEffect(() => {
    if (started && !gameOver && !won) {
      animRef.current = requestAnimationFrame(gameLoop);
    }
    return () => cancelAnimationFrame(animRef.current);
  }, [started, gameOver, won, gameLoop]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const map: Record<string, Dir> = { ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right', w: 'up', s: 'down', a: 'left', d: 'right' };
      if (map[e.key]) { e.preventDefault(); pacRef.current.nextDir = map[e.key]; }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="mb-4 flex items-center gap-6">
        <Link to="/games" className="text-gray-400 hover:text-white flex items-center gap-1">
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>
        <div className="text-yellow-400 font-bold text-xl">Score: {score}</div>
        <div className="text-white font-bold">Lives: {'❤️'.repeat(lives)}</div>
      </div>

      <div className="relative">
        <canvas ref={canvasRef} width={COLS * CELL} height={ROWS * CELL} className="border-2 border-blue-800 rounded" />

        {!started && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 rounded">
            <h1 className="text-4xl font-bold text-yellow-400 mb-4">PAC-MAN</h1>
            <p className="text-white mb-2">Arrow keys or WASD to move</p>
            <p className="text-gray-400 mb-6 text-sm">Eat all dots. Avoid ghosts. Power pellets let you eat ghosts!</p>
            <button onClick={startGame} className="px-8 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 text-lg">
              START GAME
            </button>
          </div>
        )}

        {gameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 rounded">
            <h2 className="text-3xl font-bold text-red-500 mb-2">GAME OVER</h2>
            <p className="text-white mb-4">Final Score: {score}</p>
            <button onClick={startGame} className="px-6 py-2 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400">
              PLAY AGAIN
            </button>
          </div>
        )}

        {won && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 rounded">
            <h2 className="text-3xl font-bold text-green-400 mb-2">YOU WIN! 🎉</h2>
            <p className="text-white mb-4">Score: {score}</p>
            <button onClick={startGame} className="px-6 py-2 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400">
              PLAY AGAIN
            </button>
          </div>
        )}
      </div>

      {/* Mobile controls */}
      <div className="mt-6 grid grid-cols-3 gap-2 md:hidden">
        <div />
        <button onTouchStart={() => pacRef.current.nextDir = 'up'} className="p-4 bg-gray-800 rounded-lg text-white text-2xl active:bg-gray-600">↑</button>
        <div />
        <button onTouchStart={() => pacRef.current.nextDir = 'left'} className="p-4 bg-gray-800 rounded-lg text-white text-2xl active:bg-gray-600">←</button>
        <button onTouchStart={() => pacRef.current.nextDir = 'down'} className="p-4 bg-gray-800 rounded-lg text-white text-2xl active:bg-gray-600">↓</button>
        <button onTouchStart={() => pacRef.current.nextDir = 'right'} className="p-4 bg-gray-800 rounded-lg text-white text-2xl active:bg-gray-600">→</button>
      </div>
    </div>
  );
}
