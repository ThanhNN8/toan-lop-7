import { useCoins } from '../context/CoinContext'

function CoinDisplay() {
  const { coins, coinAnimation } = useCoins()

  return (
    <div className="coin-display">
      <span className="coin-icon">🪙</span>
      <span className="coin-count">{coins}</span>
      {coinAnimation && (
        <span key={coinAnimation.key} className="coin-popup">
          +{coinAnimation.amount}
        </span>
      )}
    </div>
  )
}

export default CoinDisplay
