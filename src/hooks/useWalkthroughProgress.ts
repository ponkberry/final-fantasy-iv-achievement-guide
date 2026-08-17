import { useCallback, useMemo } from 'react'
import { useSessionStorage } from './useSessionStorage'

const STORAGE_KEY = 'ffiv-walkthrough-progress'

export function useWalkthroughProgress() {
  const [completedIds, setCompletedIds] = useSessionStorage<string[]>(STORAGE_KEY, [])

  const completedSet = useMemo(() => new Set(completedIds), [completedIds])

  const isComplete = useCallback((stepId: string) => completedSet.has(stepId), [completedSet])

  const toggle = useCallback(
    (stepId: string) => {
      setCompletedIds((prev) =>
        prev.includes(stepId) ? prev.filter((existing) => existing !== stepId) : [...prev, stepId],
      )
    },
    [setCompletedIds],
  )

  const reset = useCallback(() => setCompletedIds([]), [setCompletedIds])

  return { completedSet, isComplete, toggle, reset }
}
