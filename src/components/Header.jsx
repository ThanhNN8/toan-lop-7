import { Link, useLocation } from 'react-router-dom'
import CoinDisplay from './CoinDisplay'
import { subjectList } from '../data/subjects'
import useSubject from '../hooks/useSubject'

function Header() {
  const location = useLocation()
  const subject = useSubject()
  const homePath = subject.basePath || '/'
  const gamePath = subject.basePath + '/game'

  return (
    <header className="header">
      <div className="header-content">
        <Link to={homePath} className="logo">
          <span className="logo-icon">{subject.icon}</span>
          <span className="logo-text">{subject.shortName}</span>
        </Link>
        <div className="header-right">
          <div className="subject-tabs">
            {subjectList.map(s => (
              <Link
                key={s.slug}
                to={s.basePath || '/'}
                className={`subject-tab ${subject.slug === s.slug ? 'active' : ''}`}
              >
                {s.icon} {s.shortName}
              </Link>
            ))}
          </div>
          <CoinDisplay />
          <nav className="nav">
            <Link
              to={homePath}
              className={location.pathname === homePath || location.pathname === subject.basePath ? 'nav-link active' : 'nav-link'}
            >
              Chủ đề
            </Link>
            <Link
              to={gamePath}
              className={location.pathname === gamePath ? 'nav-link active' : 'nav-link'}
            >
              Trò chơi
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
