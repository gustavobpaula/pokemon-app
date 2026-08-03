import type { PokemonListEntity } from "../entities";
import { mapPokemonList } from "../mappers/mapPokemonList";
import type { PokemonListModel } from "../models";
import { BASE_URL } from "./core/config";
import { request } from "./core/request";

/**
 * Fetches a list of Pokémon from the API.
 * @returns A promise resolving to the list of Pokémon.
 */
export const getPokemonList = async (): Promise<PokemonListModel> => {
  const response = await request<PokemonListEntity>({
    method: "GET",
    url: `${BASE_URL}/pokemon`,
    query: {
      limit: 2000,
    },
  });

  return mapPokemonList(response);
};
