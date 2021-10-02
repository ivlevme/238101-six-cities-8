import Header from '../header/header';
import OfferCard from '../offer-card/offer-card';

type MainProps = {
  countRentalOffers: number;
};

type Offer = {
  id: string;
  houseType: string;
  img: string;
  premium: boolean;
  price: number;
  title: string;
};

type Offers = Offer[];

const OfferOneMock: Offer = {
  id: '1',
  houseType: 'Apartment',
  img: 'img/apartment-01.jpg',
  premium: true,
  price: 120,
  title: 'Beautiful & luxurious apartment at great location',
};

const OfferTwoMock: Offer = {
  id: '2',
  houseType: 'Private room',
  img: 'img/room.jpg',
  price: 80,
  title: 'Wood and stone place',
  premium: false,
};

const OfferThreeMock: Offer = {
  id: '3',
  houseType: 'Apartment',
  img: 'img/apartment-02.jpg',
  price: 132,
  title: 'Canal View Prinsengracht',
  premium: false,
};
const OfferFourMock: Offer = {
  id: '4',
  houseType: 'Apartment',
  img: 'img/apartment-03.jpg',
  price: 180,
  title: 'Nice, cozy, warm big bed apartment',
  premium: true,
};

const OfferFiveMock: Offer = {
  id: '5',
  houseType: 'Private room',
  img: 'img/room.jpg',
  price: 80,
  title: 'Wood and stone place',
  premium: false,
};

const offersMock: Offers = [
  OfferOneMock,
  OfferTwoMock,
  OfferThreeMock,
  OfferFourMock,
  OfferFiveMock,
];

function Main({ countRentalOffers }: MainProps): JSX.Element {
  const renderOffers = (offers: Offers) =>
    offers.map(
      ({ id, houseType, img, premium, price, title }): JSX.Element => (
        <OfferCard
          key={id}
          houseType={houseType}
          img={img}
          premium={premium}
          price={price}
          title={title}
        />
      ),
    );
  return (
    <div className='page page--gray page--main'>
      <Header />

      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <div className='tabs'>
          <section className='locations container'>
            <ul className='locations__list tabs__list'>
              <li className='locations__item'>
                <a className='locations__item-link tabs__item' href='/'>
                  <span>Paris</span>
                </a>
              </li>
              <li className='locations__item'>
                <a className='locations__item-link tabs__item' href='/'>
                  <span>Cologne</span>
                </a>
              </li>
              <li className='locations__item'>
                <a className='locations__item-link tabs__item' href='/'>
                  <span>Brussels</span>
                </a>
              </li>
              <li className='locations__item'>
                <a
                  href='/'
                  className='locations__item-link tabs__item tabs__item--active'
                >
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className='locations__item'>
                <a className='locations__item-link tabs__item' href='/'>
                  <span>Hamburg</span>
                </a>
              </li>
              <li className='locations__item'>
                <a className='locations__item-link tabs__item' href='/'>
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className='cities'>
          <div className='cities__places-container container'>
            <section className='cities__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className='places__found'>
                {countRentalOffers} places to stay in Amsterdam
              </b>
              <form className='places__sorting' action='#' method='get'>
                <span className='places__sorting-caption'>Sort by</span>
                <span className='places__sorting-type' tabIndex={0}>
                  Popular
                  <svg className='places__sorting-arrow' width='7' height='4'>
                    <use xlinkHref='#icon-arrow-select'></use>
                  </svg>
                </span>
                <ul className='places__options places__options--custom places__options--opened'>
                  <li
                    className='places__option places__option--active'
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className='places__option' tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className='places__option' tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className='places__option' tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
              <div className='cities__places-list places__list tabs__content'>
                {renderOffers(offersMock)}
              </div>
            </section>
            <div className='cities__right-section'>
              <section className='cities__map map'></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
