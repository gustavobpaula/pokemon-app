import { selectRandomAttack } from "../selectRandomAttack";

describe("selectRandomAttack", () => {
  it("should select an attack", () => {
    const moves = [{ name: "tackle" }, { name: "thunder-shock" }];

    const result = selectRandomAttack(moves);

    expect(moves.map((move) => move.name)).toContain(result);
  });

  it("should throw when there are no attacks", () => {
    expect(() => selectRandomAttack([])).toThrow(
      "No attacks available for this Pokémon",
    );
  });
});
