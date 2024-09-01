import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return <div className="flex items-center justify-center min-h-screen"><SignUp fallbackRedirectUrl={'/sign-in'}/>;</div>
{/* 
<SignUp fallbackRedirectUrl={'/sign-in'}/>;
    </div> */}
  
}