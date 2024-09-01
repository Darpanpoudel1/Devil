// components/Navbar.tsx
"use client";
import Link from 'next/link';
import { UserButton, useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import Home from '../Home/page';


const Navbar = () => {
  const { userId } = useAuth();
  const router = useRouter();
  return (
      <nav className="bg-gray-800 p-4 fixed w-full z-10">

        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img className="h-8 w-8" src="/img/logo.svg" alt="Logo" />
            <div className="hidden md:flex space-x-4 ml-10">
              <a href="#" className="text-white hover:text-gray-300 transition duration-300">Home</a>
              <a href="#" className="text-white hover:text-gray-300 transition duration-300">About</a>
              <a href="#" className="text-white hover:text-gray-300 transition duration-300">Services</a>
              <a href="#" className="text-white hover:text-gray-300 transition duration-300">Contact</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/sign-in" className="bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition duration-300">Sign In</Link>
            <Link href={"/sign-up"} className="bg-green-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition duration-300">Sign Up</Link>
          </div>
        </div>
</nav>


  );
};

export default Navbar;
