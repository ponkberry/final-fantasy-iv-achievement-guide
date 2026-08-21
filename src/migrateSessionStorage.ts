const STORAGE_KEYS = [
  'ffiv-achievement-progress',
  'ffiv-achievement-subitem-progress',
  'ffiv-augment-progress',
  'ffiv-bestiary-progress',
  'ffiv-walkthrough-progress',
  'ffiv-walkthrough-collapsed',
]

/**
 * One-time transition for users with progress saved under the old sessionStorage-backed model:
 * copies each known key over to localStorage (without clobbering anything already there) and
 * clears it from sessionStorage. Must run before any useLocalStorage-backed hook reads its key.
 */
export function migrateSessionStorageToLocalStorage() {
  try {
    for (const key of STORAGE_KEYS) {
      const sessionValue = window.sessionStorage.getItem(key)
      if (sessionValue === null) continue
      if (window.localStorage.getItem(key) === null) {
        window.localStorage.setItem(key, sessionValue)
      }
      window.sessionStorage.removeItem(key)
    }
  } catch {
    // storage unavailable (e.g. private browsing) - nothing to migrate
  }
}
