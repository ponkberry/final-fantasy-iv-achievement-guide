import { useMemo, useState } from 'react'
import { achievements } from '../data/achievements'
import { useAchievementProgress } from '../hooks/useAchievementProgress'
import { AchievementCard } from '../components/AchievementCard'
import { ProgressBar } from '../components/ProgressBar'
import type { AchievementCategory } from '../types'

const categories: Array<AchievementCategory | 'All'> = [
  'All',
  'Story',
  'Sidequest',
  'Collection',
  'Combat',
  'Miscellaneous',
]

export function AchievementsPage() {
  const { isComplete, isLocked, toggle, reset, completedCount, total, percentComplete } =
    useAchievementProgress()
  const [filter, setFilter] = useState<(typeof categories)[number]>('All')

  const visible = useMemo(
    () => (filter === 'All' ? achievements : achievements.filter((a) => a.category === filter)),
    [filter],
  )

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Achievements</h1>
        <button
          type="button"
          onClick={reset}
          className="text-sm text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
        >
          Reset progress
        </button>
      </div>

      <div className="mt-4">
        <ProgressBar completed={completedCount} total={total} percent={percentComplete} />
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setFilter(category)}
            className={`rounded-full border px-3 py-1 text-sm transition-colors ${
              filter === category
                ? 'border-indigo-400 bg-indigo-50 text-indigo-700 dark:border-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300'
                : 'border-slate-200 text-slate-600 dark:border-slate-800 dark:text-slate-400'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-3">
        {visible.map((achievement) => (
          <AchievementCard
            key={achievement.id}
            achievement={achievement}
            completed={isComplete(achievement.id)}
            locked={isLocked(achievement.id)}
            onToggle={toggle}
          />
        ))}
      </div>
    </div>
  )
}
