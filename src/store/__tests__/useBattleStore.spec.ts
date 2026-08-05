import type { FighterModel } from "@/models";
import { createRandomBattle } from "@/services/createRandomBattle";
import { getPokemonList } from "@/services";
import { useBattleStore } from "../useBattleStore";

jest.mock("@/services/createRandomBattle");
jest.mock("@/services");

const player = {
  name: "Pikachu",
  attack: { name: "Thunder Shock", power: 40 },
} as FighterModel;

const opponent = {
  name: "Bulbasaur",
  attack: { name: "Tackle", power: 30 },
} as FighterModel;

describe("useBattleStore", () => {
  beforeEach(() => {
    useBattleStore.setState({
      loading: "idle",
      player: null,
      opponent: null,
      fighters: null,
      logs: [],
    });
  });

  it("should load the fighters", async () => {
    const pokemonList = [
      { name: "pikachu", url: "/pokemon/25" },
      { name: "bulbasaur", url: "/pokemon/1" },
    ];

    (getPokemonList as jest.Mock).mockResolvedValue(pokemonList);
    (createRandomBattle as jest.Mock).mockResolvedValue({ player, opponent });

    await useBattleStore.getState().loadFighters();

    expect(useBattleStore.getState()).toMatchObject({
      loading: "success",
      fighters: pokemonList,
      player,
      opponent,
    });
  });

  it("should add a message to the log", () => {
    useBattleStore.getState().setLog("Battle started");

    expect(useBattleStore.getState().logs).toEqual(["Battle started"]);
  });

  it("should add the battle result to the log", () => {
    useBattleStore.setState({ player, opponent });

    useBattleStore.getState().startBattle();

    expect(useBattleStore.getState().logs).toEqual([
      "Pikachu lands a decisive blow with Thunder Shock knocking out Bulbasaur!",
    ]);
  });
});
