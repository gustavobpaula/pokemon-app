import type { AttackModel } from "./AttackModel";
import type { PokemonModel } from "./PokemonModel";

export type FighterModel = Omit<PokemonModel, "sprite"> & {
  attack: AttackModel;
  type: "player" | "opponent";
  image: string | null;
};
