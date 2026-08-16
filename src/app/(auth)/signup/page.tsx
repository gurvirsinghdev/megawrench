import { SignupForm } from "@/components/custom/auth/signup-form";
import { requireUnauth } from "@/lib/auth/guards";

export default async function SignupPage() {
  await requireUnauth();

  return (
    <div>
      <SignupForm />
    </div>
  );
}
