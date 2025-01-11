"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ethers } from "ethers";
import { X, Diamond } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { Button } from "@/components/ui";
import { Checkbox } from "@/components/ui";
import { Label } from "@/components/ui";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface WalletConnectModalProps {
  onClose: () => void;
}

export function WalletConnectModal({ onClose }: WalletConnectModalProps) {
  const router = useRouter();

  const wallets = [
    { name: "MetaMask", icon: "🦊" },
    { name: "Coinbase Wallet", icon: "💰" },
    { name: "WalletConnect", icon: "🔗" },
  ];

  const handleConnect = (walletName: string) => {
    if (walletName === "MetaMask") {
      console.log("Redirecting to MetaMask wallet connect...");
      router.push("../wallet-connect"); // Navigate to wallet-connect.tsx
    } else {
      console.log(`Connecting to ${walletName}...`);
      // Add logic for other wallets if needed
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Connect Wallet</DialogTitle>
        </DialogHeader>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        <div className="flex flex-col gap-4 py-4">
          {wallets.map((wallet) => (
            <Button
              key={wallet.name}
              variant="outline"
              className="flex items-center justify-start gap-2 text-left text-lg"
              onClick={() => handleConnect(wallet.name)}
            >
              <span className="text-2xl">{wallet.icon}</span>
              {wallet.name}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function WalletConnect() {
  const router = useRouter();
  const [isIndian, setIsIndian] = useState(false);
  const [residesInIndia, setResidesInIndia] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const connectWallet = async () => {
    if (!isIndian || !residesInIndia) {
      setError("You must be Indian and reside in India to continue");
      return;
    }

    try {
      if (!window.ethereum) {
        throw new Error("Please install MetaMask or another Web3 wallet");
      }

      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setWalletAddress(address);
      setShowModal(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to connect wallet");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <Diamond className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold ml-2">Smith</span>
          </div>
          <CardTitle className="text-2xl text-center">
            Connect Your Wallet
          </CardTitle>
          <CardDescription className="text-center">
            Please verify your eligibility and connect your wallet to continue
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="indian"
                checked={isIndian}
                onCheckedChange={(checked) => setIsIndian(checked as boolean)}
              />
              <Label htmlFor="indian">I am Indian</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="residence"
                checked={residesInIndia}
                onCheckedChange={(checked) =>
                  setResidesInIndia(checked as boolean)
                }
              />
              <Label htmlFor="residence">I reside in India</Label>
            </div>
          </div>

          {error && (
            <div className="text-sm text-red-500 text-center">{error}</div>
          )}

          <Button
            className="w-full"
            onClick={connectWallet}
            disabled={!isIndian || !residesInIndia}
          >
            Connect Wallet
          </Button>

          {walletAddress && (
            <div className="text-sm text-center text-muted-foreground">
              Connected: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
            </div>
          )}
        </CardContent>
      </Card>

      {showModal && <WalletConnectModal onClose={() => setShowModal(false)} />}
    </div>
  );
}