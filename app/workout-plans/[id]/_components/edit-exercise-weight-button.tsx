"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState, useTransition } from "react";
import { updateWorkoutExerciseWeightAction } from "../days/[dayId]/_actions";

interface EditExerciseWeightButtonProps {
  id: string;
  workoutPlanId: string;
  workoutDayId: string;
  weightInGrams: number;
}

const EditExerciseWeightButton = ({
  id,
  workoutDayId,
  workoutPlanId,
  weightInGrams,
}: EditExerciseWeightButtonProps) => {
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const handleFormAction = async (formData: FormData) => {
    const newWeight = Number(formData.get("weight"));
    startTransition(async () => {
      await updateWorkoutExerciseWeightAction(
        id,
        workoutDayId,
        workoutPlanId,
        newWeight,
      );
      setIsOpen(false);
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="text-muted-foreground font-semibold px-2 py-0 h-6"
        >
          {weightInGrams / 1000} kg
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar peso</DialogTitle>
          <DialogDescription>
            Insira o novo peso do exercíxio EM QUILOS.
          </DialogDescription>
        </DialogHeader>
        <form action={handleFormAction}>
          <div className="space-y-4">
            <Input
              id={id}
              type="number"
              inputMode="numeric"
              name="weight"
              defaultValue={weightInGrams / 1000}
              onPaste={(e) => e.preventDefault()}
              min={0}
              onKeyDown={(e) => {
                const allowedKeys = [
                  "Backspace",
                  "Tab",
                  "Enter",
                  "Delete",
                  "ArrowLeft",
                  "ArrowRight",
                ];
                if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
                  e.preventDefault();
                }
              }}
            />
            <DialogFooter className="grid gap-1 grid-cols-2">
              <DialogClose asChild>
                <Button type="button" variant="outline" className="w-full">
                  Cancelar
                </Button>
              </DialogClose>
              <Button type="submit" className="w-full" disabled={isPending}>
                Salvar
              </Button>
            </DialogFooter>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditExerciseWeightButton;
