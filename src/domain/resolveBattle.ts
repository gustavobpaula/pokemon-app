import type { FighterModel } from "@/models";

export type ResolveBattleParams = {
  player: FighterModel;
  opponent: FighterModel;
};

export type BattleResult = {
  type: "winner" | "draw";
  message: string;
};

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
