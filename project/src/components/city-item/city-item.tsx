import type { ConnectedProps } from 'react-redux';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Link } from 'react-router-dom';


import type { CityItemProps } from './types';
import type {
  Actions,
  City,
  State
} from '../../types';
import {
  changeCityAction,
  fillOffersAction
} from '../../store/action';

const mapStateToProps = ({ activeCity }: State) => ({ activeCity });
const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeCity(city: City) {
    dispatch(changeCityAction(city));
    dispatch(fillOffersAction(city));
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
}: ConnectedComponentProps): JSX.Element {
  const handleLinkCityClick = () => {
    onChangeCity(city);
  };

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
