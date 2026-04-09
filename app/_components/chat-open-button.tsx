"use client";

import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { parseAsBoolean, parseAsString, useQueryStates } from "nuqs";

export function ChatOpenButton() {
  const [, setChatParams] = useQueryStates({
    chat_open: parseAsBoolean.withDefault(false),
    chat_initial_message: parseAsString,
  });

  return (
    <Button
      onClick={() => setChatParams({ chat_open: true })}
      className="p-4 rounded-full"
    >
      <Sparkles className="size-6 text-primary-foreground" />
    </Button>
  );
}
