import { Goal } from "lucide-react";
import Image from "next/image";

interface GoalCardProps {
  goal: string;
}

const GoalCard = ({ goal }: GoalCardProps) => {
  return (
    <div className="relative flex h-[140px] w-full flex-col items-start justify-between overflow-hidden rounded-xl p-5">
      <Image
        src="https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1000&auto=format&fit=crop"
        alt={goal}
        fill
        className="pointer-events-none object-cover saturate-0"
      />
      <div className="absolute inset-0 bg-foreground/40" />
      <div className="relative">
        <div className="flex items-center gap-1 rounded-full bg-background/16 px-2.5 py-1.5 backdrop-blur-sm">
          <Goal className="size-3.5 text-background" />
          <span className="font-heading text-xs font-semibold uppercase text-background">
            Objetivo
          </span>
        </div>
      </div>
      <div className="relative flex flex-col gap-2">
        <h3 className="font-heading text-2xl font-semibold leading-[1.05] text-background">
          {goal}
        </h3>
      </div>
    </div>
  );
};

export default GoalCard;
