import { useState } from 'react'

function ExerciseCard({ exercise, index }) {
  const [showSolution, setShowSolution] = useState(false)

  return (
    <div className="exercise-card">
      <div className="exercise-header">
        <span className="exercise-number">Bài {index + 1}</span>
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
