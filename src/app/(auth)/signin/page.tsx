import { SigninForm } from "@/components/custom/auth/signin-form";
import { requireUnauth } from "@/lib/auth/guards";

export default async function SigninPage() {
  await requireUnauth();

  return (
    <div>
      <SigninForm />
    </div>
  );
}
