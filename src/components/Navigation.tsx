import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Button } from "@/components/Button";

const BASE_CHAIN_ID = 8453;

declare global {
  interface Window {
    ethereum?: any;
  }
}

const Navigation = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  useEffect(() => {
    checkConnection();
  }, []);

  // ✅ Check if already connected
  const checkConnection = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_accounts", []);
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
        }
      } catch (error) {
        console.error("Error checking connection:", error);
      }
    }
  };

  // ✅ Connect Wallet Function
  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask is required to connect.");
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const network = await provider.getNetwork();

      // ✅ Fix: Convert BigInt to Number for comparison
      if (Number(network.chainId) !== BASE_CHAIN_ID) {
        alert("Please switch to Base network.");
        return;
      }

      const accounts = await provider.send("eth_requestAccounts", []);
      setWalletAddress(accounts[0]);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  return (
    <nav className="fixed w-full z-50 glass">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl sm:text-2xl font-bold gradient-text">MyEVM</div>

          {/* ✅ Connect Wallet Button */}
          <Button
            onClick={connectWallet}
            className="bg-black text-black hover:bg-red text-sm sm:text-base px-4 sm:px-6"
          >
            {walletAddress
              ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
              : "Connect Wallet"}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
