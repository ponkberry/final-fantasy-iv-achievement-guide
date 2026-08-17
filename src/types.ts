export type AchievementCategory =
  | 'Story'
  | 'Sidequest'
  | 'Collection'
  | 'Combat'
  | 'Miscellaneous'

export interface Achievement {
  id: string
  name: string
  description: string
  category: AchievementCategory
  /** path to the achievement icon, relative to the site root */
  icon: string
  /** id of the walkthrough chapter where this achievement is first obtainable */
  chapterId?: string
  /** if set, this achievement auto-completes once bestiary completion reaches this percent, and can't be toggled manually */
  bestiaryThreshold?: number
}

export interface BestiaryEntry {
  number: number
  name: string
  location: string
  notes?: string
}

export interface WalkthroughStep {
  id: string
  text: string
  /** achievement ids relevant to this step, shown as inline callouts */
  achievementIds?: string[]
}

export interface WalkthroughChapter {
  id: string
  title: string
  summary: string
  steps: WalkthroughStep[]
}
