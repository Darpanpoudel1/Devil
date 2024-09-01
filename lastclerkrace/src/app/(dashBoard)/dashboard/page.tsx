// pages/dashboard.tsx
"use client";
import CustomUserButton from "@/app/(components)/Userbutton/Userbutton";
import { UserButton, useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';


const Dashboard = () => {
  const { userId } = useAuth();
  const router = useRouter();

  if(!userId){
    router.push('/sign-in');
    return (<>
      Not authorized
    </>)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="flex items-center justify-between p-4 bg-white shadow">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <CustomUserButton />
      </header>
      <main className="flex-grow p-4">
        <h2 className="text-lg font-semibold mb-4">Welcome to your Dashboard</h2>
        {/* Add your dashboard content here */}
      </main>
    </div>
  );
};

export default Dashboard;
