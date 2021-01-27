import OfferCard from './OfferCard.js';
import NoOffers from './NoOffers.js';

function Offers({ data }) {
  const results = data;

  let offers;
  let noOffers;
  // map variables to each item in fetched image array and return image component
  if (results && results.length > 0) {
    offers = results.map(offer => {
      const url = `/offers/${offer.name}`;
      const card = <OfferCard name={offer.name} image={offer.image}
        duration={offer.duration} amount={offer.amount} currency={offer.currency}
        reward={offer.reward} rewardCurrency={offer.rewardCurrency}
        rate={offer.rate} isFavorited={false} url={url} />
      return card;
    });
  } else {
    console.log('no offers')
    noOffers = <NoOffers />; // return 'not found' component if no images fetched
  }

  return (
    <div>


      In offers. Here's a static test card:
      <OfferCard />
      <ul>{offers}</ul>
      {noOffers}
    </div>
  );
}

export default Offers;