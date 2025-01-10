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
        <>
          <button
            onClick={disconnectWallet}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#dc3545", // Red for disconnect
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Disconnect Wallet
          </button>
          <p style={{ marginTop: "10px", color: "#333" }}>
            Connected: {account.slice(0, 6)}...{account.slice(-4)}
          </p>
        </>
      ) : (
        <button
          onClick={connectWallet}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#2cff05", // Orange for connect
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}

export default Metamask;
