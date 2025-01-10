import React, { useState } from "react";
import { ethers } from "ethers";
// import Web3 from "web3";


function Metamask() {
    const [isConnected, setIsConnected] = useState(false);
    const [account, setAccount] = useState(null);
  
    const connectWallet = async () => {
      if (window.ethereum) {
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const web3 = new Web3(window.ethereum);
          const accounts = await web3.eth.getAccounts();
          setAccount(accounts[0]);
          setIsConnected(true);
        } catch (error) {
          console.error(error);
        }
      } else {
        console.error("MetaMask not detected");
      }
    };
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
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
};

export default Metamask;
