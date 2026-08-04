import { selectRandomAttack, selectRandomPlayers } from "../domain";
import { mapFighter } from "../mappers/mapFighter";
import type { FighterModel, PokemonListModel } from "../models";
import { getAttack } from "./getAttack";
import { getPokemon } from "./getPokemon";

type CreateFighterProps = {
  name: string;
  type: FighterModel["type"];
};

/**
 * Creates a FighterModel for a given Pokémon name.
 * @param name
 * @returns
 */
export const createFighter = async ({
  name,
  type,
}: CreateFighterProps): Promise<FighterModel> => {
  const pokemon = await getPokemon({ name });

  const selectedAttack = selectRandomAttack(pokemon.moves);

  const attack = await getAttack({ name: selectedAttack });

  return mapFighter({ pokemon, attack, type });
};

/**
 * Creates a random battle between two fighters.
 * @returns A promise resolving to the battle participants.
 */
export const createRandomBattle = async (
  pokemonList: PokemonListModel,
): Promise<{
  player: FighterModel;
  opponent: FighterModel;
}> => {
  const [randomPlayer, randomOpponent] = selectRandomPlayers(pokemonList);

  const [player, opponent] = await Promise.all([
    createFighter({
      name: randomPlayer.name,
      type: "player",
    }),
    createFighter({
      name: randomOpponent.name,
      type: "opponent",
    }),
  ]);

  return { player, opponent };
};
