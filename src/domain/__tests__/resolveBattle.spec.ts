import type { FighterModel } from "@/models";
import { resolveBattle } from "../resolveBattle";

const player = {
  name: "Pikachu",
  attack: { name: "Thunder Shock", power: 40 },
} as FighterModel;

const opponent = {
  name: "Bulbasaur",
  attack: { name: "Tackle", power: 30 },
} as FighterModel;

describe("resolveBattle", () => {
  it("should return the player as winner", () => {
    const result = resolveBattle({ player, opponent });

    expect(result).toEqual({
      type: "winner",
      message:
        "Pikachu lands a decisive blow with Thunder Shock knocking out Bulbasaur!",
    });
  });

  it("should return the opponent as winner", () => {
    const strongerOpponent = {
      ...opponent,
      attack: { name: "Tackle", power: 50 },
    };

    const result = resolveBattle({ player, opponent: strongerOpponent });

    expect(result).toEqual({
      type: "winner",
      message:
        "Bulbasaur lands a decisive blow with Tackle knocking out Pikachu!",
    });
  });

  it("should return a draw", () => {
    const equalOpponent = {
      ...opponent,
      attack: { name: "Tackle", power: 40 },
    };

    const result = resolveBattle({ player, opponent: equalOpponent });

    expect(result).toEqual({
      type: "draw",
      message: "Draw between Pikachu and Bulbasaur",
    });
  });
});
