import type { FighterModel } from "@/models";
import { Bubble, BubbleContent } from "../ui/bubble";
import { Badge } from "../ui/badge";
import { Skeleton } from "../ui/skeleton";

type FighterBubbleProps =
  | {
      fighter: FighterModel;
      loadingMode?: undefined;
    }
  | {
      fighter?: FighterModel;
      loadingMode: "player" | "opponent";
    };

export const FighterBubble = ({ fighter, loadingMode }: FighterBubbleProps) => {
  if (loadingMode) {
    const isPlayer = loadingMode === "player";
    const imageSizeClass = isPlayer ? "w-40 h-40" : "w-20 h-20";

    return (
      <div className="flex items-center gap-4 w-full justify-between">
        {isPlayer && (
          <figure>
            <Skeleton className={`${imageSizeClass} rounded-full`} />
          </figure>
        )}
        <Skeleton className="h-10 w-full" />
        {!isPlayer && (
          <figure>
            <Skeleton className={`${imageSizeClass} rounded-full`} />
          </figure>
        )}
      </div>
    );
  }

  if (!fighter) {
    return null;
  }

  const isPlayer = fighter.type === "player";

  const renderBubble = () => (
    <Bubble variant={isPlayer ? "default" : "tinted"} className="flex-1">
      <BubbleContent className="flex gap-24 justify-between items-center w-full">
        <h2 className="text-lg font-bold">{fighter.name}</h2>
        <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
          {fighter.attack.name} : {fighter.attack.power}
        </Badge>
      </BubbleContent>
    </Bubble>
  );

  const renderImage = () => (
    <figure>
      <img
        src={fighter.image ?? ""}
        alt={fighter.name}
        className={isPlayer ? "w-40 h-auto" : "max-w-30 h-auto"}
      />
    </figure>
  );

  return (
    <div className="flex items-center gap-4 w-full justify-between">
      {isPlayer ? (
        <>
          {renderImage()}
          {renderBubble()}
        </>
      ) : (
        <>
          {renderBubble()}
          {renderImage()}
        </>
      )}
    </div>
  );
};
