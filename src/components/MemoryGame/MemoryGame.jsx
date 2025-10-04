import React, { useEffect, useState } from "react";

const MemoryGame = () => {
  const [gridSize, setGridSize] = useState(4);
  const [maxMoves, setMaxMoves] = useState(0); // 0 = unlimited
  const [movesUsed, setMovesUsed] = useState(0);

  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [won, setWon] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const handleGridSizeChange = (e) => {
    const size = parseInt(e.target.value);
    if (size >= 2 && size <= 10) setGridSize(size);
  };

  const handleMaxMovesChange = (e) => {
    const moves = parseInt(e.target.value);
    setMaxMoves(moves >= 0 ? moves : 0); // negative not allowed
  };

  const initializeGame = () => {
    const totalCards = gridSize * gridSize;
    const pairCount = Math.floor(totalCards / 2);
    const numbers = [...Array(pairCount).keys()].map((n) => n + 1);
    const shuffleCards = [...numbers, ...numbers]
      .sort(() => Math.random() - 0.5)
      .slice(0, totalCards)
      .map((number, index) => ({ id: index, number }));

    setCards(shuffleCards);
    setFlipped([]);
    setSolved([]);
    setWon(false);
    setGameOver(false);
    setMovesUsed(0);
  };

  useEffect(() => {
    initializeGame();
  }, [gridSize, maxMoves]);

  const checkMatch = (secondId) => {
    const [firstId] = flipped;
    if (cards[firstId].number === cards[secondId].number) {
      setSolved((prev) => [...prev, firstId, secondId]);
      setFlipped([]);
      setDisabled(false);
    } else {
      setTimeout(() => {
        setFlipped([]);
        setDisabled(false);
      }, 1000);
    }

    // ✅ Count this as a move (pair attempt)
    setMovesUsed((prev) => prev + 1);
  };

  const handleClick = (id) => {
    if (disabled || won || gameOver) return;
    if (flipped.includes(id) || solved.includes(id)) return;

    if (flipped.length === 0) {
      setFlipped([id]);
      return;
    }

    if (flipped.length === 1) {
      setDisabled(true);
      if (id !== flipped[0]) {
        setFlipped([...flipped, id]);
        checkMatch(id);
      } else {
        setFlipped([]);
        setDisabled(false);
      }
    }
  };

  const isFlipped = (id) => flipped.includes(id) || solved.includes(id);
  const isSolved = (id) => solved.includes(id);

  useEffect(() => {
    if (solved.length === cards.length && cards.length > 0) {
      setWon(true);
    }
  }, [solved, cards]);

  // check game over by moves
  useEffect(() => {
    if (maxMoves > 0 && movesUsed >= maxMoves && !won) {
      setGameOver(true);
    }
  }, [movesUsed, maxMoves, won]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Memory Game</h1>

      {/* Inputs */}
      <div className="flex gap-4 mb-4">
        <div>
          <label htmlFor="gridSize" className="mr-2">
            Grid Size (max 10):
          </label>
          <input
            type="number"
            id="gridSize"
            min="2"
            max="10"
            value={gridSize}
            onChange={handleGridSizeChange}
            className="border-2 border-gray-300 rounded px-2 py-1 w-16"
          />
        </div>

        <div>
          <label htmlFor="maxMoves" className="mr-2">
            Max Moves (0 for unlimited):
          </label>
          <input
            type="number"
            id="maxMoves"
            min="0"
            value={maxMoves}
            onChange={handleMaxMovesChange}
            className="border-2 border-gray-300 rounded px-2 py-1 w-20"
          />
        </div>
      </div>

      {/* Moves Counter */}
      <div className="mb-4 text-lg font-semibold">
        Moves: {movesUsed}
        {maxMoves > 0 && ` / ${maxMoves}`}
      </div>

      {/* Game Board */}
      <div
        className={`grid gap-2 mb-4`}
        style={{
          gridTemplateColumns: `repeat(${gridSize},minmax(0,1fr))`,
          width: `min(100%,${gridSize * 5.5}rem)`,
        }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleClick(card.id)}
            className={`aspect-square flex justify-center items-center text-2xl font-bold rounded-lg cursor-pointer transition-all duration-300 ${
              isFlipped(card.id)
                ? isSolved(card.id)
                  ? "bg-green-500 text-white"
                  : "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-400"
            }`}
          >
            {isFlipped(card.id) ? card.number : "?"}
          </div>
        ))}
      </div>

      {/* Result */}
      {won && (
        <div className="mt-4 text-4xl font-bold text-green-600 animate-bounce">
          You Won!
        </div>
      )}
      {gameOver && !won && (
        <div className="mt-4 text-4xl font-bold text-red-600 animate-pulse">
          Game Over! Out of Moves
        </div>
      )}

      {/* Reset / Play Again */}
      <button
        onClick={initializeGame}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-gray-600"
      >
        {won || gameOver ? "Play again" : "Reset"}
      </button>
    </div>
  );
};

export default MemoryGame;
