import type { WalkthroughChapter } from '../types'

// PLACEHOLDER CONTENT — replace with the real FFIV (3D Remake) walkthrough.
// Each chapter is a self-contained section of the guide; steps are shown in order.
export const walkthrough: WalkthroughChapter[] = [
  {
    id: 'ch01-baron',
    title: 'Chapter 1 — Baron',
    summary: 'Cecil is stripped of his Dark Knight duties and sent to Mist.',
    steps: [
      {
        id: 'ch01-step01',
        text: 'Deliver the ring to the village of Mist as ordered by the King of Baron.',
      },
      {
        id: 'ch01-step02',
        text: 'Escape Mist after the summoners are destroyed; meet Rydia.',
        achievementIds: ['first-steps'],
      },
    ],
  },
  {
    id: 'ch02-kaipo',
    title: 'Chapter 2 — Kaipo',
    summary: 'Cecil and Rydia recover in the desert oasis town of Kaipo.',
    steps: [
      {
        id: 'ch02-step01',
        text: 'Rest at the inn, then head into the Antlion\'s Den to find medicine for the villagers.',
      },
    ],
  },
]
