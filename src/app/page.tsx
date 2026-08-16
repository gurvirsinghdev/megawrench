import { requireAuth } from "@/lib/auth/guards";

export default async function Page() {
  const session = await requireAuth();

  return (
    <div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
