import icon_info from '../../icons/icon-info.svg';
import icon_duration from '../../icons/icon-duration.svg';
import currency_DAI from '../../icons/currency-DAI.svg';
import currency_other from '../../icons/currency-other.svg';
import land from '../../icons/land.png';

const icons = {
  //currencies
  'DAI': currency_DAI,

  //other images until linked to a DB
  'land': land,

  //standard icons
  'icon_duration': icon_duration,
  'icon_info': icon_info,
};

const getIcon = (currency) => {
  return icons[currency] || currency_other;
};

export default getIcon;