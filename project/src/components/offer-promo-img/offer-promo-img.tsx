import type { OfferPromoImgProps } from './types';

function OfferPromoImg({ src }: OfferPromoImgProps): JSX.Element {
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

export default OfferPromoImg;
