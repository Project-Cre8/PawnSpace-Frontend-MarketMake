



/*
Layer 2 (ContractObjects.js): This component will check if Metamask exists, then instantiate web3 (using the Metamask provider), and then instantiate a contract object for each smart contract with which our app interacts. To instantiate a contract object, we will need the ABI for each smart contract. We will have these in a separate folder. We will pass these objects (along with state from layer 1) down to layer 3.
*/

function contractorObjects(props) {
  return (
    <div>
      <p>In contractorObjects.js</p>
      <br />
      <p>Props: {JSON.parse(props)}</p>
    </div>
  );
}


export default contractorObjects;
