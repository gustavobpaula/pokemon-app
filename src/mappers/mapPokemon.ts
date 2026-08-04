import type { PokemonEntity } from "@/entities";
import type { PokemonModel } from "@/models";

/**
 * Maps a Pokémon entity to a Pokémon model.
 * @param pokemon - The Pokémon entity.
 * @returns The mapped Pokémon model.
 */
export function mapPokemon(pokemon: PokemonEntity): PokemonModel {
  return {
    name: pokemon.name || "",
    sprite: {
      front: pokemon.sprites?.front_default || null,
      back: pokemon.sprites?.back_default || null,
    },
    moves:
      pokemon.moves?.map((move) => ({
        name: move.move.name || "",
      })) || [],
  };
}
