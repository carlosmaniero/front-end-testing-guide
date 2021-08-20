export interface Pokemon {
  id: number,
  name: {
    english: string,
    japanese: string,
    chinese: string,
    french: string,
  },
  count: number,
  sprite: string,
}
