import { Link } from 'react-router-dom'
import { useAchievementProgress } from '../hooks/useAchievementProgress'
import { useBestiaryProgress } from '../hooks/useBestiaryProgress'
import { useAugmentProgress } from '../hooks/useAugmentProgress'
import { useMapProgress } from '../hooks/useMapProgress'
import { ProgressBar } from '../components/ProgressBar'

export function HomePage() {
  const { completedCount, total, percentComplete } = useAchievementProgress()
  const bestiary = useBestiaryProgress()
  const augments = useAugmentProgress()
  const maps = useMapProgress()

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
        Final Fantasy IV (3D Remake) Achievement Guide
      </h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        A step-by-step walkthrough paired with an achievement tracker and bestiary. Your progress
        is saved in this browser and persists across visits until you reset it.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
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
        <Link
          to="/bestiary"
          className="rounded-lg border border-slate-200 p-5 transition-colors hover:border-indigo-400 dark:border-slate-800"
        >
          <h2 className="text-lg font-medium text-slate-900 dark:text-white">Bestiary</h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Log every monster and unlock the bestiary achievements.
          </p>
        </Link>
        <Link
          to="/augments"
          className="rounded-lg border border-slate-200 p-5 transition-colors hover:border-indigo-400 dark:border-slate-800"
        >
          <h2 className="text-lg font-medium text-slate-900 dark:text-white">Augments</h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Track every augment and where to find it.
          </p>
        </Link>
        <Link
          to="/treasure-hunter"
          className="rounded-lg border border-slate-200 p-5 transition-colors hover:border-indigo-400 dark:border-slate-800"
        >
          <h2 className="text-lg font-medium text-slate-900 dark:text-white">Treasure Hunter</h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Track 100% map completion rewards across every dungeon.
          </p>
        </Link>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">
            Achievements
          </h3>
          <ProgressBar completed={completedCount} total={total} percent={percentComplete} />
        </div>
        <div>
          <h3 className="mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">Bestiary</h3>
          <ProgressBar
            completed={bestiary.seenCount}
            total={bestiary.total}
            percent={Math.round(bestiary.percentComplete)}
          />
        </div>
        <div>
          <h3 className="mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">Augments</h3>
          <ProgressBar
            completed={augments.obtainedCount}
            total={augments.total}
            percent={augments.total === 0 ? 0 : Math.round((augments.obtainedCount / augments.total) * 100)}
          />
        </div>
        <div>
          <h3 className="mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">
            Treasure Hunter
          </h3>
          <ProgressBar
            completed={maps.mappedCount}
            total={maps.total}
            percent={maps.total === 0 ? 0 : Math.round((maps.mappedCount / maps.total) * 100)}
          />
        </div>
      </div>
    </div>
  )
}
