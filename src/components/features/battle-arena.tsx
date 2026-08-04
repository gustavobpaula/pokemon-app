import { useBattleStore } from "@/store/useBattleStore";
import { Card, CardContent, CardFooter } from "../ui/card";
import { FighterBubble } from "./fighter-bubble";
import { BattleControls } from "./battle-controls";

export const BattleArena = () => {
  const loading = useBattleStore((state) => state.loading);
  const player = useBattleStore((state) => state.player);
  const opponent = useBattleStore((state) => state.opponent);
  return (
    <Card className="w-full max-w-3xl">
      <CardContent className="flex flex-col gap-8">
        {loading === "loading" && (
          <>
            <FighterBubble loadingMode="opponent" />
            <FighterBubble loadingMode="player" />
          </>
        )}
        {loading === "success" && opponent && player && (
          <>
            <FighterBubble fighter={opponent} />
            <FighterBubble fighter={player} />
          </>
        )}
      </CardContent>
      <CardFooter>
        <BattleControls />
      </CardFooter>
    </Card>
  );
};
