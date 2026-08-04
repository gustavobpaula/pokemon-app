import { useBattleStore } from "@/store/useBattleStore";
import { Button } from "../ui/button";

export const BattleControls = () => {
  const loadFighters = useBattleStore((state) => state.loadFighters);

  return (
    <div className="flex w-full justify-end gap-2">
      <Button className="cursor-pointer">Start Battle</Button>
      <Button
        variant="secondary"
        onClick={loadFighters}
        className="cursor-pointer"
      >
        Reload Fighters
      </Button>
    </div>
  );
};
