import { useCallback, useMemo } from 'react'
import { useSessionStorage } from './useSessionStorage'
import { useBestiaryProgress } from './useBestiaryProgress'
import { achievements } from '../data/achievements'

const STORAGE_KEY = 'ffiv-achievement-progress'
const SUBITEM_STORAGE_KEY = 'ffiv-achievement-subitem-progress'

const lockedIds = new Set(
  achievements
    .filter((a) => a.bestiaryThreshold !== undefined || (a.subItems && a.subItems.length > 0))
    .map((a) => a.id),
)

function subItemKey(achievementId: string, subItemId: string) {
  return `${achievementId}:${subItemId}`
}

export function useAchievementProgress() {
  const [completedIds, setCompletedIds] = useSessionStorage<string[]>(STORAGE_KEY, [])
  const [completedSubItemKeys, setCompletedSubItemKeys] = useSessionStorage<string[]>(
    SUBITEM_STORAGE_KEY,
    [],
  )
  const { percentComplete: bestiaryPercent } = useBestiaryProgress()

  const manualSet = useMemo(() => new Set(completedIds), [completedIds])
  const completedSubItemSet = useMemo(() => new Set(completedSubItemKeys), [completedSubItemKeys])

  const isSubItemComplete = useCallback(
    (achievementId: string, subItemId: string) =>
      completedSubItemSet.has(subItemKey(achievementId, subItemId)),
    [completedSubItemSet],
  )

  const toggleSubItem = useCallback(
    (achievementId: string, subItemId: string) => {
      const key = subItemKey(achievementId, subItemId)
      setCompletedSubItemKeys((prev) =>
        prev.includes(key) ? prev.filter((existing) => existing !== key) : [...prev, key],
      )
    },
    [setCompletedSubItemKeys],
  )

  const subItemProgress = useCallback(
    (achievementId: string) => {
      const achievement = achievements.find((a) => a.id === achievementId)
      const subItems = achievement?.subItems ?? []
      const done = subItems.filter((s) => completedSubItemSet.has(subItemKey(achievementId, s.id))).length
      return { done, total: subItems.length }
    },
    [completedSubItemSet],
  )

  const derivedIds = useMemo(
    () =>
      achievements
        .filter((a) => {
          if (a.bestiaryThreshold !== undefined) return bestiaryPercent >= a.bestiaryThreshold
          if (a.subItems && a.subItems.length > 0) {
            return a.subItems.every((s) => completedSubItemSet.has(subItemKey(a.id, s.id)))
          }
          return false
        })
        .map((a) => a.id),
    [bestiaryPercent, completedSubItemSet],
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

  const reset = useCallback(() => {
    setCompletedIds([])
    setCompletedSubItemKeys([])
  }, [setCompletedIds, setCompletedSubItemKeys])

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
    isSubItemComplete,
    toggleSubItem,
    subItemProgress,
  }
}
