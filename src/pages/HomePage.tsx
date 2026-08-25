import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAchievementProgress } from '../hooks/useAchievementProgress'
import { useBestiaryProgress } from '../hooks/useBestiaryProgress'
import { useAugmentProgress } from '../hooks/useAugmentProgress'
import { useMapProgress } from '../hooks/useMapProgress'
import { ProgressBar } from '../components/ProgressBar'
import { exportSession, importSession } from '../utils/sessionExport'

export function HomePage() {
  const { completedCount, total, percentComplete } = useAchievementProgress()
  const bestiary = useBestiaryProgress()
  const augments = useAugmentProgress()
  const maps = useMapProgress()
  const [importError, setImportError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImportFile = (file: File) => {
    setImportError(null)
    file
      .text()
      .then(importSession)
      .catch((err: unknown) => {
        setImportError(err instanceof Error ? err.message : 'Could not import this file.')
      })
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
        Final Fantasy IV (3D Remake) Achievement Guide
      </h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        A step-by-step walkthrough paired with an achievement tracker and bestiary. Your progress
        is saved in this browser and persists across visits until you reset it.
      </p>

      <div className="mt-6 rounded-lg border border-slate-200 p-5 dark:border-slate-800">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Before you dive in
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-400">
          <li>
            The Walkthrough follows the story chapter by chapter, with achievement, bestiary, and
            augment pickups called out right where you find them - check them off there, or catch
            up later from their own tabs.
          </li>
          <li>
            Achievements, Bestiary, Augments, and Treasure Hunter each get a dedicated tracker with
            a progress bar, status filter, and search.
          </li>
          <li>
            Red banners mark one-time-visit areas and points of no return, and multi-part
            achievements or augments (like Rabbit Chaser or Piercing Magic) auto-complete once
            every part is checked off.
          </li>
          <li>Everything is saved locally in this browser and stays there until you hit Reset.</li>
          <li>
            You'll need to complete the game twice - once on Hard difficulty - to get everything.
            No single playthrough can obtain every augment.
          </li>
        </ul>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <Link
          to="/walkthrough"
          className="rounded-lg border border-slate-200 p-5 transition-colors hover:border-violet-400 dark:border-slate-800"
        >
          <h2 className="text-lg font-medium text-slate-900 dark:text-white">Walkthrough</h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Chapter-by-chapter guide through the story.
          </p>
        </Link>
        <Link
          to="/achievements"
          className="rounded-lg border border-slate-200 p-5 transition-colors hover:border-violet-400 dark:border-slate-800"
        >
          <h2 className="text-lg font-medium text-slate-900 dark:text-white">Achievements</h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Track every achievement and check them off as you go.
          </p>
        </Link>
        <Link
          to="/bestiary"
          className="rounded-lg border border-slate-200 p-5 transition-colors hover:border-violet-400 dark:border-slate-800"
        >
          <h2 className="text-lg font-medium text-slate-900 dark:text-white">Bestiary</h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Log every monster and unlock the bestiary achievements.
          </p>
        </Link>
        <Link
          to="/augments"
          className="rounded-lg border border-slate-200 p-5 transition-colors hover:border-violet-400 dark:border-slate-800"
        >
          <h2 className="text-lg font-medium text-slate-900 dark:text-white">Augments</h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Track every augment and where to find it.
          </p>
        </Link>
        <Link
          to="/treasure-hunter"
          className="rounded-lg border border-slate-200 p-5 transition-colors hover:border-violet-400 dark:border-slate-800"
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

      <div className="mt-8 rounded-lg border border-slate-200 p-5 dark:border-slate-800">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Backup &amp; restore
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Export your progress to a file you can save or move to another browser. Importing
          replaces your current progress here and reloads the page.
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={exportSession}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            Export progress
          </button>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            Import progress
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="application/json,.json"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) handleImportFile(file)
              e.target.value = ''
            }}
          />
        </div>
        {importError && (
          <p className="mt-2 text-sm text-red-700 dark:text-red-400">{importError}</p>
        )}
      </div>
    </div>
  )
}
