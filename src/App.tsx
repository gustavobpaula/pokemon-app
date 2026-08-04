import { useEffect } from "react";
import "./App.css";
import { useBattleStore } from "./store/useBattleStore";
import { FighterBubble } from "./components/features/fighter-bubble";

function App() {
  const loadFighters = useBattleStore((state) => state.loadFighters);
  const loading = useBattleStore((state) => state.loading);
  const player = useBattleStore((state) => state.player);
  const opponent = useBattleStore((state) => state.opponent);

  useEffect(() => {
    if (loading === "idle") {
      loadFighters();
    }
  }, [loadFighters]);

  useEffect(() => {
    console.log("Player:", player);
    console.log("Opponent:", opponent);
  }, [player, opponent]);

  if (loading === "loading") {
    return <div>Loading fighters...</div>;
  }

  if (loading === "error") {
    return <div>Error loading fighters. Please try again.</div>;
  }

  return (
    <>
      <section id="center">
        {<FighterBubble loadingMode="player" />}
        {<FighterBubble loadingMode="opponent" />}
        {player && <FighterBubble fighter={player} />}
        {opponent && <FighterBubble fighter={opponent} />}
      </section>
    </>
  );
}

export default App;
