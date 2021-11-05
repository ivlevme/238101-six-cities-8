import type { ConnectedProps } from 'react-redux';
import { connect } from 'react-redux';
import { useState } from 'react';

import type { State } from '../../types';

import { SortingItem } from '../index';
import { Sorting } from '../../consts';

const mapStateToProps = ({
  OFFERS,
}: State) => ({
  sorting: OFFERS.sorting,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function SortingOptions({
  sorting,
}: ConnectedComponentProps): JSX.Element {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleFormClick = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <form
      action='#'
      className='places__sorting'
      method='get'
      onClick={handleFormClick}
    >
      <span className='places__sorting-caption'>Sort by </span>
      <span
        className='places__sorting-type'
        tabIndex={0}
      >
        { sorting }
        <svg
          className='places__sorting-arrow'
          height='4'
          width='7'
        >
          <use xlinkHref='#icon-arrow-select'></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${
          openDropdown ? 'places__options--opened' : ''
        }`}
      >
        <SortingItem name={Sorting.Popular} />
        <SortingItem name={Sorting.PriceLow} />
        <SortingItem name={Sorting.PriceHigh} />
        <SortingItem name={Sorting.TopRated} />
      </ul>
    </form>
  );
}

export { SortingOptions };
export default connector(SortingOptions);
