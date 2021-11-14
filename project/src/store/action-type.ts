/**
 * @type {ActionType} - Enum Action for redux
 * */
export enum ActionType {
  ChangeCity = 'city/change',
  ChangeCommentLoadingStatus = 'comment/loadingStatus',
  ChangeCommentsLoadingStatus = 'comments/loadingStatus',
  ChangeFavoriteLoadingStatus = 'favorite/loadingStatus',
  ChangeFavoritePageLoadingStatus = 'offer/loadingPageStatus',
  ChangeOfferFavoriteStatus = 'offer/changeFavoriteStatus',
  ChangeOfferLoadingStatus = 'offer/loadingStatus',
  ChangeNearbyLoadingStatus = 'nearby/loadingStatus',
  ChangeUserLoadingStatus = 'user/loadingStatus',
  ChangeSorting = 'offers/sorting',
  ChangeUserInfo = 'user/info',
  ClearOfferAction = 'offer/clearData',
  ClearOffersFavoriteStatus = 'offer/clearOffersFavoriteStatus',
  FillOffers = 'offers/fill',
  LoadComments = 'data/comments',
  LoadFavorites = 'data/favorites',
  LoadNearbyOffers = 'data/nearbyOffers',
  LoadOffer = 'data/offer',
  LoadOffers = 'data/loadOffers',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  RedirectToRoute = 'user/redirectToRoute'
}
