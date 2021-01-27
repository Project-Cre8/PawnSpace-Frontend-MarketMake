import React from 'react';
import './OfferCard.css';
import icon_info from '../../icons/icon-info.svg';
import icon_duration from '../../icons/icon-duration.svg';
import icon_star from '../../icons/icon-star.svg';
import icon_loan_currency from '../../icons/icon-loan-currency.svg';
import land from '../../icons/land.png';

export default () => {
  return (
    <div className='item'>
      <div className='upper'>

        <div className='loan-reward'>
          <div className='t1'>
            <p>+</p>
          </div>
          <img src={icon_loan_currency} alt='Reward currency' />
          <div className='t2'>
            <p>50</p>
          </div>
        </div>

        <div className='upper-img'>
          <img src={land} alt='Offer card image' />
        </div>
      </div>

      <div className='nameplate'>
        <p>Land plot #46 X462 Y155</p>
      </div>

      <div className='lower'>
        <p className='duration-label'>Duration</p>
        <p className='loan-label'>Loan</p>
        <img className='icon-duration' src={icon_duration} alt='Duration icon' />
        <p className='duration'>30 days</p>
        <img className='icon-loan-currency' src={icon_loan_currency} alt='Loan currency icon' />
        <p className='loan'>90 DAI</p>
        <p className='rate'>Rate: 50%</p>

        <img className='icon-info' src={icon_info} alt='Info icon' />
        <img className='icon-star' src={icon_star} alt='Star icon' />
      </div>


      This is an offer card
    </div>
  );
};