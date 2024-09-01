
// import { SignIn } from "@clerk/nextjs";

// export default function Page() {
//   return <SignIn path="/sign-in" />;
// }
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <SignIn path="/sign-in" fallbackRedirectUrl={'/InteractiveForm'}/>
    </div>
  );
}

