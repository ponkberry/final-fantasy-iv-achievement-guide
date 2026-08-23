import type { MapEntry } from '../types'

interface ChapterMapListProps {
  entries: MapEntry[]
  isMapped: (id: string) => boolean
  onToggle: (id: string) => void
}

export function ChapterMapList({ entries, isMapped, onToggle }: ChapterMapListProps) {
  if (entries.length === 0) return null

  return (
    <div className="mt-4 rounded-lg border border-slate-200 p-3 dark:border-slate-800">
      <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-500">
        Treasure Hunter maps in this area
      </p>
      <ul className="grid gap-x-4 gap-y-1 sm:grid-cols-2">
        {entries.map((entry) => {
          const mapped = isMapped(entry.id)
          return (
            <li key={entry.id}>
              <label className="flex cursor-pointer items-start gap-2 py-0.5 text-sm">
                <input
                  type="checkbox"
                  checked={mapped}
                  onChange={() => onToggle(entry.id)}
                  className="mt-0.5 size-3.5 shrink-0 accent-indigo-600"
                />
                <span>
                  <span className={mapped ? 'text-slate-500 line-through dark:text-slate-500' : 'text-slate-700 dark:text-slate-300'}>
                    {entry.name}
                  </span>
                  <span className="block text-xs text-slate-500 dark:text-slate-500">{entry.reward}</span>
                </span>
              </label>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
