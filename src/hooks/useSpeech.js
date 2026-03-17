import { useState, useEffect, useCallback, useRef } from 'react'

export default function useSpeech() {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [speakingText, setSpeakingText] = useState('')
  const utteranceRef = useRef(null)

  const stop = useCallback(() => {
    window.speechSynthesis.cancel()
    setIsSpeaking(false)
    setSpeakingText('')
  }, [])

  const speak = useCallback((text) => {
    // If already speaking the same text, stop
    if (isSpeaking && speakingText === text) {
      stop()
      return
    }

    // Stop any current speech
    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'vi-VN'
    utterance.rate = 0.9

    // Try to find Vietnamese voice
    const voices = window.speechSynthesis.getVoices()
    const viVoice = voices.find(v => v.lang.startsWith('vi'))
    if (viVoice) utterance.voice = viVoice

    utterance.onstart = () => {
      setIsSpeaking(true)
      setSpeakingText(text)
    }
    utterance.onend = () => {
      setIsSpeaking(false)
      setSpeakingText('')
    }
    utterance.onerror = () => {
      setIsSpeaking(false)
      setSpeakingText('')
    }

    utteranceRef.current = utterance
    window.speechSynthesis.speak(utterance)
  }, [isSpeaking, speakingText, stop])

  // Auto-stop on unmount
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel()
    }
  }, [])

  return { speak, stop, isSpeaking, speakingText }
}
