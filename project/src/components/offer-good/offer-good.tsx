import { memo } from 'react';

import { OfferGoodProps } from './types';

function OfferGood({ good }: OfferGoodProps): JSX.Element {
  return <li className='property__inside-item'>{good}</li>;
}

export default memo(OfferGood);
