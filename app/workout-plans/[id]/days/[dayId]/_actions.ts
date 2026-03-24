"use server";

import {
  startWorkoutSession,
  updateWorkoutSession,
} from "@/app/_lib/api/fetch-generated";
import { revalidatePath } from "next/cache";

export async function startWorkoutAction(
  workoutPlanId: string,
  workoutDayId: string,
) {
  await startWorkoutSession(workoutPlanId, workoutDayId);
  revalidatePath(`/workout-plans/${workoutPlanId}/days/${workoutDayId}`);
}

export async function completeWorkoutAction(
  workoutPlanId: string,
  workoutDayId: string,
  workoutSessionId: string,
) {
  await updateWorkoutSession(workoutPlanId, workoutDayId, workoutSessionId, {
    completedAt: new Date().toISOString(),
  });
  revalidatePath(`/workout-plans/${workoutPlanId}/days/${workoutDayId}`);
}
