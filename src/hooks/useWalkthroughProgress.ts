import { useCallback, useMemo } from 'react'
import { useSessionStorage } from './useSessionStorage'

const STORAGE_KEY = 'ffiv-walkthrough-progress'
const COLLAPSED_STORAGE_KEY = 'ffiv-walkthrough-collapsed'

export function useWalkthroughProgress() {
  const [completedIds, setCompletedIds] = useSessionStorage<string[]>(STORAGE_KEY, [])
  const [collapsedIds, setCollapsedIds] = useSessionStorage<string[]>(COLLAPSED_STORAGE_KEY, [])

  const completedSet = useMemo(() => new Set(completedIds), [completedIds])
  const collapsedSet = useMemo(() => new Set(collapsedIds), [collapsedIds])

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

  const isCollapsed = useCallback((chapterId: string) => collapsedSet.has(chapterId), [collapsedSet])

  const toggleCollapse = useCallback(
    (chapterId: string) => {
      setCollapsedIds((prev) =>
        prev.includes(chapterId) ? prev.filter((existing) => existing !== chapterId) : [...prev, chapterId],
      )
    },
    [setCollapsedIds],
  )

  const expandChapter = useCallback(
    (chapterId: string) => {
      setCollapsedIds((prev) => prev.filter((existing) => existing !== chapterId))
    },
    [setCollapsedIds],
  )

  return {
    completedSet,
    isComplete,
    toggle,
    reset,
    isCollapsed,
    toggleCollapse,
    expandChapter,
  }
}
