import { Link } from 'react-router-dom'
import { useAchievementProgress } from '../hooks/useAchievementProgress'
import { ProgressBar } from '../components/ProgressBar'

export function HomePage() {
  const { completedCount, total, percentComplete } = useAchievementProgress()

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
        Final Fantasy IV (3D Remake) Achievement Guide
      </h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        A step-by-step walkthrough paired with an achievement tracker. Your progress is saved
        for this browser session and clears when you close the tab.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Link
          to="/walkthrough"
          className="rounded-lg border border-slate-200 p-5 transition-colors hover:border-indigo-400 dark:border-slate-800"
        >
          <h2 className="text-lg font-medium text-slate-900 dark:text-white">Walkthrough</h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Chapter-by-chapter guide through the story.
          </p>
        </Link>
        <Link
          to="/achievements"
          className="rounded-lg border border-slate-200 p-5 transition-colors hover:border-indigo-400 dark:border-slate-800"
        >
          <h2 className="text-lg font-medium text-slate-900 dark:text-white">Achievements</h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Track every achievement and check them off as you go.
          </p>
        </Link>
      </div>

      <div className="mt-8">
        <ProgressBar completed={completedCount} total={total} percent={percentComplete} />
      </div>
    </div>
  )
}
