import { useCallback, useState } from 'react'

/** State backed by window.sessionStorage — persists across page navigation but clears when the tab/browser session ends. */
export function useSessionStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const stored = window.sessionStorage.getItem(key)
      return stored ? (JSON.parse(stored) as T) : initialValue
    } catch {
      return initialValue
    }
  })

  const setStoredValue = useCallback(
    (next: T | ((prev: T) => T)) => {
      setValue((prev) => {
        const resolved = next instanceof Function ? next(prev) : next
        try {
          window.sessionStorage.setItem(key, JSON.stringify(resolved))
        } catch {
          // sessionStorage unavailable (e.g. private browsing) — state still works in-memory
        }
        return resolved
      })
    },
    [key],
  )

  return [value, setStoredValue] as const
}
