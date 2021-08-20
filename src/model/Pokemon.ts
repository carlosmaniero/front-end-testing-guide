export interface Pokemon {
  id: number,
  name: {
    english: string,
    japanese: string,
    chinese: string,
    french: string,
  },
  count: number,
  sprite: 'https://veekun.com/dex/media/pokemon/main-sprites/omegaruby-alphasapphire/1.png',
}
