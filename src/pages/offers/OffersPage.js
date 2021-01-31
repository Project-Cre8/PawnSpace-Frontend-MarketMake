import React from 'react';
import Offers from './Offers.js';

import testData from './offerTestData.json';

//TODO: Filtering logic goes here. Any filtering done by Sidebar or Offerspage should influence the URL. Then, the URL should influence Offers data. Neither should influence Offers data directly~
//

function OffersPage() {
  console.log(JSON.stringify(testData));

  return (
    <div>
      <Offers data={testData} />
    </div>
  );

}

export default OffersPage;