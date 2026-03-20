import { headers } from "next/headers";
import { authClient } from "./_lib/auth-client";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await authClient.getSession({
    fetchOptions: {
      headers: await headers(),
    },
  });
  if (!session.data?.user) redirect("/auth");

  return (
    <div className="h-screen w-full items-center justify-center flex gap-6">
      <h1>Home</h1>
    </div>
  );
}
