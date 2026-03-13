import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import TopicDetail from './pages/TopicDetail'
import Game from './pages/Game'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topic/:id" element={<TopicDetail />} />
          <Route path="/game" element={<Game />} />
          <Route path="/khtn7" element={<Home />} />
          <Route path="/khtn7/topic/:id" element={<TopicDetail />} />
          <Route path="/khtn7/game" element={<Game />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
