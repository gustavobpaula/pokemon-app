import type { MoveEntity } from "@/entities";
import type { AttackModel } from "@/models";

/**
 * Maps a MoveEntity to an AttackModel.
 * @param move - The MoveEntity to be mapped.
 * @returns The corresponding AttackModel.
 */
export function mapAttack(move: MoveEntity): AttackModel {
  return {
    name: move.name || "",
    power: move.power || 0,
  };
}
