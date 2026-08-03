export interface PokemonListItemEntity {
  name: string;
  url: string;
}

export interface PokemonListEntity {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItemEntity[];
}
