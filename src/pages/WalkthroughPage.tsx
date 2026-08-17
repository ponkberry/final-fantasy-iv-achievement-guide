import { walkthrough } from '../data/walkthrough'
import { achievements } from '../data/achievements'
import { useAchievementProgress } from '../hooks/useAchievementProgress'

export function WalkthroughPage() {
  const { isComplete, toggle } = useAchievementProgress()
  const achievementById = new Map(achievements.map((a) => [a.id, a]))

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Walkthrough</h1>

      <div className="mt-8 space-y-10">
        {walkthrough.map((chapter) => (
          <section key={chapter.id} id={chapter.id}>
            <h2 className="text-xl font-medium text-slate-900 dark:text-white">{chapter.title}</h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{chapter.summary}</p>

            <ol className="mt-4 space-y-3">
              {chapter.steps.map((step) => (
                <li key={step.id} className="border-l-2 border-slate-200 pl-4 dark:border-slate-800">
                  <p className="text-slate-800 dark:text-slate-200">{step.text}</p>
                  {step.achievementIds && step.achievementIds.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {step.achievementIds.map((id) => {
                        const achievement = achievementById.get(id)
                        if (!achievement) return null
                        const done = isComplete(id)
                        return (
                          <button
                            key={id}
                            type="button"
                            onClick={() => toggle(id)}
                            className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                              done
                                ? 'border-indigo-300 bg-indigo-50 text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-300'
                                : 'border-slate-200 text-slate-600 dark:border-slate-800 dark:text-slate-400'
                            }`}
                          >
                            {done ? '✓ ' : ''}
                            {achievement.name}
                          </button>
                        )
                      })}
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </div>
  )
}
