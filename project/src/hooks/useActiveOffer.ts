import { useState } from 'react';

import type {
  ActiveOffer,
  HandleOfferMouseEnter,
  HandleOfferMouseLeave
} from '../types';

function useActiveOffer(
  defaultActiveOffer: ActiveOffer,
): [
  ActiveOffer,
  HandleOfferMouseEnter,
  HandleOfferMouseLeave
] {
  const [activeOffer, setActiveOffer] = useState(defaultActiveOffer);

  const handleOfferMouseEnter = (id: number) => {
    setActiveOffer({ id });
  };

  const handleOfferMouseLeave = () => {
    setActiveOffer(defaultActiveOffer);
  };

  return [activeOffer, handleOfferMouseEnter, handleOfferMouseLeave];
}

export { useActiveOffer };
