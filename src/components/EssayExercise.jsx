import { useState } from 'react'
import { useCoins } from '../context/CoinContext'
import GameCharacter from './GameCharacter'

const CONFETTI = Array.from({ length: 30 }).map((_, i) => ({
  x: `${(i * 3.33 + 1.5) % 100}%`,
  delay: `${(i * 0.017) % 0.5}s`,
}))

function EssayExercise({ essays }) {
  const { addCoins, removeCoins, coins, addStreak, resetStreak, streak } = useCoins()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [showHint, setShowHint] = useState(false)
  const [showSolution, setShowSolution] = useState(false)
  const [result, setResult] = useState(null) // 'correct' | 'wrong' | null
  const [finished, setFinished] = useState(false)
  const [results, setResults] = useState([])
  const [mood, setMood] = useState('idle')
  const [showConfetti, setShowConfetti] = useState(false)

  const current = essays[currentIndex]
  const maxAttempts = 3

  function normalize(str) {
    return str.trim().toLowerCase().replace(/\s+/g, '').replace(/,/g, '.')
  }

  function handleCheck() {
    if (!userAnswer.trim()) return

    const normalized = normalize(userAnswer)
    const isCorrect = current.acceptedAnswers.some(a => normalize(a) === normalized)

    if (isCorrect) {
      setResult('correct')
      setMood('correct')
      setShowConfetti(true)
      addCoins(15)
      addStreak()
      if (streak + 1 >= 3 && (streak + 1) % 3 === 0) {
        addCoins(5)
      }
      setResults(prev => [...prev, { question: current.question, correct: true, attempts: attempts + 1 }])
      setTimeout(() => setShowConfetti(false), 2000)
    } else {
      const newAttempts = attempts + 1
      setAttempts(newAttempts)
      setResult('wrong')
      setMood('wrong')
      resetStreak()

      if (newAttempts >= maxAttempts) {
        setShowSolution(true)
        setResults(prev => [...prev, { question: current.question, correct: false, attempts: newAttempts }])
      }
    }
  }

  function handleHint() {
    if (coins >= 5) {
      removeCoins(5)
      setShowHint(true)
    }
  }

  function handleSkip() {
    setShowSolution(true)
    resetStreak()
    setResults(prev => [...prev, { question: current.question, correct: false, attempts, skipped: true }])
  }

  function handleNext() {
    if (currentIndex + 1 >= essays.length) {
      setFinished(true)
      return
    }
    setCurrentIndex(i => i + 1)
    setUserAnswer('')
    setAttempts(0)
    setShowHint(false)
    setShowSolution(false)
    setResult(null)
    setMood('idle')
  }

  function handleRestart() {
    setCurrentIndex(0)
    setUserAnswer('')
    setAttempts(0)
    setShowHint(false)
    setShowSolution(false)
    setResult(null)
    setFinished(false)
    setResults([])
    setMood('idle')
  }

  if (finished) {
    const correctCount = results.filter(r => r.correct).length
    const percent = Math.round((correctCount / essays.length) * 100)
    return (
      <div className="essay-finished">
        <div className="quiz-result-header">
          <GameCharacter mood={percent >= 50 ? 'correct' : 'wrong'} streak={0} />
          <div className="quiz-score-circle">
            <span className="quiz-score-number">{correctCount}/{essays.length}</span>
            <span className="quiz-score-percent">{percent}%</span>
          </div>
          <h2>{percent >= 80 ? 'Xuất sắc!' : percent >= 50 ? 'Khá tốt!' : 'Cần cố gắng thêm!'}</h2>
        </div>
        <div className="quiz-review">
          <h3>Chi tiết kết quả:</h3>
          {results.map((r, i) => (
            <div key={i} className={`review-item ${r.correct ? 'correct' : 'wrong'}`}>
              <div className="review-status">{r.correct ? '✓' : '✗'}</div>
              <div className="review-content">
                <p className="review-question">Câu {i + 1}: {r.question}</p>
                <p className="review-answer">
                  {r.correct ? `Đúng (${r.attempts} lần thử)` : r.skipped ? 'Bỏ qua' : `Sai (${r.attempts} lần thử)`}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className="btn-restart" onClick={handleRestart}>Làm lại</button>
      </div>
    )
  }

  const isDone = result === 'correct' || showSolution

  return (
    <div className="essay-container">
      {showConfetti && <div className="confetti-container">
        {CONFETTI.map((c, i) => (
          <div key={i} className="confetti-piece" style={{
            '--x': c.x,
            '--delay': c.delay,
            '--color': ['#f72585', '#4361ee', '#06d6a0', '#ffd166', '#7209b7'][i % 5]
          }} />
        ))}
      </div>}

      <div className="essay-header">
        <span className="quiz-progress">Câu {currentIndex + 1}/{essays.length}</span>
        <div className="essay-difficulty">
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className={`star ${i < current.difficulty ? 'active' : ''}`}>★</span>
          ))}
        </div>
      </div>

      <div className="quiz-progress-bar">
        <div className="quiz-progress-fill" style={{ width: `${(currentIndex / essays.length) * 100}%` }} />
      </div>

      <div className="essay-body">
        <div className="essay-main">
          <div className={`essay-question-card ${result === 'wrong' && !showSolution ? 'shake' : ''}`}>
            <h3>{current.question}</h3>
          </div>

          <div className="essay-input-area">
            <input
              type="text"
              className={`essay-input ${result === 'correct' ? 'correct' : result === 'wrong' ? 'wrong' : ''}`}
              placeholder="Nhập đáp án của bạn..."
              value={userAnswer}
              onChange={e => { setUserAnswer(e.target.value); if (result === 'wrong') setResult(null) }}
              onKeyDown={e => { if (e.key === 'Enter' && !isDone) handleCheck() }}
              disabled={isDone}
            />
            {!isDone && (
              <div className="essay-actions">
                <button className="btn-check" onClick={handleCheck} disabled={!userAnswer.trim()}>
                  Kiểm tra
                </button>
                {!showHint && (
                  <button className="btn-hint" onClick={handleHint} disabled={coins < 5}>
                    💡 Gợi ý (-5 xu)
                  </button>
                )}
                <button className="btn-skip" onClick={handleSkip}>
                  Bỏ qua →
                </button>
              </div>
            )}
          </div>

          {result === 'wrong' && !showSolution && (
            <div className="essay-feedback wrong">
              <strong>✗ Chưa đúng!</strong>
              <p>Còn {maxAttempts - attempts} lần thử. Hãy thử lại nhé!</p>
            </div>
          )}

          {result === 'correct' && (
            <div className="essay-feedback correct">
              <strong>✓ Chính xác! +15 xu</strong>
              <p>{current.solution}</p>
            </div>
          )}

          {showHint && !showSolution && result !== 'correct' && (
            <div className="essay-hint">
              <strong>💡 Gợi ý:</strong>
              <p>{current.hint}</p>
            </div>
          )}

          {showSolution && result !== 'correct' && (
            <div className="essay-solution">
              <strong>📝 Lời giải:</strong>
              <p>Đáp án: <strong>{current.answer}</strong></p>
              <p>{current.solution}</p>
            </div>
          )}

          {isDone && (
            <button className="btn-next" onClick={handleNext}>
              {currentIndex + 1 >= essays.length ? 'Xem kết quả' : 'Câu tiếp theo →'}
            </button>
          )}
        </div>

        <div className="essay-sidebar">
          <GameCharacter mood={mood} streak={streak} />
          <div className="essay-stats">
            <div className="essay-stat">
              <span>Lần thử:</span>
              <span>{attempts}/{maxAttempts}</span>
            </div>
            {streak >= 2 && (
              <div className="essay-streak">
                🔥 Streak: {streak}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EssayExercise
