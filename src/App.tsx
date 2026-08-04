import { useEffect } from "react";
import { useBattleStore } from "./store/useBattleStore";
import { BattleArena } from "./components/features/battle-arena";

function App() {
  const loadFighters = useBattleStore((state) => state.loadFighters);
  const loading = useBattleStore((state) => state.loading);

  useEffect(() => {
    if (loading === "idle") {
      loadFighters();
    }
  }, [loadFighters]);

  return (
    <>
      <section id="center" className="flex justify-center p-8">
        <BattleArena />
      </section>
    </>
  );
}

export default App;
