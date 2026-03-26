import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  icon: LucideIcon;
  info: number | null;
  measure: string | null;
}

const InfoCard = ({ icon: Icon, info, measure }: InfoCardProps) => {
  return (
    <>
      <div className="flex flex-col items-center gap-5 rounded-xl bg-primary/8 p-5">
        <div className="flex items-center rounded-full bg-primary/8 p-[9px]">
          <Icon className="size-4 text-primary" />
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <span className="font-heading text-2xl font-semibold leading-[1.15] text-foreground">
            {info ?? "-"}
          </span>
          <span className="font-heading text-xs uppercase leading-[1.4] text-muted-foreground">
            {measure}
          </span>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
