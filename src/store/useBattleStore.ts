import { create } from "zustand";
import type { FighterModel, PokemonListModel } from "@/models";
import { createRandomBattle } from "@/services/createRandomBattle";
import { resolveBattle } from "@/domain/resolveBattle";
import { getPokemonList } from "@/services";

export type BattleStore = {
  loading: "idle" | "loading" | "success" | "error";
  player: FighterModel | null;
  opponent: FighterModel | null;
  fighters: PokemonListModel | null;
  loadFighters: () => Promise<void>;
  logs: string[];
  setLog: (text: string) => void;
  startBattle: () => void;
};

/**
 * A Zustand store for managing the state of a Pokémon battle.
 * It handles loading the fighters and managing the battle state.
 */
export const useBattleStore = create<BattleStore>((set, get) => ({
  loading: "idle",
  player: null,
  opponent: null,
  logs: [],
  fighters: null,
  loadFighters: async () => {
    set({ loading: "loading" });
    try {
      let fighters = get().fighters;

      if (!fighters) {
        fighters = await getPokemonList();
        set({ fighters });
      }

      const { player, opponent } = await createRandomBattle(fighters);
      set({ player, opponent, loading: "success" });
    } catch (error) {
      set({ loading: "error", player: null, opponent: null });
    }
  },
  setLog: (text) => set((state) => ({ logs: [...state.logs, text] })),
  startBattle: () => {
    const { player, opponent, setLog } = get();

    if (player && opponent) {
      const result = resolveBattle({ player, opponent });
      setLog(result.message);
    }
  },
}));
