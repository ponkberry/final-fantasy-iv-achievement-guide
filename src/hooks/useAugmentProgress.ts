import { useCallback, useMemo } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { augments } from '../data/augments'

const STORAGE_KEY = 'ffiv-augment-progress'
const SUBITEM_STORAGE_KEY = 'ffiv-augment-subitem-progress'

const lockedIds = new Set(
  augments.filter((a) => a.subItems && a.subItems.length > 0).map((a) => a.id),
)

function subItemKey(augmentId: string, subItemId: string) {
  return `${augmentId}:${subItemId}`
}

export function useAugmentProgress() {
  const [obtainedIds, setObtainedIds] = useLocalStorage<string[]>(STORAGE_KEY, [])
  const [completedSubItemKeys, setCompletedSubItemKeys] = useLocalStorage<string[]>(
    SUBITEM_STORAGE_KEY,
    [],
  )

  const manualSet = useMemo(() => new Set(obtainedIds), [obtainedIds])
  const completedSubItemSet = useMemo(() => new Set(completedSubItemKeys), [completedSubItemKeys])

  const isSubItemComplete = useCallback(
    (augmentId: string, subItemId: string) =>
      completedSubItemSet.has(subItemKey(augmentId, subItemId)),
    [completedSubItemSet],
  )

  const toggleSubItem = useCallback(
    (augmentId: string, subItemId: string) => {
      const key = subItemKey(augmentId, subItemId)
      setCompletedSubItemKeys((prev) =>
        prev.includes(key) ? prev.filter((existing) => existing !== key) : [...prev, key],
      )
    },
    [setCompletedSubItemKeys],
  )

  const subItemProgress = useCallback(
    (augmentId: string) => {
      const augment = augments.find((a) => a.id === augmentId)
      const subItems = augment?.subItems ?? []
      const done = subItems.filter((s) => completedSubItemSet.has(subItemKey(augmentId, s.id))).length
      return { done, total: subItems.length }
    },
    [completedSubItemSet],
  )

  const derivedIds = useMemo(
    () =>
      augments
        .filter(
          (a) =>
            a.subItems &&
            a.subItems.length > 0 &&
            a.subItems.every((s) => completedSubItemSet.has(subItemKey(a.id, s.id))),
        )
        .map((a) => a.id),
    [completedSubItemSet],
  )

  const obtainedSet = useMemo(
    () => new Set([...manualSet, ...derivedIds]),
    [manualSet, derivedIds],
  )

  const isObtained = useCallback((id: string) => obtainedSet.has(id), [obtainedSet])
  const isLocked = useCallback((id: string) => lockedIds.has(id), [])

  const toggle = useCallback(
    (id: string) => {
      if (lockedIds.has(id)) return
      setObtainedIds((prev) =>
        prev.includes(id) ? prev.filter((existing) => existing !== id) : [...prev, id],
      )
    },
    [setObtainedIds],
  )

  const reset = useCallback(() => {
    setObtainedIds([])
    setCompletedSubItemKeys([])
  }, [setObtainedIds, setCompletedSubItemKeys])

  const total = augments.length
  const obtainedCount = obtainedSet.size

  return {
    obtainedSet,
    isObtained,
    isLocked,
    toggle,
    reset,
    total,
    obtainedCount,
    isSubItemComplete,
    toggleSubItem,
    subItemProgress,
  }
}
