import { useState } from 'react'

function ExerciseCard({ exercise, index, speak, isSpeaking, speakingText }) {
  const [showSolution, setShowSolution] = useState(false)

  const getReadText = () => {
    let text = 'Bài ' + (index + 1) + '. ' + exercise.question
    if (showSolution && exercise.solution) {
      text += '. Lời giải: ' + exercise.solution
    }
    return text
  }

  const readText = getReadText()
  const isReadingThis = isSpeaking && speakingText === readText

  return (
    <div className="exercise-card">
      <div className="exercise-header">
        <span className="exercise-number">Bài {index + 1}</span>
        {speak && (
          <button
            className={`btn-speak btn-speak-sm ${isReadingThis ? 'active' : ''}`}
            onClick={() => speak(readText)}
            title={isReadingThis ? 'Dừng đọc' : 'Đọc bài tập'}
          >
            {isReadingThis ? '⏹' : '🔊'}
          </button>
        )}
      </div>
      <p className="exercise-question">{exercise.question}</p>
      <button
        className={`btn-solution ${showSolution ? 'active' : ''}`}
        onClick={() => setShowSolution(!showSolution)}
      >
        {showSolution ? 'Ẩn lời giải' : 'Xem lời giải'}
      </button>
      {showSolution && (
        <div className="exercise-solution">
          <strong>Lời giải:</strong>
          <p>{exercise.solution}</p>
        </div>
      )}
    </div>
  )
}

export default ExerciseCard
