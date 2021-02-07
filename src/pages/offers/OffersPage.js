import React, {useEffect} from 'react';
import Offers from './Offers.js';

import testData from './offerTestData.json';

//TODO: Filtering logic goes here. Any filtering done by Sidebar or Offerspage should influence the URL. Then, the URL should influence Offers data. Neither should influence Offers data directly~
//

function OffersPage({orders}) {
  const [offerLists, setOfferLists] = React.useState([]);
  // console.log(JSON.stringify(testData));

  // currently using first token category for DEMO
  useEffect((orders) => {
    let items = orders[0].orders;
    let itemList = []
    for (let i = 0; i < items.length; i++) {
      let timePeriod = items[i].period / 60 / 60 / 24;
      let entry = {
        name: orders[0].nftName,
        image: testData[i].image,
        duration: timePeriod,
        amount: items[i].requestAmount,
        currency: "USDC",
        reward: items[i].interest,
        rewardCurrency: "USDC",
        rate: testData[i].rate, 
        url: testData[i].url
      }
      itemList.push(entry);
    }
    setOfferLists(itemList);
  }, [])

  return (
    <div>
      <Offers data={offerLists} />
    </div>
  );

}

export default OffersPage;