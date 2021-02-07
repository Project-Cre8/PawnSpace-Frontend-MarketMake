import OfferCard from './OfferCard.js';
import NoOffers from './NoOffers.js';

import './Offers.css'

// Offer: { name, image, duration, amount, currency, reward, rewardCurrency, rate, url}

function Offers({ data }) {
  const results = data;

  let offers;
  let noOffers;
  // map variables to each item in fetched image array and return image component
  if (results && results.length > 0) {
    let i=0;
    offers = results.map(offer => {
      //const url = `/offers/${offer.name}`;
      i++;
      const card = <OfferCard
        name={offer.name} image={offer.image}
        duration={offer.duration} amount={offer.amount}
        currency={offer.currency} reward={offer.reward}
        rewardCurrency={offer.rewardCurrency}
        rate={offer.rate} url={offer.url} key={i} />
      return (<li>{card}</li>);
    });
  } else {
    noOffers = <NoOffers />;
  }

  return (
    <div>
      In offers. Here's a test card driven by props<br /><br />

      <div className='offers'>
        <ul>{offers}</ul>
      </div>
      {noOffers}
    </div>
  );
}

export default Offers;