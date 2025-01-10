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
      <button
        onClick={connectWallet}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#f6851b",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : "Connect Meta Musk"}
      </button>
      {account && (
        <p style={{ marginTop: "10px", color: "#333" }}>
          Connected Account: {account}
        </p>
      )}
    </div>
  );
}

export default Metamask;
