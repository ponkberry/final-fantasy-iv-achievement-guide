import { Fragment, useMemo, useState } from 'react'
import { augments } from '../data/augments'
import { achievements } from '../data/achievements'
import { useAugmentProgress } from '../hooks/useAugmentProgress'
import { ProgressBar } from '../components/ProgressBar'
import { ConfirmResetDialog } from '../components/ConfirmResetDialog'

const milestones = achievements
  .filter((a) => a.augmentThreshold !== undefined)
  .sort((a, b) => (a.augmentThreshold ?? 0) - (b.augmentThreshold ?? 0))

const statuses = ['All', 'Obtained', 'Not Obtained'] as const
type StatusFilter = (typeof statuses)[number]

export function AugmentsPage() {
  const {
    isObtained,
    isLocked,
    toggle,
    reset,
    obtainedCount,
    total,
    isSubItemComplete,
    toggleSubItem,
    subItemProgress,
  } = useAugmentProgress()
  const [query, setQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('All')
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set())
  const [showResetConfirm, setShowResetConfirm] = useState(false)

  const toggleExpanded = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

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
          onClick={() => setShowResetConfirm(true)}
          className="text-sm text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
        >
          Reset progress
        </button>
      </div>

      <ConfirmResetDialog
        open={showResetConfirm}
        label="augment progress"
        onCancel={() => setShowResetConfirm(false)}
        onConfirm={() => {
          reset()
          setShowResetConfirm(false)
        }}
      />

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
                  ? 'border-violet-300 bg-violet-50 text-violet-700 dark:border-violet-800 dark:bg-violet-950/40 dark:text-violet-300'
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
                ? 'border-violet-400 bg-violet-50 text-violet-700 dark:border-violet-700 dark:bg-violet-950/40 dark:text-violet-300'
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
              const locked = isLocked(entry.id)
              const hasSubItems = entry.subItems && entry.subItems.length > 0
              const progress = hasSubItems ? subItemProgress(entry.id) : undefined
              const expanded = expandedIds.has(entry.id)
              return (
                <Fragment key={entry.id}>
                  <tr
                    className={`border-t border-slate-100 dark:border-slate-800 ${
                      obtained ? 'bg-violet-50/60 dark:bg-violet-950/20' : ''
                    }`}
                  >
                    <td className="px-3 py-2">
                      <input
                        type="checkbox"
                        checked={obtained}
                        disabled={locked}
                        onChange={() => toggle(entry.id)}
                        className="size-4 accent-violet-600 disabled:cursor-not-allowed disabled:opacity-60"
                        aria-label={`Mark ${entry.name} as obtained`}
                      />
                    </td>
                    <td className="px-3 py-2 font-medium text-slate-900 dark:text-white">
                      <div className="flex flex-wrap items-center gap-2">
                        <span>{entry.name}</span>
                        {hasSubItems && progress && (
                          <span
                            className={`rounded-full px-2 py-0.5 text-xs font-normal ${
                              obtained
                                ? 'bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300'
                                : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                            }`}
                          >
                            {progress.done} / {progress.total}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-3 py-2 text-slate-600 dark:text-slate-400">
                      {entry.notes || '-'}
                      {hasSubItems && (
                        <button
                          type="button"
                          onClick={() => toggleExpanded(entry.id)}
                          className="ml-2 text-xs text-violet-600 hover:underline dark:text-violet-400"
                        >
                          {expanded ? 'Hide' : 'Show'} checklist
                        </button>
                      )}
                    </td>
                  </tr>
                  {hasSubItems && expanded && (
                    <tr className="border-t border-slate-100 dark:border-slate-800">
                      <td></td>
                      <td colSpan={2} className="px-3 pb-3">
                        <ul className="ml-1 space-y-1 border-l-2 border-slate-200 pl-3 dark:border-slate-800">
                          {entry.subItems!.map((sub) => {
                            const done = isSubItemComplete(entry.id, sub.id)
                            return (
                              <li key={sub.id}>
                                <label className="flex cursor-pointer items-start gap-2 text-sm">
                                  <input
                                    type="checkbox"
                                    checked={done}
                                    onChange={() => toggleSubItem(entry.id, sub.id)}
                                    className="mt-0.5 size-3.5 shrink-0 accent-violet-600"
                                  />
                                  <span
                                    className={
                                      done
                                        ? 'text-slate-500 line-through dark:text-slate-500'
                                        : 'text-slate-700 dark:text-slate-300'
                                    }
                                  >
                                    {sub.label}
                                  </span>
                                </label>
                              </li>
                            )
                          })}
                        </ul>
                      </td>
                    </tr>
                  )}
                </Fragment>
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
