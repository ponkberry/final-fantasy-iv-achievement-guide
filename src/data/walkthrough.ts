import type { WalkthroughChapter } from '../types'

// Sourced primarily from -Alarielle-'s DS-version walkthrough on the Final Fantasy Wiki
// (https://finalfantasy.fandom.com/wiki/Walkthrough:Final_Fantasy_IV/-Alarielle-), cross-referenced
// against two Steam Community guides for 3D-Remake-specific achievement/augment/missable details:
// "Permanent Missable Content related to Achievements" by lylat (id 317991337) and
// "100% Achievements Guide" by ArtificialRaven (id 469316961). Step text is paraphrased, not copied.
export const walkthrough: WalkthroughChapter[] = [
  {
    id: 'ch01-baron',
    title: 'Baron Castle',
    summary: 'Cecil begins the game as a Dark Knight of Baron and is stripped of his post after a brutal mission.',
    steps: [
      {
        id: 'ch01-baron-s01',
        text: 'Start a new game. In the opening battle over Baron, defeat the two Floating Eyes as Cecil.',
        achievementIds: ['customer-appreciation'],
      },
      {
        id: 'ch01-baron-s02',
        text: 'Return to Baron Castle, report to the King with the stolen Water Crystal, and get relieved of command of the Red Wings. Kain defends you.',
      },
      {
        id: 'ch01-baron-s03',
        text: 'Explore Baron Castle and the town below before you leave. In the west tower you can find Namingway, who marks the first of thirteen sightings across the whole game - talking to him now starts the Rabbit Chaser sidequest.',
        subAchievementIds: [{ achievementId: 'rabbit-chaser', subItemId: 'sighting-01' }],
      },
      {
        id: 'ch01-baron-s04',
        text: 'In the town of Baron, find the building near the item shop and head down to the basement to find the Training Classroom. Talk to every NPC in the room.',
        achievementIds: ['training-complete'],
      },
      {
        id: 'ch01-baron-s05',
        text: 'Helldivers just outside Baron have a very rare chance to drop the hidden Cockatrice summon - not required for a first pass, but worth knowing about early.',
        subAchievementIds: [{ achievementId: 'expert-summoner', subItemId: 'cockatrice' }],
      },
      {
        id: 'ch01-baron-s06',
        text: 'Rest, then set out for Mist with Kain to deliver a ring and investigate the summoners there.',
      },
    ],
  },
  {
    id: 'ch02-mist-cave',
    title: 'Mist Cave',
    summary: 'Cecil and Kain descend into the cave beneath Mist to root out a dangerous summoner.',
    steps: [
      {
        id: 'ch02-mist-cave-s01',
        text: 'Enter Mist Cave. Complete each room\'s map for bonus items as you go.',
      },
      {
        id: 'ch02-mist-cave-s02',
        text: 'Goblins here have a very rare chance to drop the hidden Goblin summon.',
        subAchievementIds: [{ achievementId: 'expert-summoner', subItemId: 'goblin' }],
      },
      {
        id: 'ch02-mist-cave-s03',
        text: 'Namingway appears again partway through the cave and becomes Mappingway, marking your second sighting.',
        subAchievementIds: [{ achievementId: 'rabbit-chaser', subItemId: 'sighting-02' }],
      },
      {
        id: 'ch02-mist-cave-s04',
        text: 'Push through to the depths of the cave and defeat the Mist Dragon.',
      },
      {
        id: 'ch02-mist-cave-s05',
        text: 'Leave the cave and enter the village of Mist.',
        achievementIds: ['mission-accomplished'],
      },
    ],
  },
  {
    id: 'ch03-kaipo',
    title: 'Kaipo',
    summary: 'The village of Mist is destroyed by the very bombs Cecil delivered, and the party flees to the desert town of Kaipo.',
    steps: [
      {
        id: 'ch03-kaipo-s01',
        text: 'Watch Mist burn and lose Kain as the earth splits beneath you. Cecil wakes up beside a young girl, Rydia.',
      },
      {
        id: 'ch03-kaipo-s02',
        text: 'Travel with Rydia to Kaipo and rest at the inn.',
      },
      {
        id: 'ch03-kaipo-s03',
        text: 'That night, a Baron General and his soldiers attack. Kill the General first - this is required for its bestiary entry, or he flees and you lose the credit.',
      },
      {
        id: 'ch03-kaipo-s04',
        text: 'Rydia formally joins the party as a Summoner, bringing her eidolon partner Whyt with her. As a child she already knows one real summon, Chocobo.',
        achievementIds: ['apprentice-summoner'],
        subAchievementIds: [{ achievementId: 'master-summoner', subItemId: 'chocobo' }],
      },
      {
        id: 'ch03-kaipo-s05',
        text: 'In the northeastern house you find Rosa, who has secretly followed you and fallen ill. She gives you your first Augment, Auto-Potion.',
        achievementIds: ['augment-novice'],
        augmentIds: ['auto-potion'],
      },
      {
        id: 'ch03-kaipo-s06',
        text: 'Namingway is in this same house and shows you the Bestiary for your third sighting.',
        subAchievementIds: [{ achievementId: 'rabbit-chaser', subItemId: 'sighting-03' }],
      },
      {
        id: 'ch03-kaipo-s07',
        text: 'Learn that a Sand Pearl from a cave near Damcyan can cure Rosa, and set out for the Underground Waterway.',
      },
    ],
  },
  {
    id: 'ch04-underground-waterway',
    title: 'Underground Waterway and Underground Lake',
    summary: 'A long, two-part dungeon standing between Kaipo and Damcyan.',
    steps: [
      {
        id: 'ch04-underground-waterway-s01',
        text: 'Descend into the Underground Waterway. Partway through you meet and recruit Tellah, an aging Sage searching for the ultimate spell, Meteor.',
      },
      {
        id: 'ch04-underground-waterway-s02',
        text: 'Work your way through the Underground Waterway\'s floors, collecting equipment and completing maps for item rewards.',
      },
      {
        id: 'ch04-underground-waterway-s03',
        text: 'Exit the Underground Waterway back onto the World Map, then head north to find the entrance to the second half of this dungeon, the Underground Lake.',
      },
      {
        id: 'ch04-underground-waterway-s04',
        text: 'Work through the Underground Lake\'s floors the same way - this is where Red Mousse and Alligator turn up, both on B2.',
      },
      {
        id: 'ch04-underground-waterway-s05',
        text: 'At the bottom of the dungeon, defeat the Octomammoth.',
      },
      {
        id: 'ch04-underground-waterway-s06',
        text: 'Climb out through the waterfall to see the Red Wings attacking Damcyan Castle. Tellah leaves the party here.',
      },
    ],
  },
  {
    id: 'ch05-damcyan',
    title: 'Damcyan Castle',
    summary: 'Damcyan has already fallen to Golbez and the Red Wings by the time you arrive.',
    steps: [
      {
        id: 'ch05-damcyan-s01',
        text: 'Enter the ruined Damcyan Castle.',
        achievementIds: ['assault'],
      },
      {
        id: 'ch05-damcyan-s02',
        text: 'Meet Edward, Prince of Damcyan, and Anna, Tellah\'s daughter. Golbez has already taken the Crystal and moved on. Edward joins the party.',
      },
      {
        id: 'ch05-damcyan-s03',
        text: 'Loot the castle\'s hidden passages and cells before leaving.',
      },
      {
        id: 'ch05-damcyan-s04',
        text: 'Take Edward\'s hovercraft east to Antlion\'s Den to find the Sand Pearl.',
      },
    ],
  },
  {
    id: 'ch06-antlions-den',
    title: 'Antlion\'s Den',
    summary: 'A cave of giant insects guarding the Sand Pearl that can cure Rosa.',
    steps: [
      {
        id: 'ch06-antlions-den-s01',
        text: 'Work through Antlion\'s Den, collecting the Lamia Harp and other treasure along the way. Still need the Sand Worm for your bestiary? It\'s easier to find here than out in the desert near Kaipo.',
      },
      {
        id: 'ch06-antlions-den-s02',
        text: 'Defeat the Antlion at the bottom of the den to claim the Sand Pearl.',
      },
      {
        id: 'ch06-antlions-den-s03',
        text: 'Return to Kaipo and use the Sand Pearl on Rosa. That night, Edward slips out to the oasis alone and is attacked by a Sahagin. Anna\'s spirit appears to give him courage - defeat the Sahagin to pass this test of nerve. The Item Lore Augment is on the ground here too.',
        achievementIds: ['bravery'],
        augmentIds: ['item-lore'],
      },
      {
        id: 'ch06-antlions-den-s04',
        text: 'Rosa recovers and Edward finds his confidence, and Rosa joins the party as a White Mage/Archer.',
      },
    ],
  },
  {
    id: 'ch07-mt-hobs-fabul',
    title: 'Mount Hobs & Fabul',
    summary: 'The party crosses Mount Hobs to warn Fabul of Baron\'s plans, gaining a Monk ally along the way.',
    steps: [
      {
        id: 'ch07-mt-hobs-fabul-s01',
        text: 'Climb Mount Hobs. Rydia learns Fire here after being coaxed into casting it on an ice wall.',
      },
      {
        id: 'ch07-mt-hobs-fabul-s02',
        text: 'At the summit, help Yang fend off monsters; he joins the party as a Monk, and together you face a Mom Bomb.',
        achievementIds: ['big-bang'],
      },
      {
        id: 'ch07-mt-hobs-fabul-s03',
        text: 'Namingway is at the inn in Fabul Castle for your fourth sighting.',
        subAchievementIds: [{ achievementId: 'rabbit-chaser', subItemId: 'sighting-04' }],
      },
      {
        id: 'ch07-mt-hobs-fabul-s04',
        text: 'Rest and gear up at Fabul, then agree to help defend the castle from the Red Wings.',
      },
      {
        id: 'ch07-mt-hobs-fabul-s05',
        text: 'Fight off wave after wave of invaders alongside Yang, falling back through the castle each time.',
      },
      {
        id: 'ch07-mt-hobs-fabul-s06',
        text: 'In the Crystal Room, Kain - now mind-controlled - attacks you. You cannot win this fight; simply survive it. Golbez then appears, defeats the party, and takes Rosa and the Wind Crystal.',
      },
      {
        id: 'ch07-mt-hobs-fabul-s07',
        text: 'Last chance to give Edward augments before boarding this ship - he\'s swept away in the wreck ahead. He leaves with Bardsong by default, Salve if given exactly 1 augment, or Hide if given 2. On a first playthrough, avoid giving him any - it\'s the default and you can go for Salve or Hide on New Game+ instead.',
      },
      {
        id: 'ch07-mt-hobs-fabul-s08',
        text: 'The King of Fabul lends you a ship to reach Cid in Baron. Before boarding, Yang\'s wife gives you the Counter Augment.',
        augmentIds: ['counter'],
      },
      {
        id: 'ch07-mt-hobs-fabul-s09',
        text: 'On the voyage, Leviathan attacks the ship. Cecil is thrown overboard and washes up alone near Mysidia.',
        achievementIds: ['alone-again'],
      },
    ],
  },
  {
    id: 'ch08-mysidia-ordeals',
    title: 'Mysidia & Mount Ordeals',
    summary: 'Cecil seeks forgiveness in Mysidia and climbs Mount Ordeals to shed his Dark Knight power.',
    steps: [
      {
        id: 'ch08-mysidia-ordeals-s01',
        text: 'Enter Mysidia and speak with the Elder, who sends you to Mount Ordeals to earn a sword of light. He assigns the twins Palom and Porom to accompany you.',
      },
      {
        id: 'ch08-mysidia-ordeals-s02',
        text: 'Before you leave the overworld outside Mysidia, make sure Cecil (Dark Knight) has reached at least level 25 - this is missable once Cecil becomes a Paladin at the top of the mountain.',
        achievementIds: ['deep-into-darkness'],
      },
      {
        id: 'ch08-mysidia-ordeals-s03',
        text: 'A Chocobo Forest south of the mountain holds your fifth Namingway sighting; he buys all your Tents for 300 gil.',
        subAchievementIds: [{ achievementId: 'rabbit-chaser', subItemId: 'sighting-05' }],
      },
      {
        id: 'ch08-mysidia-ordeals-s04',
        text: 'Climb Mount Ordeals. Golbez summons Scarmiglione to stop you partway up - a Skulnant spawns partway through this first-phase fight.',
      },
      {
        id: 'ch08-mysidia-ordeals-s05',
        text: 'Reunite with Tellah, now hunting Golbez for revenge, and continue climbing.',
      },
      {
        id: 'ch08-mysidia-ordeals-s06',
        text: 'Defeat Scarmiglione\'s true form near the summit.',
        achievementIds: ['defeated-scarmiglione'],
      },
      {
        id: 'ch08-mysidia-ordeals-s07',
        text: 'At the peak, Cecil confronts and refuses to fight his own Dark Knight shadow, earning the sacred sword of light and transforming into a Paladin.',
      },
      {
        id: 'ch08-mysidia-ordeals-s08',
        text: 'Head back down Mount Ordeals, picking up the Curse Augment on the way, then return to Mysidia before heading back to Baron.',
        augmentIds: ['curse'],
      },
    ],
  },
  {
    id: 'ch09-baron-retaken',
    title: 'Retaking Baron',
    summary: 'Cecil returns to a city that believes him dead, to find Cid imprisoned and the King\'s castle held by an impostor.',
    steps: [
      {
        id: 'ch09-baron-retaken-s01',
        text: 'Sneak back into Baron and recruit Yang, who has infiltrated the castle guard, using his stolen key.',
      },
      {
        id: 'ch09-baron-retaken-s02',
        text: 'The key also opens the castle shop - find Namingway inside for your sixth sighting.',
        subAchievementIds: [{ achievementId: 'rabbit-chaser', subItemId: 'sighting-06' }],
      },
      {
        id: 'ch09-baron-retaken-s03',
        text: 'Enter the Ancient Waterway beneath the castle and fight through to the throne room above.',
      },
      {
        id: 'ch09-baron-retaken-s04',
        text: 'Baigan, the King\'s advisor, reveals himself as a traitor empowered by Golbez and attacks.',
      },
      {
        id: 'ch09-baron-retaken-s05',
        text: 'Last chance to give Palom and Porom augments before the Cagnazzo fight. Each twin leaves with Twincast by default; giving Palom 1 augment yields Bluff instead, giving Porom 1 augment yields Cry instead, and giving either twin 2 augments alone (not split between both) yields Dualcast. Recommended: give Item Lore to Palom, Auto-Potion to Porom, then Curse to either one, so each twin has at least 1 augment and one of them has 2.',
      },
      {
        id: 'ch09-baron-retaken-s06',
        text: 'Confront the fake King in the throne room: Cagnazzo, one of Golbez\'s four Elemental Archfiends.',
        achievementIds: ['defeated-cagnazzo'],
      },
      {
        id: 'ch09-baron-retaken-s07',
        text: 'Cid arrives with a new airship, the Enterprise, but Cagnazzo brings the ceiling down as you flee - Palom and Porom sacrifice themselves, turning to stone to save the party.',
      },
      {
        id: 'ch09-baron-retaken-s08',
        text: 'With the Enterprise now yours, Cid joins the party as an Engineer. Kain, still controlled by Golbez, offers to trade the last Crystal for Rosa - the party heads for Mist and Mysidia before pursuing the exchange.',
      },
    ],
  },
  {
    id: 'ch10-mysidia-troia',
    title: 'Mysidia, Mythril & Troia',
    summary: 'With an airship at last, the party gathers augments, gear, and allies before confronting the Dark Elf.',
    steps: [
      {
        id: 'ch10-mysidia-troia-s01',
        text: 'Return to Mysidia to collect Augments from the Elder.',
        augmentIds: ['twincast', 'bluff', 'cry', 'dualcast'],
      },
      {
        id: 'ch10-mysidia-troia-s02',
        text: 'In Baron Castle\'s Ancient Waterway, find the Tsunami Augment for the fight ahead.',
        augmentIds: ['tsunami'],
      },
      {
        id: 'ch10-mysidia-troia-s03',
        text: 'Visit the town of Mythril to shop, then head to Troia, ruled entirely by priestesses called Epopts. In the Troia pub, a Member\'s Writ (100,000 gil) unlocks a dressing room with the Gil Farmer Augment.',
        augmentIds: ['gil-farmer'],
      },
      {
        id: 'ch10-mysidia-troia-s04',
        text: 'In Troia, Namingway is behind the item shop first for your seventh sighting, then moves to the pub, where you need to distract one of his two dates.',
        subAchievementIds: [{ achievementId: 'rabbit-chaser', subItemId: 'sighting-07' }],
      },
      {
        id: 'ch10-mysidia-troia-s05',
        text: 'The Epopts ask you to recover Troia\'s Crystal from a Dark Elf holed up in a magnetic cave - swap to non-metal equipment before entering.',
      },
      {
        id: 'ch10-mysidia-troia-s06',
        text: 'Before leaving Troia Castle, go to the west tower and find Edward in the infirmary. He gives you Whisperweed - without it, the Dark Elf fight ahead is unwinnable.',
      },
      {
        id: 'ch10-mysidia-troia-s07',
        text: 'Take a Black Chocobo to Lodestone Cavern and fight through to the Crystal room. Mindflayers on B2 have a very rare chance to drop the hidden Mindflayer summon.',
        subAchievementIds: [{ achievementId: 'expert-summoner', subItemId: 'mindflayer' }],
      },
      {
        id: 'ch10-mysidia-troia-s08',
        text: 'Defeat the Dark Elf and his true dragon form.',
        achievementIds: ['saved-by-music'],
      },
    ],
  },
  {
    id: 'ch11-tower-of-zot',
    title: 'Tower of Zot',
    summary: 'Kain leads the party into a trap at the top of a tower held by Golbez\'s forces. One-time visit: the tower isn\'t accessible again once you leave it, so fully explore it now.',
    steps: [
      {
        id: 'ch11-tower-of-zot-s01',
        text: 'Return to Troia to resupply, then find Edward in Troia Castle - defeating the Dark Elf earns you the Bardsong Augment.',
        augmentIds: ['bardsong'],
      },
      {
        id: 'ch11-tower-of-zot-s02',
        text: 'Board the ship - Kain offers to lead you to the Tower of Zot, but it is a trap: the Crystal is at the top and you start at the bottom.',
      },
      {
        id: 'ch11-tower-of-zot-s03',
        text: 'Climb the Tower of Zot, watching for the Flamehounds\' powerful breath attacks.',
      },
      {
        id: 'ch11-tower-of-zot-s04',
        text: 'Last chance to give Tellah augments before the Magus Sisters fight - he dies shortly after. He leaves behind Recall by default, Last Stand if given at least 1 augment, or Fast Talker if given at least 2. Recommended: give him Tsunami and Bardsong.',
      },
      {
        id: 'ch11-tower-of-zot-s05',
        text: 'Partway up, defeat the Magus Sisters - Cindy, Sandy, and Mindy.',
        achievementIds: ['delta-attack-defiance'],
      },
      {
        id: 'ch11-tower-of-zot-s06',
        text: 'Tellah confronts Golbez alone and casts Meteor, but it only wounds him - the spell costs Tellah his life, and Golbez\'s mind control over Kain shatters. He leaves behind the Recall Augment (Last Stand and Fast Talker are also possible here).',
        augmentIds: ['recall', 'last-stand', 'fast-talker'],
        warning: 'POINT OF NO RETURN: fully clear and map the lower floors now - the tower collapses once Barbariccia is defeated on 6F.',
      },
      {
        id: 'ch11-tower-of-zot-s07',
        text: 'Kain and Rosa rejoin the party. Head up to 6F and defeat Barbariccia.',
        achievementIds: ['defeated-barbariccia'],
      },
      {
        id: 'ch11-tower-of-zot-s08',
        text: 'Barbariccia collapses the tower behind you, but Rosa teleports the party to safety.',
      },
    ],
  },
  {
    id: 'ch12-eblan-agart',
    title: 'Eblan Castle & Agart',
    summary: 'Golbez\'s forces have already gutted Eblan; the party presses on to the Underworld.',
    steps: [
      {
        id: 'ch12-eblan-agart-s01',
        text: 'Explore the abandoned Eblan Castle, looting its towers and hidden passages.',
      },
      {
        id: 'ch12-eblan-agart-s02',
        text: 'Fly to the mining town of Agart in the Underworld region above.',
      },
      {
        id: 'ch12-eblan-agart-s03',
        text: 'Namingway waits outside a house in Agart asking for a Rainbow Pudding for your eighth sighting - a rare monster drop you can chase down now or return for later.',
        subAchievementIds: [{ achievementId: 'rabbit-chaser', subItemId: 'sighting-08' }],
      },
      {
        id: 'ch12-eblan-agart-s04',
        text: 'Use Kain\'s magma rock on the town well to blast open a route to the Underworld, then fly the Enterprise down through the hole.',
      },
      {
        id: 'ch12-eblan-agart-s05',
        text: 'The Enterprise is damaged fighting through Red Wings tanks and crash-lands. Enter the nearby Dwarven Castle.',
      },
    ],
  },
  {
    id: 'ch13-dwarven-castle',
    title: 'Dwarven Castle',
    summary: 'The dwarves of the Underworld guard one of the last Dark Crystals.',
    steps: [
      {
        id: 'ch13-dwarven-castle-s01',
        text: 'Meet King Giott, who reveals Golbez already holds two Dark Crystals - Dwarven Castle\'s own Crystal is still safe, for now.',
      },
      {
        id: 'ch13-dwarven-castle-s02',
        text: 'In the castle pub, look for a hidden passage leading to the Developers\' Office and talk to everyone inside for the Reach Augment.',
        achievementIds: ['developers-pal'],
        augmentIds: ['reach'],
      },
      {
        id: 'ch13-dwarven-castle-s03',
        text: 'Namingway is also in the pub for your ninth sighting - he starts a fight before talking, then gives you the Eye Gouge Augment.',
        subAchievementIds: [{ achievementId: 'rabbit-chaser', subItemId: 'sighting-09' }],
        augmentIds: ['eye-gouge'],
      },
      {
        id: 'ch13-dwarven-castle-s04',
        text: 'The dwarf Luca\'s dolls, possessed by Golbez, attack in the Crystal Room - defeat Calcabrina.',
        achievementIds: ['defeated-calcabrina'],
      },
      {
        id: 'ch13-dwarven-castle-s05',
        text: 'Golbez himself appears next. The fight is unwinnable at first until an adult Rydia arrives to save the party, having grown up and returned with new power. She rejoins already knowing five more summons on top of Chocobo.',
        subAchievementIds: [{ achievementId: 'master-summoner', subItemId: 'shiva' }, { achievementId: 'master-summoner', subItemId: 'ifrit' }, { achievementId: 'master-summoner', subItemId: 'dragon' }, { achievementId: 'master-summoner', subItemId: 'titan' }, { achievementId: 'master-summoner', subItemId: 'ramuh' }],
      },
      {
        id: 'ch13-dwarven-castle-s06',
        text: 'Defeat this weakened form of Golbez, though he escapes with the Crystal regardless. King Giott gives you the Draw Attacks Augment for defeating Calcabrina and Golbez.',
        augmentIds: ['draw-attacks'],
      },
      {
        id: 'ch13-dwarven-castle-s07',
        text: 'King Giott sends you after the remaining Crystals in the Tower of Babil. Loot the castle, then descend into the tower.',
      },
    ],
  },
  {
    id: 'ch14-tower-of-babil-lower',
    title: 'Tower of Babil (First Visit)',
    summary: 'The lower half of Golbez\'s stronghold, guarded by the mad Dr. Lugae. One-time visit: these lower floors aren\'t accessible again once you leave, so fully explore them now.',
    steps: [
      {
        id: 'ch14-tower-of-babil-lower-s01',
        text: 'Descend through the Tower of Babil, fighting past Security Eyes and Flamehounds.',
      },
      {
        id: 'ch14-tower-of-babil-lower-s02',
        text: 'Deep in the tower, fight Barnabas and Dr. Lugae together, then Lugae\'s true form, Lugaeborg. Which one you kill first determines your bestiary credit: Lugae first gives you the Doctor entry, Barnabas first merges them into Barnabas-Z instead. The two are mutually exclusive in a single playthrough.',
        achievementIds: ['defeated-dr-lugae'],
      },
      {
        id: 'ch14-tower-of-babil-lower-s03',
        text: 'Last chance to give Yang augments before he sacrifices himself to stop the tower\'s cannons - he leaves the party right after. He leaves behind Focus by default, Kick if given at least 1 augment, or Brace if given at least 2.',
      },
      {
        id: 'ch14-tower-of-babil-lower-s04',
        text: 'Yang sacrifices himself to stop the tower\'s cannons from firing on the dwarves.',
      },
      {
        id: 'ch14-tower-of-babil-lower-s05',
        text: 'Last chance to give Cid augments before climbing out of the tower - he\'s separated from the party right after. He leaves behind Analyze by default, Upgrade if given at least 1 augment, or Adrenaline if given at least 2.',
      },
      {
        id: 'ch14-tower-of-babil-lower-s06',
        text: 'Climb back out of the tower - Cid saves the party from a collapsing bridge on the way.',
        warning: 'POINT OF NO RETURN: these lower floors aren\'t accessible again after this.',
      },
    ],
  },
  {
    id: 'ch15-eblan-cave',
    title: 'Eblan Cave',
    summary: 'The hidden refuge of Eblan\'s survivors, and the return of its long-lost prince.',
    steps: [
      {
        id: 'ch15-eblan-cave-s01',
        text: 'Use the grappling hook Cid\'s apprentices installed to retrieve the hovercraft, then reach Eblan Cave near the ruined castle.',
      },
      {
        id: 'ch15-eblan-cave-s02',
        text: 'Fight through the cave to find Eblan\'s survivors, sheltering underground.',
      },
      {
        id: 'ch15-eblan-cave-s03',
        text: 'Witness Rubicante defeat a young ninja in a duel - Edge, prince of Eblan, joins the party afterward.',
      },
    ],
  },
  {
    id: 'ch16-tower-of-babil-upper',
    title: 'Tower of Babil (Second Visit)',
    summary: 'The upper half of the tower, and a rematch with the fire Archfiend. One-time visit: the tower isn\'t accessible again after this visit, so fully explore it now.',
    steps: [
      {
        id: 'ch16-tower-of-babil-upper-s01',
        text: 'Edge cuts a new way into the Tower of Babil. Climb through its upper floors.',
      },
      {
        id: 'ch16-tower-of-babil-upper-s02',
        text: 'Balloons on B4 have a very rare chance to drop the hidden Bomb summon.',
        subAchievementIds: [{ achievementId: 'expert-summoner', subItemId: 'bomb' }],
      },
      {
        id: 'ch16-tower-of-babil-upper-s03',
        text: 'Face a false boss fight between Edge\'s parents, the King and Queen of Eblan, freed from Golbez\'s control.',
      },
      {
        id: 'ch16-tower-of-babil-upper-s04',
        text: 'Defeat Rubicante, the last of the four Elemental Archfiends fought individually.',
        achievementIds: ['defeated-rubicante'],
      },
      {
        id: 'ch16-tower-of-babil-upper-s05',
        text: 'The floor gives way before you reach the Crystal room, dropping you further down the tower - fight your way back out and steal the Falcon airship.',
        warning: 'POINT OF NO RETURN: the floor gives way right after this, and the tower is left behind for good.',
      },
    ],
  },
  {
    id: 'ch17-underworld-sidequests',
    title: 'Underworld Sidequests',
    summary: 'Before chasing the last Crystal, gather the Feymarch summons and revive Yang.',
    steps: [
      {
        id: 'ch17-underworld-sidequests-s01',
        text: 'Return to Dwarven Castle. King Giott asks you to retrieve the last Crystal from the Sealed Cave. Seek out Cid in the infirmary - once he finishes repairing the Falcon, it can fly over magma, and he gives you the Analyze Augment (Upgrade and Adrenaline are also possible here).',
        augmentIds: ['analyze', 'upgrade', 'adrenaline'],
      },
      {
        id: 'ch17-underworld-sidequests-s02',
        text: 'Visit Kokkol\'s Forge and Tomra to resupply.',
        subAugmentIds: [{ augmentId: 'piercing-magic', subItemId: 'kokkols-forge' }],
      },
      {
        id: 'ch17-underworld-sidequests-s03',
        text: 'Explore Sylvan Cave, using Rosa\'s Levitate to cross the poisoned water, for treasure and a Defender Sword.',
        subAugmentIds: [{ augmentId: 'piercing-magic', subItemId: 'sylvan-cave' }],
      },
      {
        id: 'ch17-underworld-sidequests-s04',
        text: 'At the back of Sylvan Cave, find the Sylphids tending to an unconscious Yang. He can\'t join yet, but a solution exists - remember Fabul.',
      },
      {
        id: 'ch17-underworld-sidequests-s05',
        text: 'Explore the Feymarch, home of the Eidolons, and reach its hidden city. In the house west of the inn, talk to the Eidolon inside - he asks you to bring his eight missing friends home. Two you likely already passed: one on the upper floor of Yang\'s hut in Sylvan Cave, and one by the well outside Kokkol\'s Forge.',
      },
      {
        id: 'ch17-underworld-sidequests-s06',
        text: 'Defeat Asura to earn her summon.',
        subAchievementIds: [{ achievementId: 'master-summoner', subItemId: 'asura' }],
      },
      {
        id: 'ch17-underworld-sidequests-s07',
        text: 'Defeat Leviathan to earn his summon - a different encounter from the earlier shipwreck.',
        subAchievementIds: [{ achievementId: 'master-summoner', subItemId: 'leviathan' }],
      },
      {
        id: 'ch17-underworld-sidequests-s08',
        text: 'Namingway is somewhere in the Feymarch for your tenth sighting; he asks you to choose a name for something close to his heart.',
        subAchievementIds: [{ achievementId: 'rabbit-chaser', subItemId: 'sighting-10' }],
      },
    ],
  },
  {
    id: 'ch18-sealed-cave',
    title: 'Sealed Cave',
    summary: 'The last unclaimed Crystal lies behind traps and living doors.',
    steps: [
      {
        id: 'ch18-sealed-cave-s01',
        text: 'Use Luca\'s necklace to unlock the Sealed Cave entrance.',
      },
      {
        id: 'ch18-sealed-cave-s02',
        text: 'Fight through the dungeon\'s living doors - reflect their Target skill back with Reflect to destroy them safely.',
      },
      {
        id: 'ch18-sealed-cave-s03',
        text: 'Reach the Crystal Room and take the last Crystal.',
      },
      {
        id: 'ch18-sealed-cave-s04',
        text: 'Defeat the Demon Wall as it closes in - Haste, Berserk, and Rydia\'s summons help you outrace it.',
        achievementIds: ['defeated-demon-wall'],
      },
      {
        id: 'ch18-sealed-cave-s05',
        text: 'Golbez ambushes the party as you leave, mind-controls Kain again, and steals the Crystal - he now holds all eight.',
      },
      {
        id: 'ch18-sealed-cave-s06',
        text: 'Return to Dwarven Castle and speak with King Giott - Cid gives the Falcon a second upgrade, fitting it with a drill to bore through rock. While here, check the Lali-ho Pub for another of the Eidolon\'s missing friends, seated at the table east of the counter.',
        subAugmentIds: [{ augmentId: 'piercing-magic', subItemId: 'dwarven-castle' }],
      },
    ],
  },
  {
    id: 'ch19-odin-lunar-whale',
    title: 'Odin & the Lunar Whale',
    summary: 'With the King of Dwarves\' path to the moon still a legend, the party tracks down one last Eidolon and a means to reach it.',
    steps: [
      {
        id: 'ch19-odin-lunar-whale-s01',
        text: 'With the Falcon\'s drill, dig back to Eblan Cave where Rubicante and Edge dueled for the Inferno Augment.',
        augmentIds: ['inferno'],
      },
      {
        id: 'ch19-odin-lunar-whale-s02',
        text: 'The party can also return to the surface world now. Stop by the northwestern house in Mist for the MP+50% Augment.',
        augmentIds: ['mp-plus-50'],
      },
      {
        id: 'ch19-odin-lunar-whale-s03',
        text: 'Lodestone Cavern\'s Crystal Room, back on the surface near Troia, now holds the Whirlwind Augment as well.',
        augmentIds: ['whirlwind'],
      },
      {
        id: 'ch19-odin-lunar-whale-s04',
        text: 'Two more of the Eidolon\'s missing friends are back on the surface: near the save point at the Mount Ordeals summit, and in the northern Black Chocobo Forest.',
        subAugmentIds: [{ augmentId: 'piercing-magic', subItemId: 'mount-ordeals' }, { augmentId: 'piercing-magic', subItemId: 'black-chocobo-forest' }],
      },
      {
        id: 'ch19-odin-lunar-whale-s05',
        text: 'At Fabul, give Yang\'s wife\'s frying pan to the Sylphids to finally wake him - he doesn\'t rejoin, but Rydia earns the Sylphid summon, along with the Focus Augment (Kick and Brace are also possible here).',
        subAchievementIds: [{ achievementId: 'master-summoner', subItemId: 'sylph' }],
        augmentIds: ['focus', 'kick', 'brace'],
      },
      {
        id: 'ch19-odin-lunar-whale-s06',
        text: 'Return to Baron Castle\'s east tower basement and fight Odin, who has waited there since you visited the Eidolons. Have Edge steal the Darkness Augment before landing the finishing blow.',
      },
      {
        id: 'ch19-odin-lunar-whale-s07',
        text: 'Defeat Odin to earn his summon.',
        subAchievementIds: [{ achievementId: 'master-summoner', subItemId: 'odin' }],
        augmentIds: ['darkness'],
      },
      {
        id: 'ch19-odin-lunar-whale-s08',
        text: 'Visit Mysidia. The Elder leads a prayer for the legendary Lunar Whale, which then rises from the water and finds Namingway waiting in the Elder\'s house for your eleventh sighting. Name his intended to receive the ????Love Augment.',
        subAchievementIds: [{ achievementId: 'rabbit-chaser', subItemId: 'sighting-11' }],
        augmentIds: ['love'],
      },
      {
        id: 'ch19-odin-lunar-whale-s09',
        text: 'Board the Lunar Whale and use its great crystal to travel to the Moon.',
        achievementIds: ['promised-ship-of-light'],
      },
    ],
  },
  {
    id: 'ch20-moon-lair-of-father',
    title: 'The Moon & Lair of the Father (First Visit)',
    summary: 'The party explores the Moon\'s surface and braves the Lair of the Father for Genji equipment.',
    steps: [
      {
        id: 'ch20-moon-lair-of-father-s01',
        text: 'Explore the Moon\'s surface and find the Hummingway Abode, a shop and rest stop. The Level Lust Augment is on the ground in the northeast of the building, and another of the Eidolon\'s missing friends is in the northwestern part of the village.',
        augmentIds: ['level-lust'],
      },
      {
        id: 'ch20-moon-lair-of-father-s02',
        text: 'There\'s a Namingway sighting hidden near the Hummingway Abode\'s tunnels for your twelfth encounter.',
        subAchievementIds: [{ achievementId: 'rabbit-chaser', subItemId: 'sighting-12' }],
      },
      {
        id: 'ch20-moon-lair-of-father-s03',
        text: 'Head back to the Feymarch and return this first Eidolon friend to the one who sent you looking.',
        subAugmentIds: [{ augmentId: 'piercing-magic', subItemId: 'hummingway-village' }],
      },
      {
        id: 'ch20-moon-lair-of-father-s04',
        text: 'Return to Kokkol\'s Forge in the Underworld - if you delivered a Rat Tail for Adamantite earlier from the Feymarch, he has finished forging the Excalibur.',
        achievementIds: ['form-reborn'],
      },
      {
        id: 'ch20-moon-lair-of-father-s05',
        text: 'Head back to the Moon and enter the Lair of the Father for a first pass, covering floors B1 and B2 only and avoiding the Behemoth guarding the path deeper in for now.',
      },
      {
        id: 'ch20-moon-lair-of-father-s06',
        text: 'Collect the Genji Gloves, Shield, Armor, and Helmet scattered through the dungeon\'s first two floors.',
      },
      {
        id: 'ch20-moon-lair-of-father-s07',
        text: 'Continue west to the Lunar Path and reach the Crystal Palace, where Fusoya, a Lunarian, explains Golbez\'s true story and joins the party.',
      },
    ],
  },
  {
    id: 'ch21-giant-of-babil',
    title: 'Giant of Babil',
    summary: 'Zemus\'s colossal weapon threatens to destroy everything before the party can stop it. One-time visit: it can\'t be revisited once you leave it, so fully explore it now.',
    steps: [
      {
        id: 'ch21-giant-of-babil-s01',
        text: 'Return to the airship - Golbez has already awakened the Giant of Babil, but a fleet of tanks and airships buys the party time.',
      },
      {
        id: 'ch21-giant-of-babil-s02',
        text: 'Board the Giant of Babil and fight through its interior.',
      },
      {
        id: 'ch21-giant-of-babil-s03',
        text: 'Rematch all four Elemental Archfiends together - Scarmiglione, Cagnazzo, Barbariccia, and Rubicante.',
        achievementIds: ['defeated-elemental-archfiends'],
      },
      {
        id: 'ch21-giant-of-babil-s04',
        text: 'Last chance to give Fusoya augments before the CPU fight. He leaves behind Bless by default, Omnicasting if given 1 augment, or Phoenix if given 2.',
      },
      {
        id: 'ch21-giant-of-babil-s05',
        text: 'Defeat the Giant\'s core, the CPU, along with its Attack and Support Nodes.',
        achievementIds: ['defeated-cpu'],
      },
      {
        id: 'ch21-giant-of-babil-s06',
        text: 'Fusoya breaks Zemus\'s control over Golbez, revealing that Cecil and Golbez are brothers. Golbez leaves with Fusoya to confront Zemus directly.',
      },
      {
        id: 'ch21-giant-of-babil-s07',
        text: 'Escape the collapsing Giant with Kain\'s help as it explodes behind you.',
        warning: 'POINT OF NO RETURN: the Giant explodes right after this.',
      },
    ],
  },
  {
    id: 'ch22-lair-of-the-father-second-visit',
    title: 'Lair of the Father (Second Visit)',
    summary: 'With Bahamut\'s blessing at stake, the party returns to the Lair of the Father and wraps up the hunt for the Eidolon\'s missing friends.',
    steps: [
      {
        id: 'ch22-lair-of-the-father-second-visit-s01',
        text: 'With free travel restored, pick up the HP+50% Augment on the roof of Baron Castle.',
        augmentIds: ['hp-plus-50'],
      },
      {
        id: 'ch22-lair-of-the-father-second-visit-s02',
        text: 'The Bless Augment is where you first met Fusoya on the Moon (Omnicasting and Phoenix are also possible here).',
        augmentIds: ['bless', 'omnicasting', 'phoenix'],
      },
      {
        id: 'ch22-lair-of-the-father-second-visit-s03',
        text: 'Return to the Lair of the Father - B1 is already cleared. On B2, take the narrow side path you skipped before and push past the Behemoth guarding it.',
      },
      {
        id: 'ch22-lair-of-the-father-second-visit-s04',
        text: 'In the area leading up to Bahamut, to the southeast, talk to the second of the Eidolon\'s missing friends.',
        subAugmentIds: [{ augmentId: 'piercing-magic', subItemId: 'lair-of-the-father' }],
      },
      {
        id: 'ch22-lair-of-the-father-second-visit-s05',
        text: 'Defeat Bahamut to earn his summon - typically the last regular summon most players pick up.',
        subAchievementIds: [{ achievementId: 'master-summoner', subItemId: 'bahamut' }],
      },
      {
        id: 'ch22-lair-of-the-father-second-visit-s06',
        text: 'Head to Kaipo, behind the armor shop, for the third of the Eidolon\'s missing friends.',
        subAugmentIds: [{ augmentId: 'piercing-magic', subItemId: 'kaipo' }],
      },
      {
        id: 'ch22-lair-of-the-father-second-visit-s07',
        text: 'Head to Sylvan Cave in the Underworld, upper floor of Yang\'s hut, for the fourth of the Eidolon\'s missing friends.',
        subAugmentIds: [{ augmentId: 'piercing-magic', subItemId: 'sylvan-cave' }],
      },
      {
        id: 'ch22-lair-of-the-father-second-visit-s08',
        text: 'At Kokkol\'s Forge, check by the well outside for the fifth of the Eidolon\'s missing friends.',
        subAugmentIds: [{ augmentId: 'piercing-magic', subItemId: 'kokkols-forge' }],
      },
      {
        id: 'ch22-lair-of-the-father-second-visit-s09',
        text: 'In Dwarven Castle\'s Lali-ho Pub, the table east of the counter holds the sixth of the Eidolon\'s missing friends.',
        subAugmentIds: [{ augmentId: 'piercing-magic', subItemId: 'dwarven-castle' }],
      },
      {
        id: 'ch22-lair-of-the-father-second-visit-s10',
        text: 'At the Mount Ordeals summit, near the save point, find the seventh of the Eidolon\'s missing friends.',
        subAugmentIds: [{ augmentId: 'piercing-magic', subItemId: 'mount-ordeals' }],
      },
      {
        id: 'ch22-lair-of-the-father-second-visit-s11',
        text: 'In the northern Black Chocobo Forest, find the eighth and final of the Eidolon\'s missing friends.',
        subAugmentIds: [{ augmentId: 'piercing-magic', subItemId: 'black-chocobo-forest' }],
      },
      {
        id: 'ch22-lair-of-the-father-second-visit-s12',
        text: 'With all eight friends found, return to the Feymarch and talk to the Eidolon in the house west of the inn for the Piercing Magic Augment.',
        augmentIds: ['piercing-magic'],
      },
      {
        id: 'ch22-lair-of-the-father-second-visit-s13',
        text: 'Namingway\'s final sighting can appear in several places - a hidden room in the Lair of the Father, any Chocobo Forest, northern Troia, Sylph Cave B2, the Underground Lake near Damcyan, or the Mount Hobs summit. Finding him completes the quest and rewards the Safe Travel Augment.',
        subAchievementIds: [{ achievementId: 'rabbit-chaser', subItemId: 'sighting-13' }],
        augmentIds: ['safe-travel'],
      },
    ],
  },
  {
    id: 'ch23-lunar-subterrane',
    title: 'Lunar Subterrane',
    summary: 'The party enters the final dungeon, hunting down the game\'s finest equipment before the last descent.',
    steps: [
      {
        id: 'ch23-lunar-subterrane-s01',
        text: 'Enter the Lunar Subterrane, the final dungeon, from the Crystal Palace.',
      },
      {
        id: 'ch23-lunar-subterrane-s02',
        text: 'On B3, just left of the entrance, you must fight the White Dragon guarding the Murasame.',
      },
      {
        id: 'ch23-lunar-subterrane-s03',
        text: 'On B5, defeat the two Blue Dragons guarding the Crystal Shield, then find the Red Dragon guarding the Crystal Armlet.',
      },
      {
        id: 'ch23-lunar-subterrane-s04',
        text: 'On B6, take the invisible bridge south of the entrance to find the Dark Bahamut guarding the Ragnarok.',
      },
      {
        id: 'ch23-lunar-subterrane-s05',
        text: 'On B7, clear three back-to-back boss rooms: the Plague Horror (Holy Lance), the Lunasaur (Ribbon), and continue to B8 for Ogopogo (Masamune).',
      },
      {
        id: 'ch23-lunar-subterrane-s06',
        text: 'Collecting Ragnarok, the Holy Lance, the Ribbon, and the Masamune together with the earlier Murasame completes the full set.',
        achievementIds: ['unsealed'],
      },
      {
        id: 'ch23-lunar-subterrane-s07',
        text: 'For the Onion equipment, trade dragon and fiend tails dropped throughout this dungeon and others to the Adamant Grotto near Mythril for a full set of Onion gear.',
        subAchievementIds: [{ achievementId: 'the-onion-swordsman', subItemId: 'red-tail' }, { achievementId: 'the-onion-swordsman', subItemId: 'green-tail' }, { achievementId: 'the-onion-swordsman', subItemId: 'blue-tail' }, { achievementId: 'the-onion-swordsman', subItemId: 'yellow-tail' }, { achievementId: 'the-onion-swordsman', subItemId: 'black-tail' }],
      },
      {
        id: 'ch23-lunar-subterrane-s08',
        text: 'For the Adamant Armor, use a Siren on B5\'s southeastern cave to fight the Princess Flans until one drops a Pink Tail, then trade it at the Adamant Grotto.',
        achievementIds: ['to-the-end-of-misery'],
      },
      {
        id: 'ch23-lunar-subterrane-s09',
        text: 'Complete 100% of every dungeon map in the game, including the now-inaccessible Tower of Zot, both visits to the Tower of Babil, and the Giant of Babil, to round out the last of the map completion. This automatically grants the Treasure Hunter Augment.',
        achievementIds: ['the-perpetual-wayfarer'],
        augmentIds: ['treasure-hunter'],
      },
      {
        id: 'ch23-lunar-subterrane-s10',
        text: 'Reach the Lunar Core on B12 and prepare for the final battle - this is a good point to grind Rydia toward level 80 for Meteor if she isn\'t there yet.',
      },
    ],
  },
  {
    id: 'ch24-final-battle',
    title: 'The Final Battle',
    summary: 'Cecil\'s party confronts Zemus, and the being of pure hatred he becomes.',
    steps: [
      {
        id: 'ch24-final-battle-s01',
        text: 'Watch Golbez and Fusoya battle Zemus and finish him with a combined Meteor.',
      },
      {
        id: 'ch24-final-battle-s02',
        text: 'Zemus\'s spirit survives and transforms into Zeromus. Golbez and Fusoya are struck down, but the party\'s prayers revive Cecil and friends to finish the fight.',
      },
      {
        id: 'ch24-final-battle-s03',
        text: 'Steal Dark Matter from Zeromus during the battle if you intend to fight Proto-Babil in New Game+ - it cannot be obtained any other way.',
      },
      {
        id: 'ch24-final-battle-s04',
        text: 'Defeat Zeromus to complete the game.',
        achievementIds: ['to-mother-earth'],
      },
    ],
  },
  {
    id: 'ch25-new-game-plus',
    title: 'New Game+ & Postgame',
    summary: 'A handful of achievements only open up once the credits roll and you carry your save into a new playthrough.',
    steps: [
      {
        id: 'ch25-new-game-plus-s01',
        text: 'Starting a New Game+ carries over your Bestiary, Augments, Apples, Soma Drops, the Adamant Armor, Onion equipment, Tails, Dark Matter, and any rare summons you found. You also start out already holding the Limit Break Augment.',
        augmentIds: ['limit-break'],
      },
      {
        id: 'ch25-new-game-plus-s02',
        text: 'If you avoided giving Edward augments on your first playthrough, this is the time to give him some - it lets you pick up Salve or Hide this time around instead of Bardsong.',
        augmentIds: ['salve', 'hide'],
      },
      {
        id: 'ch25-new-game-plus-s03',
        text: 'If you stole Dark Matter from Zeromus, use it on the lone face-shaped rock formation in the northern part of the Moon to fight Proto-Babil.',
        achievementIds: ['defeated-proto-babil'],
      },
      {
        id: 'ch25-new-game-plus-s04',
        text: 'Geryon can be fought in New Game+ either where you defeated the four Archfiends in the Giant of Babil, or at the Mount Ordeals summit after clearing the Giant of Babil.',
        achievementIds: ['defeated-geryon'],
      },
      {
        id: 'ch25-new-game-plus-s05',
        text: 'Finishing the game a second time on any difficulty earns its own achievement.',
        achievementIds: ['earths-savior-times-two'],
      },
      {
        id: 'ch25-new-game-plus-s06',
        text: 'Clearing the game on Hard difficulty - recommended for a first playthrough by many players, since Normal is comparatively easy - earns its own achievement independently.',
        achievementIds: ['bitter-battle'],
      },
      {
        id: 'ch25-new-game-plus-s07',
        text: 'Once every other achievement is checked off, Final Fantasy IV Master unlocks on its own.',
        achievementIds: ['final-fantasy-iv-master'],
      },
    ],
  },
]
