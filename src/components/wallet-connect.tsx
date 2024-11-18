"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Wallet } from "lucide-react";

declare global {
  interface Window {
    arweaveWallet: {
      connect: (permissions: string[]) => Promise<void>;
      disconnect: () => Promise<void>;
      getActiveAddress: () => Promise<string>;
    };
  }
}

export function WalletConnect() {
  const [isLoading, setIsLoading] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const { toast } = useToast();

  const checkConnection = async () => {
    try {
      const addr = await window.arweaveWallet.getActiveAddress();
      setAddress(addr);
    } catch (error: any) {
      setAddress(null);
      console.log(error);
    }
  };

  useEffect(() => {
    checkConnection();
  }, []);

  const connectWallet = async () => {
    try {
      setIsLoading(true);
      await window.arweaveWallet.connect([
        "ACCESS_ADDRESS",
        "SIGN_TRANSACTION",
      ]);
      const addr = await window.arweaveWallet.getActiveAddress();
      setAddress(addr);
      toast({
        title: "Wallet Connected",
        description: "Successfully connected to ArConnect",
      });
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      toast({
        title: `Connection Failed ${error.message}`,
        description: "Please install ArConnect or try again",
        variant: "destructive",
      });
    }
  };

  const disconnectWallet = async () => {
    try {
      setIsLoading(true);
      await window.arweaveWallet.disconnect();
      setAddress(null);
      toast({
        title: "Wallet Disconnected",
        description: "Successfully disconnected from ArConnect",
      });
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      toast({
        title: "Disconnect Failed",
        description: "Failed to disconnect wallet",
        variant: "destructive",
      });
      console.log(error);
    }
  };

  const truncateAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <div>
      {!address ? (
        <Button onClick={connectWallet} variant="outline">
          <Wallet className="mr-2 h-4 w-4" />
          Connect Wallet
        </Button>
      ) : (
        <Button onClick={disconnectWallet} variant="outline">
          <Wallet className="mr-2 h-4 w-4" />
          {truncateAddress(address)}
        </Button>
      )}
    </div>
  );
}
