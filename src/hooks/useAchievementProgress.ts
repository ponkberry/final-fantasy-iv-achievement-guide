import { useCallback, useMemo } from 'react'
import { useSessionStorage } from './useSessionStorage'
import { useBestiaryProgress } from './useBestiaryProgress'
import { achievements } from '../data/achievements'

const STORAGE_KEY = 'ffiv-achievement-progress'

const lockedIds = new Set(achievements.filter((a) => a.bestiaryThreshold !== undefined).map((a) => a.id))

export function useAchievementProgress() {
  const [completedIds, setCompletedIds] = useSessionStorage<string[]>(STORAGE_KEY, [])
  const { percentComplete: bestiaryPercent } = useBestiaryProgress()

  const manualSet = useMemo(() => new Set(completedIds), [completedIds])

  const derivedIds = useMemo(
    () =>
      achievements
        .filter((a) => a.bestiaryThreshold !== undefined && bestiaryPercent >= a.bestiaryThreshold)
        .map((a) => a.id),
    [bestiaryPercent],
  )

  const completedSet = useMemo(
    () => new Set([...manualSet, ...derivedIds]),
    [manualSet, derivedIds],
  )

  const isComplete = useCallback((id: string) => completedSet.has(id), [completedSet])
  const isLocked = useCallback((id: string) => lockedIds.has(id), [])

  const toggle = useCallback(
    (id: string) => {
      if (lockedIds.has(id)) return
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

  return {
    completedSet,
    isComplete,
    isLocked,
    toggle,
    reset,
    total,
    completedCount,
    percentComplete,
  }
}
