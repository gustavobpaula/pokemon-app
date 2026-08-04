import type { MoveEntity } from "../entities";
import { mapAttack } from "../mappers";
import type { AttackModel } from "../models";
import { BASE_URL } from "./core/config";
import { request } from "./core/request";

type GetAttackProps = {
  name: string;
};

/**
 * Retrieves an attack by name.
 * @param params - The parameters for the request.
 * @returns A promise resolving to the requested attack model.
 */
export const getAttack = async (
  params: GetAttackProps,
): Promise<AttackModel> => {
  const response = await request<MoveEntity>({
    method: "GET",
    url: `${BASE_URL}/move/${params.name}`,
  });

  return mapAttack(response);
};
