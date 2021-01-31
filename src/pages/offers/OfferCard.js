import React from 'react';
import './OfferCard.css';

import getIcon from './IconHandler.js';
import { Link } from 'react-router-dom';


// Offer: { name, image, duration, amount, currency, reward, rewardCurrency, rate, url}

export default ({ name, image, duration, amount, currency, reward, rewardCurrency, rate, url }) => {
  return (
    <div className='item'>
      <div className='upper'>

        <div className='loan-reward'>
          <div className='t1'>
            <p>+</p>
          </div>
          <img src={getIcon(rewardCurrency)} alt='Reward currency' />
          <div className='t2'>
            <p>{reward}</p>
          </div>
        </div>

        <div className='upper-img'>
          <Link to={url}>
            <img src={getIcon(image)} alt='Offer card image' />
          </Link>
        </div>
      </div>

      <div className='nameplate'>
        <p>{name}</p>
      </div>

      <div className='lower'>
        <p className='duration-label'>Duration</p>
        <p className='loan-label'>Loan</p>
        <img className='icon-duration' src={getIcon('icon_duration')} alt='Duration icon' />
        <p className='duration'>{duration} days</p>
        <img className='icon-loan-currency' src={getIcon(currency)} alt='Loan currency icon' />
        <p className='loan'>{amount + ' ' + currency}</p>
        <p className='rate'>Rate: {rate}%</p>
        <Link to={url}>
          <img className='icon-info' src={getIcon('icon_info')} alt='Info icon' />
        </Link>
      </div>
    </div>
  );
};