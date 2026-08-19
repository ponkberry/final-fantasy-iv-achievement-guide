export type AchievementCategory =
  | 'Story'
  | 'Sidequest'
  | 'Collection'
  | 'Combat'
  | 'Miscellaneous'

export interface AchievementSubItem {
  id: string
  label: string
}

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
  /** if set, this achievement auto-completes once this many augments are checked off, and can't be toggled manually */
  augmentThreshold?: number
  /**
   * if set, this achievement is made up of several individually-trackable parts (e.g. 13 Namingway
   * sightings, or a list of summons) - it auto-completes once every part is checked off, and can't
   * be toggled manually as a whole
   */
  subItems?: AchievementSubItem[]
}

export interface BestiaryEntry {
  number: number
  name: string
  location: string
  notes?: string
  /** id of the walkthrough chapter where this monster is first encountered */
  chapterId?: string
  /** additional chapters where this monster also reappears and is worth noting */
  extraChapterIds?: string[]
}

export interface AugmentEntry {
  id: string
  name: string
  notes?: string
  /** id of the walkthrough chapter where this augment first becomes obtainable */
  chapterId?: string
}

export interface WalkthroughStep {
  id: string
  text: string
  /** achievement ids relevant to this step, shown as inline callouts */
  achievementIds?: string[]
  /** specific sub-items of multi-part achievements (see Achievement.subItems) relevant to this step */
  subAchievementIds?: { achievementId: string; subItemId: string }[]
}

export interface WalkthroughChapter {
  id: string
  title: string
  summary: string
  steps: WalkthroughStep[]
}
