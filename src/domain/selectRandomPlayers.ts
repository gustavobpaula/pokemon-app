import type { PokemonListModel } from "../models";

/**
 * Selects two random players from a list of Pokémon.
 * @param pokemonList
 * @returns
 */
export const selectRandomPlayers = (
  pokemonList: PokemonListModel,
): PokemonListModel => {
  if (pokemonList.length < 2) {
    throw new Error("Not enough players to select from");
  }

  const listCopy = [...pokemonList];
  const randomIndex1 = Math.floor(Math.random() * listCopy.length);
  const player = listCopy.splice(randomIndex1, 1)[0];
  const randomIndex2 = Math.floor(Math.random() * listCopy.length);
  const opponent = listCopy.splice(randomIndex2, 1)[0];

  return [player, opponent];
};
