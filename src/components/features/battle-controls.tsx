import { useBattleStore } from "@/store/useBattleStore";
import { Button } from "../ui/button";

export const BattleControls = () => {
  const loadFighters = useBattleStore((state) => state.loadFighters);
  const startBattle = useBattleStore((store) => store.startBattle);
  const loading = useBattleStore((store) => store.loading);

  return (
    <div className="flex w-full justify-end gap-2">
      <Button
        className="cursor-pointer"
        onClick={startBattle}
        disabled={loading === "loading"}
      >
        Start Battle
      </Button>
      <Button
        variant="secondary"
        onClick={loadFighters}
        className="cursor-pointer"
        disabled={loading === "loading"}
      >
        Change Fighters
      </Button>
    </div>
  );
};
