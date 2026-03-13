import { useLocation } from 'react-router-dom'
import subjects from '../data/subjects'

export default function useSubject() {
  const location = useLocation()
  const slug = location.pathname.startsWith('/khtn7') ? 'khtn7' : 'toan7'
  return subjects[slug]
}
