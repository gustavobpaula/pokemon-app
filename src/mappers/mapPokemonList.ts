import type { PokemonListEntity } from "@/entities";
import type { PokemonListModel } from "@/models";

/**
 * Maps a Pokémon list entity to a Pokémon list model.
 * @param pokemonList - The Pokémon list entity.
 * @returns The mapped Pokémon list model.
 */
export function mapPokemonList(
  pokemonList: PokemonListEntity,
): PokemonListModel {
  return pokemonList.results.map((pokemon) => ({
    name: pokemon.name || "",
    url: pokemon.url || "",
  }));
}
