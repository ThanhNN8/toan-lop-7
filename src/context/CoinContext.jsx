import { createContext, useContext, useState, useCallback } from 'react'

const CoinContext = createContext()

function getInitialState() {
  try {
    const saved = localStorage.getItem('toan7-coins')
    if (saved) return JSON.parse(saved)
  } catch (e) { /* ignore parse errors */ void e }
  return { coins: 0, streak: 0, bestStreak: 0, totalCorrect: 0 }
}

function saveState(state) {
  try {
    localStorage.setItem('toan7-coins', JSON.stringify(state))
  } catch (e) { /* ignore storage errors */ void e }
}

export function CoinProvider({ children }) {
  const [state, setState] = useState(getInitialState)
  const [coinAnimation, setCoinAnimation] = useState(null)

  const addCoins = useCallback((amount) => {
    setState(prev => {
      const next = { ...prev, coins: prev.coins + amount }
      saveState(next)
      return next
    })
    setCoinAnimation({ amount, key: Date.now() })
    setTimeout(() => setCoinAnimation(null), 1200)
  }, [])

  const removeCoins = useCallback((amount) => {
    setState(prev => {
      const next = { ...prev, coins: Math.max(0, prev.coins - amount) }
      saveState(next)
      return next
    })
  }, [])

  const addStreak = useCallback(() => {
    setState(prev => {
      const newStreak = prev.streak + 1
      const next = {
        ...prev,
        streak: newStreak,
        bestStreak: Math.max(prev.bestStreak, newStreak),
        totalCorrect: prev.totalCorrect + 1
      }
      saveState(next)
      return next
    })
  }, [])

  const resetStreak = useCallback(() => {
    setState(prev => {
      const next = { ...prev, streak: 0 }
      saveState(next)
      return next
    })
  }, [])

  return (
    <CoinContext.Provider value={{
      coins: state.coins,
      streak: state.streak,
      bestStreak: state.bestStreak,
      totalCorrect: state.totalCorrect,
      coinAnimation,
      addCoins,
      removeCoins,
      addStreak,
      resetStreak
    }}>
      {children}
    </CoinContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCoins() {
  const ctx = useContext(CoinContext)
  if (!ctx) throw new Error('useCoins must be used within CoinProvider')
  return ctx
}
