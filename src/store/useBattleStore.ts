import { create } from "zustand";
import type { FighterModel } from "../models";
import { createRandomBattle } from "../services/createRandomBattle";

export type BattleStore = {
  loading: "idle" | "loading" | "success" | "error";
  player: FighterModel | null;
  opponent: FighterModel | null;
  loadFighters: () => Promise<void>;
};

/**
 * A Zustand store for managing the state of a Pokémon battle.
 * It handles loading the fighters and managing the battle state.
 */
export const useBattleStore = create<BattleStore>((set) => ({
  loading: "idle",
  player: null,
  opponent: null,
  loadFighters: async () => {
    set({ loading: "loading" });
    try {
      const { player, opponent } = await createRandomBattle();
      set({ player, opponent, loading: "success" });
    } catch (error) {
      set({ loading: "error", player: null, opponent: null });
    }
  },
}));
