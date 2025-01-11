import Link from "next/link";
import { Building, Contact, Info, LucideGitGraph } from "lucide-react";

export default function Navbar() {
  // Simulate checking for MetaMask sign-in status (you can replace this with actual MetaMask logic)

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center relative z-10">
    <Link href="/" className="flex items-center justify-center">
      <Building className="h-6 w-6 mr-2" />
      <span className="font-bold">Web3 Realty</span>
    </Link>
    <nav className="ml-auto flex gap-4 sm:gap-6">
      <Link className="text-sm flex flfrom-gray-900 to-gray-800ex gap-2 items-center font-medium hover:underline underline-offset-4" href="/collections">
        <LucideGitGraph />
        Collections
      </Link>
      <Link className="text-sm flex gap-2 items-center  font-medium hover:underline underline-offset-4" href="/about">
        <Info />
        About
      </Link>
      <Link className="text-sm flex gap-2 items-center  font-medium hover:underline underline-offset-4" href="/contact">
      <Contact />
        Contact
      </Link>
    </nav>
  </header>
  );
}
