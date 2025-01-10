"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const refreshPage = () => {
    router.refresh();
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <button
            onClick={refreshPage}
            className="text-xl font-semibold hover:opacity-80"
          >
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rotate-45 border border-black" />
              Smith
            </div>
          </button>
        </div>
        <div className="flex items-center gap-8">
          <Link href="/about" className="text-sm font-medium hover:opacity-80">
            ABOUT
          </Link>
          <Link
            href="/collections"
            className="text-sm font-medium hover:opacity-80"
          >
            Collections
          </Link>
          <Link href="/signin" className="text-sm font-medium hover:opacity-80">
            Signin
          </Link>
        </div>
      </div>
    </nav>
  );
}
