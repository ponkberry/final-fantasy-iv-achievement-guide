import type { WalkthroughChapter } from '../types'

interface ChapterProgress {
  done: number
  total: number
}

interface WalkthroughNavProps {
  chapters: WalkthroughChapter[]
  progressByChapter: Record<string, ChapterProgress>
}

function scrollToChapter(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function WalkthroughNav({ chapters, progressByChapter }: WalkthroughNavProps) {
  return (
    <>
      {/* Mobile / narrow screens: dropdown jump menu */}
      <div className="mb-6 md:hidden">
        <label htmlFor="chapter-jump" className="sr-only">
          Jump to chapter
        </label>
        <select
          id="chapter-jump"
          defaultValue=""
          onChange={(e) => {
            if (e.target.value) scrollToChapter(e.target.value)
            e.target.value = ''
          }}
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
        >
          <option value="" disabled>
            Jump to chapter…
          </option>
          {chapters.map((chapter, i) => (
            <option key={chapter.id} value={chapter.id}>
              {i + 1}. {chapter.title}
            </option>
          ))}
        </select>
      </div>

      {/* Wider screens: sticky sidebar */}
      <nav className="hidden shrink-0 md:block md:w-64">
        <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-500">
            Chapters
          </p>
          <ol className="space-y-0.5 text-sm">
            {chapters.map((chapter, i) => {
              const progress = progressByChapter[chapter.id]
              const complete = progress && progress.total > 0 && progress.done === progress.total
              return (
                <li key={chapter.id}>
                  <button
                    type="button"
                    onClick={() => scrollToChapter(chapter.id)}
                    className="flex w-full items-center gap-2 rounded px-2 py-1 text-left text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                  >
                    <span className="w-5 shrink-0 text-right text-xs text-slate-400 dark:text-slate-600">
                      {i + 1}
                    </span>
                    <span className="flex-1 truncate">{chapter.title}</span>
                    {progress && progress.total > 0 && (
                      <span
                        className={`shrink-0 text-xs ${
                          complete
                            ? 'text-indigo-600 dark:text-indigo-400'
                            : 'text-slate-400 dark:text-slate-600'
                        }`}
                      >
                        {complete ? '✓' : `${progress.done}/${progress.total}`}
                      </span>
                    )}
                  </button>
                </li>
              )
            })}
          </ol>
        </div>
      </nav>
    </>
  )
}
