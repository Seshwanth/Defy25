"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "./ui";
import Image from "next/image"; // Import next/image for images

export default function Navbar() {
  const router = useRouter();
  const [isSignedIn, setIsSignedIn] = useState(false); // Track if user is signed in

  const refreshPage = () => {
    router.refresh();
  };

  // Simulate checking for MetaMask sign-in status (you can replace this with actual MetaMask logic)
  useEffect(() => {
    // Replace with actual MetaMask login logic
    const checkSignInStatus = async () => {
      // Example: setIsSignedIn(true) if MetaMask is signed in
      setIsSignedIn(true); // Simulate user sign-in for now
    };
    checkSignInStatus();
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-transparent text-black shadow-lg">
      <div className=" flex h-16 max-w-7xl flex items-center justify-between px-10 sm:px-8 lg:px-14">
        {/* Branding */}
        <div className="flex space-x-2">
          <button
            onClick={refreshPage}
            className="text-xl font-semibold hover:opacity-80 flex flex-end gap-2"
          >
            <div className="h-5 w-5 rotate-45 border border-white" />
            <span>Smith</span>
          </button>
        </div>

        {/* Navbar Links */}
        <div className="flex items-center gap-8">
          <Link href="/about" className="text-sm font-medium hover:opacity-80">
            ABOUT
          </Link>
          <Link href="/collections" className="text-sm font-medium hover:opacity-80">
            Collections
          </Link>

          {/* Conditionally render MetaMask Icon or SignIn Button */}
          {isSignedIn ? (
            <div className="flex items-center gap-2">
              <Image 
                src="/metamask-icon.svg" // Replace with your MetaMask icon path
                alt="MetaMask" 
                width={24} 
                height={24} 
              />
              <span>MetaMask</span>
            </div>
          ) : (
            <Button
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-500 font-semibold"
            >
              Sign in with MetaMask
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}
