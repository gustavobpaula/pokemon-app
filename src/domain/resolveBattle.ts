import type { FighterModel } from "@/models";

export type ResolveBattleParams = {
  player: FighterModel;
  opponent: FighterModel;
};

export type BattleResult = {
  type: "winner" | "draw";
  message: string;
};

/**
 * Resolves a battle by comparing the attack power of both fighters.
 *
 * @param params - The fighters participating in the battle.
 * @param params.player - The fighter controlled by the player.
 * @param params.opponent - The opposing fighter.
 * @returns The battle result, indicating either a winner or a draw, along with
 * a descriptive message.
 */
export const resolveBattle = ({
  player,
  opponent,
}: ResolveBattleParams): BattleResult => {
  if (player.attack.power === opponent.attack.power) {
    return {
      type: "draw",
      message: `Draw between ${player.name} and ${opponent.name}`,
    };
  }

  const winner =
    player.attack.power > opponent.attack.power ? player : opponent;
  const loser = winner === player ? opponent : player;

  return {
    type: "winner",
    message: `${winner.name} lands a decisive blow with ${winner.attack.name} knocking out ${loser.name}!`,
  };
};
