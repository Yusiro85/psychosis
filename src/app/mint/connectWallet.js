import { useState } from 'react';
const { ethers } = require("ethers");

const ConnectWalletButton = ({ onConnect }) => {
  const [walletConnected, setWalletConnected] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request Metamask to connect
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Create an Ethereum provider using ethers.js
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        // Update the UI to indicate a connected wallet
        setWalletConnected(true);

        // Pass the provider up to the parent component
        onConnect(provider);
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      console.error('MetaMask not detected. Please install MetaMask.');
    }
  };

  return (
    <button onClick={connectWallet} disabled={walletConnected} className="inline-flex text-gray-700 bg-cyan-300 border-0 py-2 px-6 rounded text-lg focus:outline-none hover:bg-cyan-700">
        Connect Wallet
    </button >
  );
};

export default ConnectWalletButton;