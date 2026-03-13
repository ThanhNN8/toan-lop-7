import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import ExerciseCard from '../components/ExerciseCard'
import QuizGame from '../components/QuizGame'
import EssayExercise from '../components/EssayExercise'
import useSubject from '../hooks/useSubject'

function TopicDetail() {
  const subject = useSubject()
  const { id } = useParams()
  const topic = subject.topics.find(t => t.id === Number(id))
  const [mode, setMode] = useState('theory') // theory | essay | quiz

  if (!topic) {
    return (
      <div className="not-found">
        <h2>Không tìm thấy chủ đề</h2>
        <Link to={subject.basePath || '/'} className="btn-back">← Về trang chủ</Link>
      </div>
    )
  }

  return (
    <div className="topic-detail">
      <div className="topic-detail-header">
        <Link to={subject.basePath || '/'} className="btn-back">← Quay lại</Link>
        <div className="topic-detail-title">
          <span className="topic-detail-icon">{topic.icon}</span>
          <div>
            <span className="topic-category-badge">{topic.categoryName}</span>
            <h1>{topic.name}</h1>
            <p>{topic.description}</p>
          </div>
        </div>
      </div>

      <div className="mode-toggle">
        <button
          className={`mode-btn ${mode === 'theory' ? 'active' : ''}`}
          onClick={() => setMode('theory')}
        >
          Lý thuyết & Bài tập
        </button>
        <button
          className={`mode-btn ${mode === 'essay' ? 'active' : ''}`}
          onClick={() => setMode('essay')}
        >
          Bài tự luận
        </button>
        <button
          className={`mode-btn ${mode === 'quiz' ? 'active' : ''}`}
          onClick={() => setMode('quiz')}
        >
          Làm bài trắc nghiệm
        </button>
      </div>

      {mode === 'theory' && (
        <div className="theory-section">
          <h2>Tóm tắt lý thuyết</h2>
          <div className="theory-cards">
            {topic.theory.map((item, i) => (
              <div key={i} className="theory-card">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            ))}
          </div>

          <h2>Bài tập mẫu</h2>
          <div className="exercises-list">
            {topic.exercises.map((ex, i) => (
              <ExerciseCard key={i} exercise={ex} index={i} />
            ))}
          </div>
        </div>
      )}

      {mode === 'essay' && (
        <div className="essay-section">
          {topic.essays && topic.essays.length > 0 ? (
            <EssayExercise key={topic.id} essays={topic.essays} />
          ) : (
            <p>Chưa có bài tự luận cho chủ đề này.</p>
          )}
        </div>
      )}

      {mode === 'quiz' && (
        <div className="quiz-section">
          <QuizGame questions={topic.quizzes} />
        </div>
      )}
    </div>
  )
}

export default TopicDetail
