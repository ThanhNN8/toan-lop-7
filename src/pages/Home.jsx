import { useState } from 'react'
import TopicCard from '../components/TopicCard'
import useSubject from '../hooks/useSubject'

function Home() {
  const subject = useSubject()
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredTopics = activeCategory === 'all'
    ? subject.topics
    : subject.topics.filter(t => t.category === activeCategory)

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>{subject.heroTitle}</h1>
          <h2>{subject.heroSubtitle}</h2>
          <p>{subject.heroDesc}</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">{subject.topics.length}</span>
              <span className="stat-label">Chủ đề</span>
            </div>
            <div className="stat">
              <span className="stat-number">{subject.topics.reduce((s, t) => s + t.exercises.length, 0)}</span>
              <span className="stat-label">Bài tập</span>
            </div>
            <div className="stat">
              <span className="stat-number">{subject.topics.reduce((s, t) => s + t.quizzes.length, 0)}</span>
              <span className="stat-label">Câu hỏi</span>
            </div>
          </div>
        </div>
      </section>

      <section className="topics-section">
        <div className="category-filter">
          {subject.categories.map(cat => (
            <button
              key={cat.key}
              className={`filter-btn ${activeCategory === cat.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="topics-grid">
          {filteredTopics.map(topic => (
            <TopicCard key={topic.id} topic={topic} basePath={subject.basePath} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
