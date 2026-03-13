import { useState, useCallback } from 'react'
import QuizGame from '../components/QuizGame'
import EssayExercise from '../components/EssayExercise'
import GameCharacter from '../components/GameCharacter'
import { useCoins } from '../context/CoinContext'
import topics from '../data/topics'

function shuffleArray(arr) {
  const shuffled = [...arr]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function Game() {
  const { coins, bestStreak, totalCorrect } = useCoins()
  const [selectedTopic, setSelectedTopic] = useState('all')
  const [gameMode, setGameMode] = useState('quiz') // quiz | essay
  const [started, setStarted] = useState(false)
  const [questions, setQuestions] = useState([])
  const [essays, setEssays] = useState([])

  const handleStart = useCallback(() => {
    if (gameMode === 'quiz') {
      const qs = selectedTopic === 'all'
        ? topics.flatMap(t => t.quizzes)
        : topics.find(t => t.id === Number(selectedTopic))?.quizzes || []
      const shuffled = shuffleArray(qs)
      setQuestions(selectedTopic === 'all' ? shuffled.slice(0, 20) : shuffled)
    } else {
      const es = selectedTopic === 'all'
        ? topics.flatMap(t => t.essays || [])
        : topics.find(t => t.id === Number(selectedTopic))?.essays || []
      const shuffled = shuffleArray(es)
      setEssays(selectedTopic === 'all' ? shuffled.slice(0, 10) : shuffled)
    }
    setStarted(true)
  }, [selectedTopic, gameMode])

  if (!started) {
    return (
      <div className="game-setup">
        <div className="game-setup-card">
          <div className="game-setup-character">
            <GameCharacter mood="idle" streak={0} />
          </div>
          <h1>Trò chơi ôn tập</h1>
          <p>Chọn chủ đề và bắt đầu luyện tập!</p>

          <div className="game-stats-bar">
            <div className="game-stat-item">
              <span className="game-stat-icon">🪙</span>
              <span className="game-stat-value">{coins}</span>
              <span className="game-stat-label">Xu vàng</span>
            </div>
            <div className="game-stat-item">
              <span className="game-stat-icon">🔥</span>
              <span className="game-stat-value">{bestStreak}</span>
              <span className="game-stat-label">Streak cao nhất</span>
            </div>
            <div className="game-stat-item">
              <span className="game-stat-icon">✓</span>
              <span className="game-stat-value">{totalCorrect}</span>
              <span className="game-stat-label">Tổng câu đúng</span>
            </div>
          </div>

          <div className="game-mode-selector">
            <label>Chế độ chơi:</label>
            <div className="game-mode-buttons">
              <button
                className={`game-mode-btn ${gameMode === 'quiz' ? 'active' : ''}`}
                onClick={() => setGameMode('quiz')}
              >
                📝 Trắc nghiệm nhanh
              </button>
              <button
                className={`game-mode-btn ${gameMode === 'essay' ? 'active' : ''}`}
                onClick={() => setGameMode('essay')}
              >
                ✍️ Tự luận thử thách
              </button>
            </div>
          </div>

          <div className="topic-select">
            <label>Chọn chủ đề:</label>
            <select
              value={selectedTopic}
              onChange={e => setSelectedTopic(e.target.value)}
            >
              <option value="all">
                {gameMode === 'quiz' ? 'Tất cả chủ đề (20 câu ngẫu nhiên)' : 'Tất cả chủ đề (10 câu ngẫu nhiên)'}
              </option>
              {topics.map(t => (
                <option key={t.id} value={t.id}>
                  {t.icon} {t.name} ({gameMode === 'quiz' ? `${t.quizzes.length} câu` : `${(t.essays || []).length} câu`})
                </option>
              ))}
            </select>
          </div>

          <div className="game-rules">
            <h3>Luật chơi:</h3>
            {gameMode === 'quiz' ? (
              <ul>
                <li>Mỗi câu có 30 giây để trả lời</li>
                <li>Chọn 1 trong 4 đáp án</li>
                <li>Đúng: +10 xu 🪙 | Streak 3 câu: bonus +5 xu</li>
                <li>Hoàn thành quiz: +5 xu</li>
              </ul>
            ) : (
              <ul>
                <li>Nhập đáp án vào ô trả lời</li>
                <li>Tối đa 3 lần thử mỗi câu</li>
                <li>Đúng: +15 xu 🪙 | Gợi ý: -5 xu</li>
                <li>Streak 3 câu: bonus +5 xu</li>
              </ul>
            )}
          </div>

          <button className="btn-start" onClick={handleStart}>
            Bắt đầu!
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="game-page">
      <div className="game-header">
        <button className="btn-back" onClick={() => setStarted(false)}>
          ← Chọn lại
        </button>
      </div>
      {gameMode === 'quiz' ? (
        <QuizGame key={`quiz-${selectedTopic}-${started}`} questions={questions} />
      ) : (
        <EssayExercise key={`essay-${selectedTopic}-${started}`} essays={essays} />
      )}
    </div>
  )
}

export default Game
