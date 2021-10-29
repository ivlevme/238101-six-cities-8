import type {
  ChangeEvent,
  FormEvent
} from 'react';
import { useState } from 'react';

import type { ConnectedProps } from 'react-redux';
import { connect } from 'react-redux';

import type {
  CommentUser,
  Offer,
  OfferId,
  State
} from '../../types';
import type { ThunkAppDispatch } from '../../types/action';

import {
  RADIX,
  Rating
} from '../../consts';
import { addCommentAction } from '../../store/api-actions';

import {
  initalComment,
  MAX_COMMENT_LENGTH
} from './consts';

const mapStateToProps = ({
  offer,
}: State) => ({
  offer,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onAddComment(
    comment: CommentUser,
    id: OfferId,
  ) {
    dispatch(
      addCommentAction(
        comment,
        id,
      ),
    );
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function CommentForm({
  onAddComment,
  offer,
}: PropsFromRedux): JSX.Element {
  const [comment, setComment] = useState(initalComment);

  const isSubmitButtonDisabled =
    comment.rating === initalComment.rating ||
    comment.text.trim() === initalComment.text;

  const handleInputRadioChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setComment((prevComment) => ({
      ...prevComment,
      rating: parseInt(evt.target.value, RADIX),
    }));
  };

  const handleTextareaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment((prevComment) => ({
      ...prevComment,
      text: evt.target.value,
    }));
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onAddComment(comment, (offer as Offer).id);
  };

  return (
    <form
      action='#'
      className='reviews__form form'
      method='post'
      onSubmit={handleFormSubmit}
    >
      <label
        className='reviews__label form__label'
        htmlFor='review'
      >
        Your review
      </label>
      <div className='reviews__rating-form form__rating'>
        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value={Rating.Perfect}
          id='5-stars'
          type='radio'
          onChange={handleInputRadioChange}
          checked={comment.rating === Rating.Perfect}
        />
        <label
          htmlFor='5-stars'
          className='reviews__rating-label form__rating-label'
          title='perfect'
        >
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>

        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value={Rating.Good}
          id='4-stars'
          type='radio'
          onChange={handleInputRadioChange}
          checked={comment.rating === Rating.Good}
        />
        <label
          htmlFor='4-stars'
          className='reviews__rating-label form__rating-label'
          title='good'
        >
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>

        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value={Rating.NotBad}
          id='3-stars'
          type='radio'
          onChange={handleInputRadioChange}
          checked={comment.rating === Rating.NotBad}
        />
        <label
          htmlFor='3-stars'
          className='reviews__rating-label form__rating-label'
          title='not bad'
        >
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>

        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value={Rating.Badly}
          id='2-stars'
          type='radio'
          onChange={handleInputRadioChange}
          checked={comment.rating === Rating.Badly}
        />
        <label
          htmlFor='2-stars'
          className='reviews__rating-label form__rating-label'
          title='badly'
        >
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>

        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value={Rating.Terribly}
          id='1-star'
          type='radio'
          onChange={handleInputRadioChange}
          checked={comment.rating === Rating.Terribly}
        />
        <label
          htmlFor='1-star'
          className='reviews__rating-label form__rating-label'
          title='terribly'
        >
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>
      </div>
      <textarea
        className='reviews__textarea form__textarea'
        id='review'
        maxLength={MAX_COMMENT_LENGTH}
        name='review'
        onChange={handleTextareaChange}
        placeholder='Tell how was your stay, what you like and what can be improved'
        value={comment.text}
      />
      <div className='reviews__button-wrapper'>
        <p className='reviews__help'>
          To submit review please make sure to set{' '}
          <span className='reviews__star'>rating</span> and describe your stay
          with at least{' '}
          <b className='reviews__text-amount'>
            {MAX_COMMENT_LENGTH - comment.text.length} characters
          </b>
          .
        </p>
        <button
          className='reviews__submit form__submit button'
          type='submit'
          disabled={isSubmitButtonDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export { CommentForm };
export default connector(CommentForm);
