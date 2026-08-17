import { useMemo, useState } from 'react'
import { bestiary } from '../data/bestiary'
import { achievements } from '../data/achievements'
import { useBestiaryProgress } from '../hooks/useBestiaryProgress'
import { ProgressBar } from '../components/ProgressBar'

const milestones = achievements
  .filter((a) => a.bestiaryThreshold !== undefined)
  .sort((a, b) => (a.bestiaryThreshold ?? 0) - (b.bestiaryThreshold ?? 0))

export function BestiaryPage() {
  const { isSeen, toggle, reset, seenCount, total, percentComplete } = useBestiaryProgress()
  const [query, setQuery] = useState('')

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return bestiary
    return bestiary.filter(
      (entry) => entry.name.toLowerCase().includes(q) || entry.location.toLowerCase().includes(q),
    )
  }, [query])

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Bestiary</h1>
        <button
          type="button"
          onClick={reset}
          className="text-sm text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
        >
          Reset progress
        </button>
      </div>

      <div className="mt-4">
        <ProgressBar completed={seenCount} total={total} percent={Math.round(percentComplete)} />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {milestones.map((achievement) => {
          const reached = percentComplete >= (achievement.bestiaryThreshold ?? 0)
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
              {achievement.name} ({achievement.bestiaryThreshold}%)
            </div>
          )
        })}
      </div>

      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by name or location…"
        className="mt-6 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
      />

      <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600 dark:bg-slate-900 dark:text-slate-400">
            <tr>
              <th className="w-10 px-3 py-2"></th>
              <th className="w-12 px-3 py-2">#</th>
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">Location</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((entry) => {
              const seen = isSeen(entry.number)
              return (
                <tr
                  key={entry.number}
                  className={`border-t border-slate-100 dark:border-slate-800 ${
                    seen ? 'bg-indigo-50/60 dark:bg-indigo-950/20' : ''
                  }`}
                >
                  <td className="px-3 py-2">
                    <input
                      type="checkbox"
                      checked={seen}
                      onChange={() => toggle(entry.number)}
                      className="size-4 accent-indigo-600"
                      aria-label={`Mark ${entry.name} as encountered`}
                    />
                  </td>
                  <td className="px-3 py-2 text-slate-500 dark:text-slate-500">{entry.number}</td>
                  <td className="px-3 py-2 font-medium text-slate-900 dark:text-white">{entry.name}</td>
                  <td className="px-3 py-2 text-slate-600 dark:text-slate-400">
                    {entry.location || '—'}
                    {entry.notes && (
                      <div className="text-xs text-slate-500 dark:text-slate-500">{entry.notes}</div>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {visible.length === 0 && (
          <p className="p-4 text-center text-sm text-slate-500 dark:text-slate-500">
            No monsters match "{query}".
          </p>
        )}
      </div>
    </div>
  )
}
