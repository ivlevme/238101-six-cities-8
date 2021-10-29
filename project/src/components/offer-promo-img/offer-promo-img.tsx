import type { OfferPromoImageProps } from './types';

function OfferPromoImage({ src }: OfferPromoImageProps): JSX.Element {
  return(
    <div
      className='property__image-wrapper'
    >
      <img
        alt='Studio'
        className='property__image'
        src={src}
      />
    </div>
  );
}

export default OfferPromoImage;
