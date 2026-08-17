import type { Achievement } from '../types'

interface AchievementCardProps {
  achievement: Achievement
  completed: boolean
  onToggle: (id: string) => void
}

export function AchievementCard({ achievement, completed, onToggle }: AchievementCardProps) {
  return (
    <label
      className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors ${
        completed
          ? 'border-indigo-300 bg-indigo-50 dark:border-indigo-800 dark:bg-indigo-950/40'
          : 'border-slate-200 dark:border-slate-800'
      }`}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(achievement.id)}
        className="mt-1 size-4 accent-indigo-600"
      />
      <img
        src={achievement.icon}
        alt=""
        width={48}
        height={48}
        className={`size-12 shrink-0 rounded ${completed ? '' : 'opacity-50 grayscale'}`}
      />
      <div>
        <div className="flex items-center gap-2">
          <span className="font-medium text-slate-900 dark:text-white">{achievement.name}</span>
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400">
            {achievement.category}
          </span>
        </div>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{achievement.description}</p>
      </div>
    </label>
  )
}
