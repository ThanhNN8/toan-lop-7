import { useState } from 'react'
import TopicCard from '../components/TopicCard'
import topics from '../data/topics'

const categories = [
  { key: 'all', label: 'Tất cả' },
  { key: 'dai-so', label: 'Đại số' },
  { key: 'hinh-hoc', label: 'Hình học' },
  { key: 'thong-ke', label: 'Thống kê & Xác suất' },
]

function Home() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredTopics = activeCategory === 'all'
    ? topics
    : topics.filter(t => t.category === activeCategory)

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Toán Lớp 7</h1>
          <h2>Chân Trời Sáng Tạo</h2>
          <p>Ôn tập kiến thức qua lý thuyết, bài tập mẫu và trò chơi tương tác</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">10</span>
              <span className="stat-label">Chủ đề</span>
            </div>
            <div className="stat">
              <span className="stat-number">{topics.reduce((s, t) => s + t.exercises.length, 0)}</span>
              <span className="stat-label">Bài tập</span>
            </div>
            <div className="stat">
              <span className="stat-number">{topics.reduce((s, t) => s + t.quizzes.length, 0)}</span>
              <span className="stat-label">Câu hỏi</span>
            </div>
          </div>
        </div>
      </section>

      <section className="topics-section">
        <div className="category-filter">
          {categories.map(cat => (
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
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
