import type { Actions } from '../../types/action';
import type { UserProcess } from '../../types/state';

import { ActionType } from '../action-type';
import { AuthorizationStatus, LoadingStatus } from '../../consts';


const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  email: '',
  loadingStatus: LoadingStatus.Init,
};

/**
 * @function userProcess – Redux reducer for user
 */
const userProcess = (state = initialState, action: Actions): UserProcess => {
  switch (action.type) {

    case ActionType.ChangeUserLoadingStatus: {
      return {
        ...state,
        loadingStatus: action.payload,
      };
    }

    case ActionType.ChangeUserInfo: {
      return {
        ...state,
        email: action.payload,
      };
    }

    case ActionType.RequireAuthorization: {
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    }

    case ActionType.RequireLogout: {
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NoAuth,
      };
    }

    default: {
      return state;
    }

  }
};

export { userProcess };
