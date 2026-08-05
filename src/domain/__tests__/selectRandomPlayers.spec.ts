import { selectRandomPlayers } from "../selectRandomPlayers";

describe("selectRandomPlayers", () => {
  it("should select two different pokemon", () => {
    const pokemonList = [
      { name: "pikachu", url: "/pokemon/25" },
      { name: "bulbasaur", url: "/pokemon/1" },
      { name: "charmander", url: "/pokemon/4" },
    ];

    const result = selectRandomPlayers(pokemonList);

    expect(result).toHaveLength(2);
    expect(result[0]).not.toEqual(result[1]);
    expect(pokemonList).toContain(result[0]);
    expect(pokemonList).toContain(result[1]);
  });

  it("should throw when the list has less than two pokemon", () => {
    const pokemonList = [{ name: "pikachu", url: "/pokemon/25" }];

    expect(() => selectRandomPlayers(pokemonList)).toThrow(
      "Not enough players to select from",
    );
  });
});
