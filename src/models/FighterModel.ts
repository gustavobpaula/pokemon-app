import type { AttackModel } from "./AttackModel";
import type { PokemonModel } from "./PokemonModel";

export type FighterModel = PokemonModel & {
  attack: AttackModel;
};
