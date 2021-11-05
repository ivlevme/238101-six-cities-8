import type { Dispatch } from 'redux';
import type { ConnectedProps } from 'react-redux';
import { connect} from 'react-redux';

import type { SortingItemProps } from './types';

import type {
  Actions,
  State
} from '../../types';

import { Sorting } from '../../consts';
import { changeSortingAction } from '../../store/action';

const mapStateToProps = ({
  OFFERS,
}: State) => ({
  sorting: OFFERS.sorting,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeSorting(sorting: Sorting) {
    dispatch(changeSortingAction(sorting));
  },
});

const connector = connect(
  mapStateToProps,
  mapDispatchToProps,
);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & SortingItemProps;

function SortingItem({
  sorting,
  name,
  onChangeSorting,
}: ConnectedComponentProps): JSX.Element {
  return (
    <li
      className={`places__option ${
        sorting === name ? 'places__option--active' : ''
      }`}
      tabIndex={0}
      onClick={() => onChangeSorting(name)}
    >
      {name}
    </li>
  );
}

export { SortingItem };
export default connector(SortingItem);
