import { Separator } from "../ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useBattleStore } from "@/store/useBattleStore";

export const BattleLog = () => {
  const logs = useBattleStore((state) => state.logs);

  return (
    <section className="flex w-full justify-center">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle>Battle log</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="flex flex-col gap-8">
          <ul className="max-h-40 overflow-auto">
            {logs.reverse().map((log, index) => (
              <li key={index}>{`> ${log}`}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};
