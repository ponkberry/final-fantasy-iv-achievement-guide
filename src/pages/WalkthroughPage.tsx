import { useMemo } from 'react'
import { walkthrough } from '../data/walkthrough'
import { achievements } from '../data/achievements'
import { bestiary } from '../data/bestiary'
import { useAchievementProgress } from '../hooks/useAchievementProgress'
import { useWalkthroughProgress } from '../hooks/useWalkthroughProgress'
import { useBestiaryProgress } from '../hooks/useBestiaryProgress'
import { WalkthroughNav } from '../components/WalkthroughNav'
import { ChapterBestiaryList } from '../components/ChapterBestiaryList'

export function WalkthroughPage() {
  const { isComplete: isAchievementComplete, toggle: toggleAchievement } = useAchievementProgress()
  const { isComplete: isStepComplete, toggle: toggleStep, reset: resetSteps } = useWalkthroughProgress()
  const { isSeen, toggle: toggleBestiary } = useBestiaryProgress()

  const achievementById = useMemo(() => new Map(achievements.map((a) => [a.id, a])), [])

  const bestiaryByChapter = useMemo(() => {
    const map = new Map<string, typeof bestiary>()
    for (const entry of bestiary) {
      if (!entry.chapterId) continue
      const list = map.get(entry.chapterId) ?? []
      list.push(entry)
      map.set(entry.chapterId, list)
    }
    return map
  }, [])

  const progressByChapter = useMemo(() => {
    const map: Record<string, { done: number; total: number }> = {}
    for (const chapter of walkthrough) {
      const done = chapter.steps.filter((s) => isStepComplete(s.id)).length
      map[chapter.id] = { done, total: chapter.steps.length }
    }
    return map
  }, [walkthrough, isStepComplete])

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Walkthrough</h1>
        <button
          type="button"
          onClick={resetSteps}
          className="text-sm text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
        >
          Reset step progress
        </button>
      </div>

      <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-start">
        <WalkthroughNav chapters={walkthrough} progressByChapter={progressByChapter} />

        <div className="min-w-0 flex-1 space-y-10">
          {walkthrough.map((chapter) => (
            <section key={chapter.id} id={chapter.id} className="scroll-mt-20">
              <h2 className="text-xl font-medium text-slate-900 dark:text-white">{chapter.title}</h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{chapter.summary}</p>

              <ol className="mt-4 space-y-3">
                {chapter.steps.map((step) => {
                  const done = isStepComplete(step.id)
                  return (
                    <li key={step.id} className="border-l-2 border-slate-200 pl-4 dark:border-slate-800">
                      <label className="flex cursor-pointer items-start gap-2">
                        <input
                          type="checkbox"
                          checked={done}
                          onChange={() => toggleStep(step.id)}
                          className="mt-1 size-4 shrink-0 accent-indigo-600"
                        />
                        <span
                          className={
                            done
                              ? 'text-slate-500 line-through dark:text-slate-500'
                              : 'text-slate-800 dark:text-slate-200'
                          }
                        >
                          {step.text}
                        </span>
                      </label>
                      {step.achievementIds && step.achievementIds.length > 0 && (
                        <div className="mt-2 ml-6 flex flex-wrap gap-2">
                          {step.achievementIds.map((id) => {
                            const achievement = achievementById.get(id)
                            if (!achievement) return null
                            const achDone = isAchievementComplete(id)
                            return (
                              <button
                                key={id}
                                type="button"
                                onClick={() => toggleAchievement(id)}
                                className={`flex items-center gap-1.5 rounded-full border py-1 pl-1 pr-3 text-xs transition-colors ${
                                  achDone
                                    ? 'border-indigo-300 bg-indigo-50 text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-300'
                                    : 'border-slate-200 text-slate-600 dark:border-slate-800 dark:text-slate-400'
                                }`}
                              >
                                <img
                                  src={achievement.icon}
                                  alt=""
                                  width={20}
                                  height={20}
                                  className={`size-5 rounded-full ${achDone ? '' : 'opacity-50 grayscale'}`}
                                />
                                {achDone ? '✓ ' : ''}
                                {achievement.name}
                              </button>
                            )
                          })}
                        </div>
                      )}
                    </li>
                  )
                })}
              </ol>

              <ChapterBestiaryList
                entries={bestiaryByChapter.get(chapter.id) ?? []}
                isSeen={isSeen}
                onToggle={toggleBestiary}
              />
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
