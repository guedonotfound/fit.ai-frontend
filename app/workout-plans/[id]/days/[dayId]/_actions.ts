"use server";

import {
  startWorkoutSession,
  updateWorkoutExerciseWeight,
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

export async function updateWorkoutExerciseWeightAction(
  workoutExerciseId: string,
  workoutDayId: string,
  workoutPlanId: string,
  newWeight: number,
) {
  await updateWorkoutExerciseWeight(
    workoutPlanId,
    workoutDayId,
    workoutExerciseId,
    { weightInGrams: newWeight },
  );
  revalidatePath(`/workout-plans/${workoutPlanId}/days/${workoutDayId}`);
}
