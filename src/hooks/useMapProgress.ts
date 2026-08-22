import { useCallback, useMemo } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { maps } from '../data/maps'

const STORAGE_KEY = 'ffiv-map-progress'

export function useMapProgress() {
  const [mappedIds, setMappedIds] = useLocalStorage<string[]>(STORAGE_KEY, [])

  const mappedSet = useMemo(() => new Set(mappedIds), [mappedIds])

  const isMapped = useCallback((id: string) => mappedSet.has(id), [mappedSet])

  const toggle = useCallback(
    (id: string) => {
      setMappedIds((prev) =>
        prev.includes(id) ? prev.filter((existing) => existing !== id) : [...prev, id],
      )
    },
    [setMappedIds],
  )

  const reset = useCallback(() => setMappedIds([]), [setMappedIds])

  const total = maps.length
  const mappedCount = mappedSet.size

  return { mappedSet, isMapped, toggle, reset, total, mappedCount }
}
