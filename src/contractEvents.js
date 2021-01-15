


/*
Layer 4 (contractEvents.js): This component will house our smart contract event listeners. The events we will be listening to are TBD. We will need to listen for events from pawnSpace contracts, as well as other NFT contracts. When an event is received that results in a change in the users data (i.e. an NFT enters/leaves their inventory), the event fallback function is going to modify the data object that was created in Layer 3. This is so that we can avoid having to re-run the time-consuming process of loading NFT data from the blockchain. If user data has not yet been loaded, incoming events should not do anything.
*/

function contractEvents(props) {
  return (
    <div>
      <p>In contractEvents.js</p>
      <br />
      <p>Props: {JSON.parse(props)}</p>
    </div>
  );
}


export default contractEvents;
