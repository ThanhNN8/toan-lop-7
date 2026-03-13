import { Link } from 'react-router-dom'

function TopicCard({ topic, basePath = '' }) {
  return (
    <Link to={`${basePath}/topic/${topic.id}`} className="topic-card">
      <div className="topic-icon">{topic.icon}</div>
      <div className="topic-info">
        <span className="topic-category-badge">{topic.categoryName}</span>
        <h3 className="topic-name">{topic.name}</h3>
        <p className="topic-desc">{topic.description}</p>
      </div>
      <div className="topic-stats">
        <span>{topic.exercises.length} bài tập</span>
        <span>{topic.quizzes.length} câu hỏi</span>
      </div>
    </Link>
  )
}

export default TopicCard
