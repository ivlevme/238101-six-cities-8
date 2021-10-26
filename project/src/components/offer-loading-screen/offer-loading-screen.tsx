import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { getRandomInteger } from '../../helpers';

function OfferLoadingScreen(): JSX.Element {
  return (
    <>
      {Array.from({ length: 6 }).map((_, idx) => (
        <Skeleton
          key={getRandomInteger()}
          style={{
            width: 260,
            height: 296,
            marginLeft: 8,
            marginBottom: 24,
          }}
        />
      ))}
    </>
  );
}

export default OfferLoadingScreen;
