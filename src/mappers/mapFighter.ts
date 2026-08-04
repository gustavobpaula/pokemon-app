import { kebabToTitleCase } from "@/utils";
import type { AttackModel, FighterModel, PokemonModel } from "@/models";

type MapFighterProps = {
  pokemon: PokemonModel;
  attack: AttackModel;
  type: FighterModel["type"];
};

/**
 * Maps a MoveEntity to an AttackModel.
 * @param move - The MoveEntity to be mapped.
 * @returns The corresponding AttackModel.
 */
export function mapFighter({
  pokemon,
  attack,
  type,
}: MapFighterProps): FighterModel {
  return {
    name: kebabToTitleCase(pokemon.name) || "",
    image:
      type === "player"
        ? pokemon.sprite.back || null
        : pokemon.sprite.front || null,
    type,
    attack: {
      name: kebabToTitleCase(attack.name) || "",
      power: attack.power || 0,
    },
    moves: pokemon.moves || [],
  };
}
