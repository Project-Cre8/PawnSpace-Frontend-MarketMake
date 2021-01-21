import React, { useEffect } from "react";
import ContractObjects from './contractObjects.js';
import './App.css';

/*
Layer 1 (App.js): This component is going to check whether the browser has Metamask installed (via window.ethereum). If it is, we will set a state bool (“hasMeta”) to true, set the network ID, then pass this along via prop to the rest of the app. If Metmask is not detected, we set “hasMeta” to false and the app should load a screen asking the user to install Metamask.
*/

/*
Function - enableMetamask(): this function calls ethereum.enable which prompts the user to unlock their Metamask and reveal their public address to the app.The address will be saved to state(called “maskAddress”) at this step.This function will be passed down via prop to be called from a button in the visual elements(along with the “maskAddress” state variable).

This component will also initialize Ethereum standard events(to listen for network change, address change, etc.) if Metamask is detected.Network ID and maskAddress state variable will be updated if this is called(and cause Layers 2 - 4 to reset).This part could potentially be moved into its own layer(between layer 1 and 2)  if there are any future disruptions as a result.
*/

function App() {
  const [loaded, setLoaded] = React.useState(false);
  const [network, setNetwork] = React.useState("");
  const [maskAddress, setMaskAddress] = React.useState("");
  const [hasMeta, setHasMeta] = React.useState(false);
  const [unlocked, setUnlocked] = React.useState(false);

  // check if metamask exists. is called whenever maskAddress changes
  useEffect(() => {
    setLoaded(false);

    if (window.ethereum) {
      console.log(window.ethereum.networkVersion);
      setNetwork(window.ethereum.networkVersion);
      setLoaded(true);
      setHasMeta(true);
    } else {
      setHasMeta(false);
      setLoaded(true);
    }
  }, [maskAddress]);

  // Ethereum standard event listeners (console.logs for testing purposes for now)
  useEffect(() => {  

    const handleAccountChange = (accounts) => {
      console.log(accounts[0]);
      setMaskAddress(accounts[0]);
    }

    const handleChainChange = (chainId) => {
      console.log(chainId.toString());
      setNetwork(window.ethereum.networkVersion);
    }

    const handleConnect = (info) => {
      console.log(info);
    }

    const handleDisconnect = (error) => {
      console.log(error);
    }

    // Subscribe to accounts change
    window.ethereum.on("accountsChanged", handleAccountChange);
    
    // Subscribe to chainId change
    window.ethereum.on("chainChanged", handleChainChange);
    
    // Subscribe to provider connection
    window.ethereum.on("connect", handleConnect);
    
    // Subscribe to provider disconnection
    window.ethereum.on("disconnect", handleDisconnect);

    // clean up events
    return () => {
      window.removeEventListener("accountsChanged", handleAccountChange);
      window.removeEventListener("chainChanged", handleChainChange);
      window.removeEventListener("connect", handleConnect);
      window.removeEventListener("disconnect", handleDisconnect);
    }
  }, []);

  const enableMetamask = () => {
    window.ethereum.enable().then((acc) => {
      setMaskAddress(acc[0]);
      setUnlocked(true);
    });
  };

  if (loaded) {
    return (
      <ContractObjects 
        hasMeta={hasMeta}
        maskAddress={maskAddress}
        network={network} 
        unlocked={unlocked} 
        enable={enableMetamask}
      />
    );
  } else {
    return (
      <div>
        LOADING PLACEHOLDER
      </div>
    )
  }
}

export default App;
