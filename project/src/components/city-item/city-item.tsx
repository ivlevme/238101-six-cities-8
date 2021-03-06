import { useCallback } from 'react';
import { Link } from 'react-router-dom';

import type { ConnectedProps } from 'react-redux';
import { connect } from 'react-redux';

import { Dispatch } from 'redux';

import type { CityItemProps } from './types';
import type {
  Actions,
  City,
  State
} from '../../types';
import {
  changeCityAction,
  changeSortingAction,
  fillOffersAction
} from '../../store/action';
import { Sorting } from '../../consts';

const mapStateToProps = ({
  OFFERS,
}: State) => ({
  activeCity: OFFERS.activeCity,
  sorting: OFFERS.sorting,
});
const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeCity(
    city: City,
    sorting: Sorting,
  ) {
    dispatch(changeCityAction(city));
    dispatch(fillOffersAction(city.name));
    dispatch(changeSortingAction(sorting));
  },
});

const connector = connect(
  mapStateToProps,
  mapDispatchToProps,
);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & CityItemProps;

function CityItem({
  activeCity,
  city,
  onChangeCity,
  sorting,
}: ConnectedComponentProps): JSX.Element {
  const handleLinkCityClick = useCallback(() => {
    if(activeCity.name !== city.name) {
      onChangeCity(
        city,
        sorting,
      );
    }
  }, [
    activeCity.name,
    city,
    onChangeCity,
    sorting,
  ]);

  return (
    <li className='locations__item'>
      <Link
        className={`locations__item-link tabs__item ${
          activeCity.name === city.name ? 'tabs__item--active' : ''
        }`}
        onClick={handleLinkCityClick}
        to='/'
      >
        <span>{city.name}</span>
      </Link>
    </li>
  );
}

export { CityItem };
export default connector(CityItem);
