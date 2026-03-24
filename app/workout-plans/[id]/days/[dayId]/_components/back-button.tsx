"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();

  return (
    <Button variant="ghost" size="icon" onClick={() => router.back()}>
      <ChevronLeft className="size-6 text-foreground" />
    </Button>
  );
}
