import { Button } from "@/components/ui/button";
import { CircleHelp, Zap } from "lucide-react";
import EditExerciseWeightButton from "./edit-exercise-weight-button";

interface ExerciseCardProps {
  exercise: {
    id: string;
    name: string;
    sets: number;
    reps: number;
    weightInGrams: number;
    restTimeInSeconds: number;
    workoutDayId: string;
  };
  workoutPlanId: string;
}

const ExerciseCard = ({ exercise, workoutPlanId }: ExerciseCardProps) => {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="font-heading text-base font-semibold text-foreground">
            {exercise.name} -
          </span>
          <EditExerciseWeightButton
            id={exercise.id}
            workoutDayId={exercise.workoutDayId}
            weightInGrams={exercise.weightInGrams}
            workoutPlanId={workoutPlanId}
          />
        </div>
        <div className="flex items-center">
          <Button variant="ghost" size="icon">
            <CircleHelp className="size-5 text-muted-foreground" />
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="rounded-full bg-muted px-2.5 py-1 font-heading text-xs font-semibold uppercase text-muted-foreground">
          {exercise.sets} sets
        </span>
        <span className="rounded-full bg-muted px-2.5 py-1 font-heading text-xs font-semibold uppercase text-muted-foreground">
          {exercise.reps} reps
        </span>
        <span className="flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 font-heading text-xs font-semibold uppercase text-muted-foreground">
          <Zap className="size-3.5" />
          {exercise.restTimeInSeconds}s
        </span>
      </div>
    </div>
  );
};

export default ExerciseCard;
