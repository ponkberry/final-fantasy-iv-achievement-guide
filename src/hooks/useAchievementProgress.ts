import { useCallback, useMemo } from 'react'
import { useSessionStorage } from './useSessionStorage'
import { achievements } from '../data/achievements'

const STORAGE_KEY = 'ffiv-achievement-progress'

export function useAchievementProgress() {
  const [completedIds, setCompletedIds] = useSessionStorage<string[]>(STORAGE_KEY, [])

  const completedSet = useMemo(() => new Set(completedIds), [completedIds])

  const isComplete = useCallback((id: string) => completedSet.has(id), [completedSet])

  const toggle = useCallback(
    (id: string) => {
      setCompletedIds((prev) =>
        prev.includes(id) ? prev.filter((existing) => existing !== id) : [...prev, id],
      )
    },
    [setCompletedIds],
  )

  const reset = useCallback(() => setCompletedIds([]), [setCompletedIds])

  const total = achievements.length
  const completedCount = completedSet.size
  const percentComplete = total === 0 ? 0 : Math.round((completedCount / total) * 100)

  return { completedSet, isComplete, toggle, reset, total, completedCount, percentComplete }
}
