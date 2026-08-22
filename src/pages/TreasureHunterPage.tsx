import { useMemo, useState } from 'react'
import { maps } from '../data/maps'
import { useMapProgress } from '../hooks/useMapProgress'
import { ProgressBar } from '../components/ProgressBar'

const statuses = ['All', 'Mapped', 'Unmapped'] as const
type StatusFilter = (typeof statuses)[number]

export function TreasureHunterPage() {
  const { isMapped, toggle, reset, mappedCount, total } = useMapProgress()
  const [query, setQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('All')

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    let list = maps
    if (q) {
      list = list.filter(
        (entry) =>
          entry.name.toLowerCase().includes(q) || entry.reward.toLowerCase().includes(q),
      )
    }
    if (statusFilter === 'Mapped') list = list.filter((entry) => isMapped(entry.id))
    if (statusFilter === 'Unmapped') list = list.filter((entry) => !isMapped(entry.id))
    return list
  }, [query, statusFilter, isMapped])

  const percentComplete = total === 0 ? 0 : Math.round((mappedCount / total) * 100)

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Treasure Hunter</h1>
        <button
          type="button"
          onClick={reset}
          className="text-sm text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
        >
          Reset progress
        </button>
      </div>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
        Every dungeon floor gives a free item once you've explored 100% of its map. Track them
        here as you go.
      </p>

      <div className="mt-4">
        <ProgressBar completed={mappedCount} total={total} percent={percentComplete} />
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {statuses.map((status) => (
          <button
            key={status}
            type="button"
            onClick={() => setStatusFilter(status)}
            className={`rounded-full border px-3 py-1 text-sm transition-colors ${
              statusFilter === status
                ? 'border-indigo-400 bg-indigo-50 text-indigo-700 dark:border-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300'
                : 'border-slate-200 text-slate-600 dark:border-slate-800 dark:text-slate-400'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by map or reward…"
        className="mt-4 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
      />

      <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600 dark:bg-slate-900 dark:text-slate-400">
            <tr>
              <th className="w-10 px-3 py-2"></th>
              <th className="px-3 py-2">Map</th>
              <th className="px-3 py-2">Mapping Reward</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((entry) => {
              const mapped = isMapped(entry.id)
              return (
                <tr
                  key={entry.id}
                  className={`border-t border-slate-100 dark:border-slate-800 ${
                    mapped ? 'bg-indigo-50/60 dark:bg-indigo-950/20' : ''
                  }`}
                >
                  <td className="px-3 py-2">
                    <input
                      type="checkbox"
                      checked={mapped}
                      onChange={() => toggle(entry.id)}
                      className="size-4 accent-indigo-600"
                      aria-label={`Mark ${entry.name} as 100% mapped`}
                    />
                  </td>
                  <td className="px-3 py-2 font-medium text-slate-900 dark:text-white">{entry.name}</td>
                  <td className="px-3 py-2 text-slate-600 dark:text-slate-400">{entry.reward}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {visible.length === 0 && (
          <p className="p-4 text-center text-sm text-slate-500 dark:text-slate-500">
            No maps match these filters.
          </p>
        )}
      </div>
    </div>
  )
}
