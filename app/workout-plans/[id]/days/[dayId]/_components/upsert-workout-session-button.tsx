"use client";

import { useTransition } from "react";
import { completeWorkoutAction, startWorkoutAction } from "../_actions";
import { Button } from "@/components/ui/button";

interface UpsertWorkoutSessionButtonProps {
  workoutPlanId: string;
  workoutDayId: string;
  workoutSessionId?: string;
}

export function UpsertWorkoutSessionButton({
  workoutPlanId,
  workoutDayId,
  workoutSessionId,
}: UpsertWorkoutSessionButtonProps) {
  const [isPending, startTransition] = useTransition();

  const handleAction = () => {
    if (!workoutSessionId) {
      startTransition(async () => {
        await startWorkoutAction(workoutPlanId, workoutDayId);
      });
    } else {
      startTransition(async () => {
        await completeWorkoutAction(
          workoutPlanId,
          workoutDayId,
          workoutSessionId,
        );
      });
    }
  };

  return (
    <Button
      variant={!workoutSessionId ? "default" : "outline"}
      onClick={handleAction}
      disabled={isPending}
      className="w-full rounded-full py-3 font-heading text-sm font-semibold"
    >
      {!workoutSessionId ? "Começar treino" : "Finalizar treino"}
    </Button>
  );
}
