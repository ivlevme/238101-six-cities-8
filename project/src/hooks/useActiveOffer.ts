import { useCallback, useState } from 'react';

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

  const handleOfferMouseEnter = useCallback((id: number) => {
    setActiveOffer({ id });
  }, []);

  const handleOfferMouseLeave = useCallback(() => {
    setActiveOffer(defaultActiveOffer);
  }, [defaultActiveOffer]);

  return [activeOffer, handleOfferMouseEnter, handleOfferMouseLeave];
}

export { useActiveOffer };
