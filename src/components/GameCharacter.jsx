function GameCharacter({ mood = 'idle', streak = 0 }) {
  const getMoodClass = () => {
    switch (mood) {
      case 'correct': return 'char-happy'
      case 'wrong': return 'char-sad'
      case 'timeout': return 'char-sleep'
      case 'thinking': return 'char-think'
      default: return 'char-idle'
    }
  }

  const getFace = () => {
    switch (mood) {
      case 'correct': return { eyes: '✧ ✧', mouth: '▽', extra: '!' }
      case 'wrong': return { eyes: '• •', mouth: '︿', extra: '...' }
      case 'timeout': return { eyes: '− −', mouth: 'o', extra: 'zzZ' }
      case 'thinking': return { eyes: '◉ ◉', mouth: '~', extra: '?' }
      default: return { eyes: '● ●', mouth: 'ω', extra: '' }
    }
  }

  const face = getFace()

  return (
    <div className={`game-character ${getMoodClass()}`}>
      {streak >= 3 && <div className="char-crown">👑</div>}
      <div className="char-body">
        <div className="char-ears">
          <span className="char-ear left">△</span>
          <span className="char-ear right">△</span>
        </div>
        <div className="char-face">
          <div className="char-eyes">{face.eyes}</div>
          <div className="char-mouth">{face.mouth}</div>
        </div>
        <div className="char-tail">~</div>
      </div>
      {face.extra && <div className="char-bubble">{face.extra}</div>}
      {mood === 'correct' && <div className="char-sparkles">
        <span>✨</span><span>⭐</span><span>✨</span>
      </div>}
      {streak >= 3 && <div className="char-streak-glow" />}
    </div>
  )
}

export default GameCharacter
