import React, { useState, useEffect } from "react";
import Web3 from "web3";

function Metamask() {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState(null);

  // Connect Wallet
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "wallet_requestPermissions", params: [{ eth_accounts: {} }] });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        setIsConnected(true);
        console.log("Wallet connected:", accounts[0]);
      } catch (error) {
        console.error("Connection error:", error);
        alert("Failed to connect MetaMask. Please try again.");
      }
    } else {
      alert("MetaMask not detected. Please install MetaMask!");
    }
  };

  // Disconnect Wallet
  const disconnectWallet = () => {
    setAccount(null);
    setIsConnected(false);
    console.log("Wallet disconnected");
  };

  // Check if wallet is already connected
  useEffect(() => {
    const checkWalletConnection = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
          console.log("Wallet detected but not automatically connecting.");
        }
      }
    };
    checkWalletConnection();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      {isConnected ? (
        <div className="translate-y-3">
          <button
            onClick={disconnectWallet}
            className="px-6 py-2 bg-gradient-to-r from-purple-800 to-blue-800 rounded-full
            font-medium text-white transition-all duration-300 hover:shadow-lg
            hover:shadow-blue-500/25"
          >
            Disconnect Wallet
          </button>
          <p className="mt-[5px] bg-gradient-to-r from-purple-800 to-blue-800 bg-clip-text text-transparent">
            Connected: {account.slice(0, 6)}...{account.slice(-4)}
          </p>
        </div>
      ) : (
        <button
          onClick={connectWallet}
          className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full
                font-medium text-white transition-all duration-300 hover:shadow-lg
                hover:shadow-blue-500/25"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}

export default Metamask;