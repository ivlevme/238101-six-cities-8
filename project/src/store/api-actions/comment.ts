import { toast } from 'react-toastify';

import type {
  CommentBackend,
  CommentUser,
  OfferId
} from '../../types';

import type { ThunkActionResult } from '../../types/action';

import { APIRoute } from '../../api/const';
import {
  AddMessageFail,
  LoadingStatus,
  LoadMessageFail
} from '../../consts';
import {
  changeCommentLoadingStatusAction,
  changeCommentsLoadingStatusAction,
  loadCommentsAction
} from '../actions';

import { getConvertedCommentToBackend } from '../../adapter';


/**
 * @function addCommentAction – Redux Thunk Action for add comment for offer
 * @param comment – comment data
 * @param id – offer id
 */
export const addCommentAction =
 (
   comment: CommentUser,
   id: OfferId,
 ): ThunkActionResult =>
   async (dispatch, _getState, api): Promise<void> => {
     try {
       dispatch(changeCommentLoadingStatusAction(LoadingStatus.Loading));

       const { data } = await api.post<CommentBackend[]>(
         `${APIRoute.Comments}/${id}`,
         getConvertedCommentToBackend(comment),
       );

       dispatch(loadCommentsAction(data));
       dispatch(changeCommentLoadingStatusAction(LoadingStatus.Success));
     } catch {
       toast.info(AddMessageFail.Comment);

       dispatch(changeCommentLoadingStatusAction(LoadingStatus.Fail));
     }
   };


/**
 * @function fetchCommentsAction – Redux Thunk Action for fetch comments for offer by id
 * @param id – offer id
 */
export const fetchCommentsAction = (id: OfferId): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      dispatch(changeCommentsLoadingStatusAction(LoadingStatus.Loading));
      const { data } = await api.get<CommentBackend[]>(`${APIRoute.Comments}/${id}`);

      dispatch(loadCommentsAction(data));
      dispatch(changeCommentsLoadingStatusAction(LoadingStatus.Success));
    } catch {
      toast.info(LoadMessageFail.Comments);

      dispatch(changeCommentsLoadingStatusAction(LoadingStatus.Fail));
    }
  };
