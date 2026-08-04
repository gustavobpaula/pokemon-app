import type { PokemonEntity } from "@/entities";
import { mapPokemon } from "@/mappers";
import type { PokemonModel } from "@/models";
import { BASE_URL } from "./core/config";
import { request } from "./core/request";

type GetPokemonProps = {
  name: string;
};

/**
 * Retrieves a Pokémon by name.
 * @param params - The parameters for the request.
 * @returns A promise resolving to the requested Pokémon model.
 */
export const getPokemon = async (
  params: GetPokemonProps,
): Promise<PokemonModel> => {
  const response = await request<PokemonEntity>({
    method: "GET",
    url: `${BASE_URL}/pokemon/${params.name}`,
  });

  return mapPokemon(response);
};
