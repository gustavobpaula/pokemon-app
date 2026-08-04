import type { PokemonModel } from "../models";

/**
 * Selects a random attack from a Pokémon.
 *
 * @param moves - The list of moves of the Pokémon.
 * @returns
 */
export const selectRandomAttack = (moves: PokemonModel["moves"]): string => {
  if (moves.length === 0) {
    throw new Error("No attacks available for this Pokémon");
  }

  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex].name;
};
