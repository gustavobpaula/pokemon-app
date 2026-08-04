import { useEffect } from "react";
import { useBattleStore } from "./store/useBattleStore";
import { BattleLog, BattleArena } from "./components/features";

function App() {
  const loadFighters = useBattleStore((state) => state.loadFighters);
  const loading = useBattleStore((state) => state.loading);

  useEffect(() => {
    if (loading === "idle") {
      loadFighters();
    }
  }, [loadFighters]);

  return (
    <main className="flex p-8 flex-col gap-4 items-center">
      <BattleArena />
      <BattleLog />
    </main>
  );
}

export default App;
