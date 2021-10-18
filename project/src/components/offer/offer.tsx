import type { ActiveOffer } from '../../types';
import type { OfferProps } from './types';

import { BookmarksText } from '../../consts';
import {
  CommentForm,
  Comments,
  Header,
  Map,
  OfferCard
} from '../index';
import { getRandomInteger } from '../../helpers';
import { useActiveOffer } from '../../hooks';


function Offer({
  city,
  comments,
  nearbyOffers,
  offer,
}: OfferProps): JSX.Element {
  const initalActiveOffer: ActiveOffer = {
    id: offer.id,
  };

  const [
    activeOffer,
    onMouseEnterOffer,
    onMouseLeaveOffer,
  ] = useActiveOffer(initalActiveOffer);

  const renderImage = (key: number) => (
    <div
      className='property__image-wrapper'
      key={key}
    >
      <img
        alt='Studio'
        className='property__image'
        src={offer.img}
      />
    </div>
  );

  const renderImages = () => (
    <div className='property__gallery-container container'>
      <div className='property__gallery'>
        {
          Array
            .from({ length: 6 })
            .map(() => renderImage(getRandomInteger()))
        }
      </div>
    </div>
  );

  return (
    <div className='page'>
      <Header />
      <main className='page__main page__main--property'>
        <section className='property'>
          {renderImages()}
          <div className='property__container container'>
            <div className='property__wrapper'>
              {offer.premium && (
                <div className='property__mark'>
                  <span>Premium</span>
                </div>
              )}
              <div className='property__name-wrapper'>
                <h1 className='property__name'>{offer.title}</h1>
                <button
                  className={`property__bookmark-button ${
                    offer.bookmark ? 'property__bookmark-button--active' : ''
                  } button`}
                  type='button'
                >
                  <svg
                    className='property__bookmark-icon'
                    width='31'
                    height='33'
                  >
                    <use xlinkHref='#icon-bookmark'></use>
                  </svg>
                  <span className='visually-hidden'>
                    {offer.bookmark
                      ? BookmarksText.Active
                      : BookmarksText.InActive}
                  </span>
                </button>
              </div>
              <div className='property__rating rating'>
                <div className='property__stars rating__stars'>
                  <span style={{ width: '80%' }}></span>
                  <span className='visually-hidden'>Rating</span>
                </div>
                <span className='property__rating-value rating__value'>
                  4.8
                </span>
              </div>
              <ul className='property__features'>
                <li className='property__feature property__feature--entire'>
                  {offer.houseType}
                </li>
                <li className='property__feature property__feature--bedrooms'>
                  3 Bedrooms
                </li>
                <li className='property__feature property__feature--adults'>
                  Max 4 adults
                </li>
              </ul>
              <div className='property__price'>
                <b className='property__price-value'>&euro;{offer.price}</b>
                <span className='property__price-text'>&nbsp;night</span>
              </div>
              <div className='property__inside'>
                <h2 className='property__inside-title'>What&apos;s inside</h2>
                <ul className='property__inside-list'>
                  <li className='property__inside-item'>Wi-Fi</li>
                  <li className='property__inside-item'>Washing machine</li>
                  <li className='property__inside-item'>Towels</li>
                  <li className='property__inside-item'>Heating</li>
                  <li className='property__inside-item'>Coffee machine</li>
                  <li className='property__inside-item'>Baby seat</li>
                  <li className='property__inside-item'>Kitchen</li>
                  <li className='property__inside-item'>Dishwasher</li>
                  <li className='property__inside-item'>Cabel TV</li>
                  <li className='property__inside-item'>Fridge</li>
                </ul>
              </div>
              <div className='property__host'>
                <h2 className='property__host-title'>Meet the host</h2>
                <div className='property__host-user user'>
                  <div className='property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper'>
                    <img
                      className='property__avatar user__avatar'
                      src='img/avatar-angelina.jpg'
                      width='74'
                      height='74'
                      alt='Host avatar'
                    />
                  </div>
                  <span className='property__user-name'>Angelina</span>
                  <span className='property__user-status'>Pro</span>
                </div>
                <div className='property__description'>
                  <p className='property__text'>
                    A quiet cozy and picturesque that hides behind a a river by
                    the unique lightness of Amsterdam. The building is green and
                    from 18th century.
                  </p>
                  <p className='property__text'>
                    An independent House, strategically located between Rembrand
                    Square and National Opera, but where the bustle of the city
                    comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className='property__reviews reviews'>
                <h2 className='reviews__title'>
                  Reviews &middot;{' '}
                  <span className='reviews__amount'>{comments.length}</span>
                </h2>
                <Comments comments={comments} />
                <CommentForm />
              </section>
            </div>
          </div>
          <section className='property__map map'>
            <Map
              activeOffer={activeOffer}
              city={city}
              offers={[...nearbyOffers, offer]}
            />
          </section>
        </section>
        <div className='container'>
          <section className='near-places places'>
            <h2 className='near-places__title'>
              Other places in the neighbourhood
            </h2>
            <div className='near-places__list places__list'>
              {nearbyOffers.map((nearbyOffer) => (
                <OfferCard
                  key={nearbyOffer.id}
                  offer={nearbyOffer}
                  onMouseEnter={onMouseEnterOffer}
                  onMouseLeave={onMouseLeaveOffer}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
