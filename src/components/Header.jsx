import { Link, useLocation } from 'react-router-dom'
import CoinDisplay from './CoinDisplay'

function Header() {
  const location = useLocation()

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <span className="logo-icon">📚</span>
          <span className="logo-text">Toán Lớp 7</span>
        </Link>
        <div className="header-right">
          <CoinDisplay />
          <nav className="nav">
            <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>
              Chủ đề
            </Link>
            <Link to="/game" className={location.pathname === '/game' ? 'nav-link active' : 'nav-link'}>
              Trò chơi
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
