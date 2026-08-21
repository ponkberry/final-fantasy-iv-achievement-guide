import { useCallback, useMemo } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { augments } from '../data/augments'

const STORAGE_KEY = 'ffiv-augment-progress'

export function useAugmentProgress() {
  const [obtainedIds, setObtainedIds] = useLocalStorage<string[]>(STORAGE_KEY, [])

  const obtainedSet = useMemo(() => new Set(obtainedIds), [obtainedIds])

  const isObtained = useCallback((id: string) => obtainedSet.has(id), [obtainedSet])

  const toggle = useCallback(
    (id: string) => {
      setObtainedIds((prev) =>
        prev.includes(id) ? prev.filter((existing) => existing !== id) : [...prev, id],
      )
    },
    [setObtainedIds],
  )

  const reset = useCallback(() => setObtainedIds([]), [setObtainedIds])

  const total = augments.length
  const obtainedCount = obtainedSet.size

  return { obtainedSet, isObtained, toggle, reset, total, obtainedCount }
}
