import type { Achievement } from '../types'

// PLACEHOLDER CONTENT — replace with the real Steam/platform achievement list
// for FFIV (3D Remake). Keep `id` stable once players may have saved progress,
// since progress is tracked by id in session storage.
export const achievements: Achievement[] = [
  {
    id: 'first-steps',
    name: 'First Steps',
    description: 'Escape the village of Mist with Rydia.',
    category: 'Story',
    chapterId: 'ch01-baron',
  },
  {
    id: 'antlion-slayer',
    name: 'Antlion Slayer',
    description: 'Defeat the Antlion in its den near Kaipo.',
    category: 'Combat',
    chapterId: 'ch02-kaipo',
  },
  {
    id: 'bestiary-novice',
    name: 'Bestiary Novice',
    description: 'Record 25 different monsters in the bestiary.',
    category: 'Collection',
  },
  {
    id: 'treasure-hunter',
    name: 'Treasure Hunter',
    description: 'Open 50 treasure chests.',
    category: 'Collection',
  },
  {
    id: 'full-party',
    name: 'Full Party',
    description: 'Recruit every playable character.',
    category: 'Sidequest',
  },
]
