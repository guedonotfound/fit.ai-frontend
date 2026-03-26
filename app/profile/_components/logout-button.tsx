"use client";

import { authClient } from "@/app/_lib/auth-client";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      console.error(error.message);
      return;
    }

    router.push("/auth");
  };

  return (
    <Button
      variant="outline"
      onClick={handleLogout}
      className="gap-2 text-destructive hover:text-destructive w-full rounded-full"
    >
      <span className="font-heading text-base font-semibold">
        Sair da conta
      </span>
      <LogOut className="size-4" />
    </Button>
  );
}
