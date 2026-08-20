import { useMemo, useState } from 'react'
import { augments } from '../data/augments'
import { achievements } from '../data/achievements'
import { useAugmentProgress } from '../hooks/useAugmentProgress'
import { ProgressBar } from '../components/ProgressBar'

const milestones = achievements
  .filter((a) => a.augmentThreshold !== undefined)
  .sort((a, b) => (a.augmentThreshold ?? 0) - (b.augmentThreshold ?? 0))

const statuses = ['All', 'Obtained', 'Not Obtained'] as const
type StatusFilter = (typeof statuses)[number]

export function AugmentsPage() {
  const { isObtained, toggle, reset, obtainedCount, total } = useAugmentProgress()
  const [query, setQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('All')

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    let list = augments
    if (q) {
      list = list.filter(
        (entry) =>
          entry.name.toLowerCase().includes(q) || (entry.notes ?? '').toLowerCase().includes(q),
      )
    }
    if (statusFilter === 'Obtained') list = list.filter((entry) => isObtained(entry.id))
    if (statusFilter === 'Not Obtained') list = list.filter((entry) => !isObtained(entry.id))
    return list
  }, [query, statusFilter, isObtained])

  const percentComplete = total === 0 ? 0 : Math.round((obtainedCount / total) * 100)

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Augments</h1>
        <button
          type="button"
          onClick={reset}
          className="text-sm text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
        >
          Reset progress
        </button>
      </div>

      <div className="mt-4">
        <ProgressBar completed={obtainedCount} total={total} percent={percentComplete} />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {milestones.map((achievement) => {
          const reached = obtainedCount >= (achievement.augmentThreshold ?? 0)
          return (
            <div
              key={achievement.id}
              className={`flex items-center gap-1.5 rounded-full border py-1 pl-1 pr-3 text-xs ${
                reached
                  ? 'border-indigo-300 bg-indigo-50 text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-300'
                  : 'border-slate-200 text-slate-600 dark:border-slate-800 dark:text-slate-400'
              }`}
            >
              <img
                src={achievement.icon}
                alt=""
                width={20}
                height={20}
                className={`size-5 rounded-full ${reached ? '' : 'opacity-50 grayscale'}`}
              />
              {reached ? '✓ ' : ''}
              {achievement.name} ({achievement.augmentThreshold})
            </div>
          )
        })}
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
        placeholder="Search by name or notes…"
        className="mt-4 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
      />

      <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600 dark:bg-slate-900 dark:text-slate-400">
            <tr>
              <th className="w-10 px-3 py-2"></th>
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">Notes</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((entry) => {
              const obtained = isObtained(entry.id)
              return (
                <tr
                  key={entry.id}
                  className={`border-t border-slate-100 dark:border-slate-800 ${
                    obtained ? 'bg-indigo-50/60 dark:bg-indigo-950/20' : ''
                  }`}
                >
                  <td className="px-3 py-2">
                    <input
                      type="checkbox"
                      checked={obtained}
                      onChange={() => toggle(entry.id)}
                      className="size-4 accent-indigo-600"
                      aria-label={`Mark ${entry.name} as obtained`}
                    />
                  </td>
                  <td className="px-3 py-2 font-medium text-slate-900 dark:text-white">{entry.name}</td>
                  <td className="px-3 py-2 text-slate-600 dark:text-slate-400">{entry.notes || '-'}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {visible.length === 0 && (
          <p className="p-4 text-center text-sm text-slate-500 dark:text-slate-500">
            No augments match these filters.
          </p>
        )}
      </div>
    </div>
  )
}
