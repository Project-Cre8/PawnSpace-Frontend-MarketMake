import logo from './logo.svg';
import './App.css';

/*
Layer 1 (App.js): This component is going to check whether the browser has Metamask installed (via window.ethereum). If it is, we will set a state bool (“hasMeta”) to true, set the network ID, then pass this along via prop to the rest of the app. If Metmask is not detected, we set “hasMeta” to false and the app should load a screen asking the user to install Metamask.
*/

/*
Function - enableMetamask(): this function calls ethereum.enable which prompts the user to unlock their Metamask and reveal their public address to the app.The address will be saved to state(called “maskAddress”) at this step.This function will be passed down via prop to be called from a button in the visual elements(along with the “maskAddress” state variable).

This component will also initialize Ethereum standard events(to listen for network change, address change, etc.) if Metamask is detected.Network ID and maskAddress state variable will be updated if this is called(and cause Layers 2 - 4 to reset).This part could potentially be moved into its own layer(between layer 1 and 2)  if there are any future disruptions as a result.
*/
function enableMetamask() {
  return
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
