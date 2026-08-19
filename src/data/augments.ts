import type { AugmentEntry } from '../types'

// Sourced from the Steam Community guide "100% Achievements Guide" by ArtificialRaven, cross-referenced
// against the walkthrough chapters already built out. Chapter placements mark when each augment first
// becomes available, not necessarily the earliest possible moment in every case (some involve returning
// to an earlier location after a later story beat) - treat these the same as other community-sourced
// placements in this guide: a solid starting point, not gospel.
export const augments: AugmentEntry[] = [
  { id: 'auto-potion', name: 'Auto-Potion', chapterId: 'ch03-kaipo', notes: 'Rosa gives it to you; cannot be missed.' },
  { id: 'item-lore', name: 'Item Lore', chapterId: 'ch06-antlions-den', notes: 'On the ground at the Kaipo beach where Edward fights the Sahagin.' },
  { id: 'counter', name: 'Counter', chapterId: 'ch07-mt-hobs-fabul', notes: "Yang's wife gives it before you board the ship to Baron." },
  { id: 'curse', name: 'Curse', chapterId: 'ch08-mysidia-ordeals', notes: "On the ground heading back down Mount Ordeals after Scarmiglione's true form." },
  { id: 'twincast', name: 'Twincast', chapterId: 'ch10-mysidia-troia', notes: 'From the Mysidia Elder after Palom and Porom turn to stone.' },
  { id: 'bluff', name: 'Bluff', chapterId: 'ch10-mysidia-troia', notes: 'Same as Twincast, but only if you gave Palom at least 1 augment before the Cagnazzo fight.' },
  { id: 'cry', name: 'Cry', chapterId: 'ch10-mysidia-troia', notes: 'Same as Twincast, but only if you gave Porom at least 1 augment before the Cagnazzo fight.' },
  { id: 'dualcast', name: 'Dualcast', chapterId: 'ch10-mysidia-troia', notes: 'Same as Twincast, but only if you gave a total of 2 augments to either twin before the Cagnazzo fight.' },
  { id: 'tsunami', name: 'Tsunami', chapterId: 'ch10-mysidia-troia', notes: "Glowing on the ground in Baron Castle's Ancient Waterway after defeating Cagnazzo." },
  { id: 'gil-farmer', name: 'Gil Farmer', chapterId: 'ch10-mysidia-troia', notes: "Troia pub: buy a Member's Writ for 100,000 gil, then find it in the dressing room." },
  { id: 'bardsong', name: 'Bardsong', chapterId: 'ch10-mysidia-troia', notes: 'Return to Edward in Troia Castle after defeating the Dark Elf.' },
  { id: 'salve', name: 'Salve', chapterId: 'ch10-mysidia-troia', notes: 'Same as Bardsong, but only if you gave Edward at least 1 augment before boarding the ship near Fabul.' },
  { id: 'hide', name: 'Hide', chapterId: 'ch10-mysidia-troia', notes: 'Same as Bardsong, but only if you gave Edward 2 augments before boarding the ship near Fabul.' },
  { id: 'whirlwind', name: 'Whirlwind', chapterId: 'ch11-tower-of-zot', notes: "In Lodestone Cavern's Crystal Room, once Barbariccia is defeated." },
  { id: 'recall', name: 'Recall', chapterId: 'ch11-tower-of-zot', notes: 'On the ground where Tellah dies.' },
  { id: 'last-stand', name: 'Last Stand', chapterId: 'ch11-tower-of-zot', notes: 'Same as Recall, but only if you gave Tellah at least 1 augment before the Magus Sisters fight.' },
  { id: 'fast-talker', name: 'Fast Talker', chapterId: 'ch11-tower-of-zot', notes: 'Same as Recall, but only if you gave Tellah 2 augments before the Magus Sisters fight.' },
  { id: 'draw-attacks', name: 'Draw Attacks', chapterId: 'ch13-dwarven-castle', notes: 'King Giott gives it after Calcabrina and Golbez are defeated at Dwarven Castle.' },
  { id: 'reach', name: 'Reach', chapterId: 'ch13-dwarven-castle', notes: "In the Developers' Office, after talking to everyone there." },
  { id: 'eye-gouge', name: 'Eye Gouge', chapterId: 'ch13-dwarven-castle', notes: "From Namingway in the Dwarven Castle pub, as part of the Rabbit Chaser questline." },
  { id: 'analyze', name: 'Analyze', chapterId: 'ch17-underworld-sidequests', notes: 'From Cid in the Dwarven Castle infirmary, once he finishes upgrading your ship.' },
  { id: 'upgrade', name: 'Upgrade', chapterId: 'ch17-underworld-sidequests', notes: 'Same as Analyze, but only if you gave Cid at least 1 augment before he left the party.' },
  { id: 'adrenaline', name: 'Adrenaline', chapterId: 'ch17-underworld-sidequests', notes: 'Same as Analyze, but only if you gave Cid 2 augments before he left the party.' },
  { id: 'focus', name: 'Focus', chapterId: 'ch17-underworld-sidequests', notes: "Yang gives it after you wake him with his wife's frying pan." },
  { id: 'kick', name: 'Kick', chapterId: 'ch17-underworld-sidequests', notes: 'Same as Focus, but only if you gave Yang at least 1 augment before the Fabul dock, early in the game.' },
  { id: 'brace', name: 'Brace', chapterId: 'ch17-underworld-sidequests', notes: 'Same as Focus, but only if you gave Yang 2 augments before the Fabul dock, early in the game.' },
  { id: 'mp-plus-50', name: 'MP+50%', chapterId: 'ch17-underworld-sidequests', notes: 'In the northwestern house in Mist, once your ship has been upgraded.' },
  { id: 'inferno', name: 'Inferno', chapterId: 'ch16-tower-of-babil-upper', notes: 'On the ground in Eblan Cave where Rubicante and Edge dueled, once Rubicante is defeated.' },
  { id: 'darkness', name: 'Darkness', chapterId: 'ch19-odin-lunar-whale', notes: 'Steal it from Odin with Edge before landing the finishing blow.' },
  { id: 'level-lust', name: 'Level Lust', chapterId: 'ch20-moon-lair-of-father', notes: 'On the ground somewhere in the Hummingway Abode on the Moon.' },
  { id: 'hp-plus-50', name: 'HP+50%', chapterId: 'ch21-giant-of-babil', notes: 'On the roof of Baron Castle, once the CPU is defeated.' },
  { id: 'piercing-magic', name: 'Piercing Magic', chapterId: 'ch22-lunar-subterrane', notes: 'A longer, multi-step pickup - worth checking a dedicated stat-maxing guide for the exact route.' },
  { id: 'bless', name: 'Bless', chapterId: 'ch21-giant-of-babil', notes: 'On the ground where you first met Fusoya on the Moon, once the CPU is defeated.' },
  { id: 'omnicasting', name: 'Omnicasting', chapterId: 'ch21-giant-of-babil', notes: 'Same as Bless, but only if you gave Fusoya at least 1 augment before the CPU fight.' },
  { id: 'phoenix', name: 'Phoenix', chapterId: 'ch21-giant-of-babil', notes: 'Same as Bless, but only if you gave Fusoya 2 augments before the CPU fight.' },
  { id: 'love', name: '????Love', chapterId: 'ch19-odin-lunar-whale', notes: "Namingway gives it in Mysidia once you've named his intended, as part of the Rabbit Chaser questline." },
  { id: 'safe-travel', name: 'Safe Travel', chapterId: 'ch22-lunar-subterrane', notes: 'Reward for finishing the entire Rabbit Chaser questline.' },
  { id: 'treasure-hunter', name: 'Treasure Hunter', chapterId: 'ch22-lunar-subterrane', notes: 'Automatically granted once you reach 100% map completion on every dungeon.' },
  { id: 'limit-break', name: 'Limit Break', chapterId: 'ch24-new-game-plus', notes: 'You start New Game+ already holding this one.' },
]
