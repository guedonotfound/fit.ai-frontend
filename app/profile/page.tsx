import { redirect } from "next/navigation";
import { authClient } from "../_lib/auth-client";
import { headers } from "next/headers";
import { getUserTrainData } from "../_lib/api/fetch-generated";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BicepsFlexed, CalendarDays, Ruler, Weight } from "lucide-react";
import { LogoutButton } from "./_components/logout-button";
import { BottomNav } from "../_components/bottom-nav";
import GoalCard from "./_components/goal-card";
import InfoCard from "./_components/info-card";

export default async function ProfilePage() {
  const session = await authClient.getSession({
    fetchOptions: { headers: await headers() },
  });
  if (!session.data?.user) redirect("/auth");

  const trainData = await getUserTrainData();
  if (trainData.status !== 200) {
    throw new Error("Failed to fetch user train data");
  }

  const user = session.data.user;
  const data = trainData.data;

  const weightInKg = data ? data.weightInGrams / 1000 : null;
  const heightInCm = data?.heightInCm ?? null;
  const bodyFatPercentage = data?.bodyFatPercentage ?? null;
  const age = data?.age ?? null;
  const mainGoal = data?.mainGoal ?? null;

  return (
    <div className="flex min-h-svh flex-col bg-background pb-24">
      <div className="flex h-[56px] items-center px-5">
        <p
          className="text-[22px] uppercase leading-[1.15] text-foreground"
          style={{ fontFamily: "var(--font-anton)" }}
        >
          Fit.ai
        </p>
      </div>
      <div className="flex flex-col items-center gap-5 px-5 pt-5 flex-1">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="size-[52px]">
              <AvatarImage src={user.image ?? undefined} alt={user.name} />
              <AvatarFallback className="text-lg">
                {user.name?.charAt(0)?.toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1.5">
              <h1 className="font-heading text-lg font-semibold leading-[1.05] text-foreground">
                {user.name}
              </h1>
              <p className="font-heading text-sm leading-[1.15] text-foreground/70">
                Plano Basico
              </p>
            </div>
          </div>
        </div>

        <GoalCard goal={mainGoal ?? "Nenhum objetivo definido"} />

        <div className="grid w-full grid-cols-2 gap-3">
          <InfoCard icon={Weight} info={weightInKg ?? null} measure={"Kg"} />
          <InfoCard icon={Ruler} info={heightInCm ?? null} measure={"Cm"} />
          <InfoCard
            icon={BicepsFlexed}
            info={bodyFatPercentage ?? null}
            measure={"% Gc"}
          />
          <InfoCard icon={CalendarDays} info={age ?? null} measure={"Anos"} />
        </div>

        <div className="flex-1" />

        <LogoutButton />
      </div>

      <BottomNav activePage="profile" />
    </div>
  );
}
