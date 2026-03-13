import { useState, useEffect, useRef } from 'react'
import { useCoins } from '../context/CoinContext'
import GameCharacter from './GameCharacter'

const CONFETTI = Array.from({ length: 20 }).map((_, i) => ({
  x: `${(i * 5 + 2.5) % 100}%`,
  delay: `${(i * 0.025) % 0.5}s`,
}))

function QuizGame({ questions }) {
  const { addCoins, addStreak, resetStreak, streak } = useCoins()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [finished, setFinished] = useState(false)
  const [timeLeft, setTimeLeft] = useState(30)
  const [answers, setAnswers] = useState([])
  const [mood, setMood] = useState('idle')
  const [showConfetti, setShowConfetti] = useState(false)
  const timedOutRef = useRef(false)

  const currentQ = questions[currentIndex]

  useEffect(() => {
    if (finished || showResult) return
    const timer = setTimeout(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          setTimeout(() => {
            if (!timedOutRef.current) {
              timedOutRef.current = true
              setShowResult(true)
              setMood('timeout')
              resetStreak()
              setAnswers(prev => [...prev, { question: questions[currentIndex], selected: null, correct: false }])
            }
          }, 0)
          return 0
        }
        return t - 1
      })
    }, 1000)
    return () => clearTimeout(timer)
  }, [timeLeft, finished, showResult, currentIndex, questions, resetStreak])

  function handleSelect(optionIndex) {
    if (showResult) return
    setSelected(optionIndex)
    setShowResult(true)
    const correct = optionIndex === currentQ.correct
    if (correct) {
      setScore(s => s + 1)
      setMood('correct')
      setShowConfetti(true)
      addCoins(10)
      addStreak()
      if (streak + 1 >= 3 && (streak + 1) % 3 === 0) {
        addCoins(5)
      }
      setTimeout(() => setShowConfetti(false), 1500)
    } else {
      setMood('wrong')
      resetStreak()
    }
    setAnswers(prev => [...prev, { question: currentQ, selected: optionIndex, correct }])
  }

  function handleNext() {
    if (currentIndex + 1 >= questions.length) {
      setFinished(true)
      addCoins(5)
    } else {
      setCurrentIndex(i => i + 1)
      setSelected(null)
      setShowResult(false)
      setTimeLeft(30)
      setMood('idle')
      timedOutRef.current = false
    }
  }

  function handleRestart() {
    setCurrentIndex(0)
    setScore(0)
    setSelected(null)
    setShowResult(false)
    setFinished(false)
    setTimeLeft(30)
    setAnswers([])
    setMood('idle')
  }

  if (finished) {
    const percent = Math.round((score / questions.length) * 100)
    return (
      <div className="quiz-finished">
        {percent >= 80 && <div className="starburst-container">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="starburst" style={{ '--angle': `${i * 30}deg`, '--delay': `${i * 0.1}s` }} />
          ))}
        </div>}
        <div className="quiz-result-header">
          <GameCharacter mood={percent >= 50 ? 'correct' : 'wrong'} streak={0} />
          <div className="quiz-score-circle">
            <span className="quiz-score-number">{score}/{questions.length}</span>
            <span className="quiz-score-percent">{percent}%</span>
          </div>
          <h2>{percent >= 80 ? 'Xuất sắc!' : percent >= 50 ? 'Khá tốt!' : 'Cần cố gắng thêm!'}</h2>
          <p>{percent >= 80 ? 'Bạn nắm vững kiến thức rồi!' : percent >= 50 ? 'Hãy ôn lại các câu sai nhé!' : 'Hãy xem lại lý thuyết và thử lại!'}</p>
          <p className="coin-earned">🪙 +5 xu hoàn thành quiz</p>
        </div>

        <div className="quiz-review">
          <h3>Chi tiết kết quả:</h3>
          {answers.map((a, i) => (
            <div key={i} className={`review-item ${a.correct ? 'correct' : 'wrong'}`}>
              <div className="review-status">{a.correct ? '✓' : '✗'}</div>
              <div className="review-content">
                <p className="review-question">Câu {i + 1}: {a.question.question}</p>
                {a.selected !== null ? (
                  <p className="review-answer">Bạn chọn: {a.question.options[a.selected]}</p>
                ) : (
                  <p className="review-answer timeout">Hết thời gian</p>
                )}
                {!a.correct && (
                  <p className="review-correct">Đáp án đúng: {a.question.options[a.question.correct]}</p>
                )}
                <p className="review-explain">{a.question.explanation}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="btn-restart" onClick={handleRestart}>Làm lại</button>
      </div>
    )
  }

  return (
    <div className={`quiz-container ${streak >= 3 ? 'streak-glow' : ''}`}>
      {showConfetti && <div className="confetti-container">
        {CONFETTI.map((c, i) => (
          <div key={i} className="confetti-piece" style={{
            '--x': c.x,
            '--delay': c.delay,
            '--color': ['#f72585', '#4361ee', '#06d6a0', '#ffd166', '#7209b7'][i % 5]
          }} />
        ))}
      </div>}

      <div className="quiz-header">
        <span className="quiz-progress">Câu {currentIndex + 1}/{questions.length}</span>
        <div className="quiz-timer" data-warning={timeLeft <= 10}>
          ⏱ {timeLeft}s
        </div>
        <span className="quiz-score">Điểm: {score}</span>
      </div>

      <div className="quiz-progress-bar">
        <div
          className="quiz-progress-fill"
          style={{ width: `${((currentIndex) / questions.length) * 100}%` }}
        />
      </div>

      <div className="quiz-body-with-char">
        <div className="quiz-main-area">
          <div className={`quiz-question ${showResult && selected !== currentQ.correct ? 'shake' : ''}`}>
            <h3>{currentQ.question}</h3>
          </div>

          <div className="quiz-options">
            {currentQ.options.map((opt, i) => {
              let className = 'quiz-option'
              if (showResult) {
                if (i === currentQ.correct) className += ' correct'
                else if (i === selected) className += ' wrong'
                else className += ' disabled'
              }
              return (
                <button
                  key={i}
                  className={className}
                  onClick={() => handleSelect(i)}
                  disabled={showResult}
                >
                  <span className="option-letter">{'ABCD'[i]}</span>
                  <span className="option-text">{opt}</span>
                </button>
              )
            })}
          </div>

          {showResult && (
            <div className="quiz-explanation">
              <div className={`explanation-box ${selected === currentQ.correct ? 'correct' : 'wrong'}`}>
                <strong>
                  {selected === currentQ.correct ? '✓ Chính xác! +10 xu' : selected === null ? '⏱ Hết thời gian!' : '✗ Sai rồi!'}
                  {selected === currentQ.correct && streak >= 3 && ' 🔥 Streak bonus +5'}
                </strong>
                <p>{currentQ.explanation}</p>
              </div>
              <button className="btn-next" onClick={handleNext}>
                {currentIndex + 1 >= questions.length ? 'Xem kết quả' : 'Câu tiếp theo →'}
              </button>
            </div>
          )}
        </div>

        <div className="quiz-sidebar">
          <GameCharacter mood={mood} streak={streak} />
          {streak >= 2 && (
            <div className="streak-display">
              🔥 {streak} streak!
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default QuizGame
