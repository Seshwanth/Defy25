import Link from "next/link";
import { Building } from "lucide-react";

export default function Navbar() {
  // Simulate checking for MetaMask sign-in status (you can replace this with actual MetaMask logic)

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center relative z-10">
    <Link href="#" className="flex items-center justify-center">
      <Building className="h-6 w-6 mr-2" />
      <span className="font-bold">Web3 Realty</span>
    </Link>
    <nav className="ml-auto flex gap-4 sm:gap-6">
      <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
        Features
      </Link>
      <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
        About
      </Link>
      <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
        Contact
      </Link>
    </nav>
  </header>
  );
}
