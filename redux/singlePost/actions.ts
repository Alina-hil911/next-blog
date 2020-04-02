import axios from "axios";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { AnyAction } from "redux";

import {
  SinglePost,
  FETCH_SINGLE_POST_START,
  FETCH_SINGLE_POST_SUCCESS,
  FETCH_SINGLE_POST_ERROR,
  fetchSinglePostSuccessType,
  fetchSinglePostStartType,
  fetchSinglePostErrorType,
} from "./types";

export const fetchSinglePostSuccess = (
  post: SinglePost,
): fetchSinglePostSuccessType => ({
  type: FETCH_SINGLE_POST_SUCCESS,
  payload: post,
});

export const fetchSinglePostStart = (id: number): fetchSinglePostStartType => ({
  type: FETCH_SINGLE_POST_START,
  payload: id,
});

export const fetchSinglePostError = (
  errorMsg: string,
): fetchSinglePostErrorType => ({
  type: FETCH_SINGLE_POST_ERROR,
  payload: errorMsg,
});

export const fetchSinglePostAsync = (id): any => {
  return dispatch =>
    axios
      .get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`)
      .then(({ data }) => data)
      .then(data =>
        dispatch(
          fetchSinglePostSuccess({
            id: data.id,
            title: data.title,
            body: data.body,
            comments: data.comments,
          }),
        ),
      );
};

// export const fetchSinglePostAsync = (): ThunkAction<
//   Promise<void>,
//   {},
//   {},
//   AnyAction
// > => {
//   return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
//     return new Promise<void>(resolve => {
//       dispatch(
//         fetchSinglePostSuccess({
//           id: 12,
//           title: "lll",
//           body: "xxx",
//           comments: [],
//         }),
//       );
//       // axios
//       //   .get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`)
//       //   .then(({ data }) => data)
//       //   .then(data =>
//       // dispatch(
//       //   fetchSinglePostSuccess({
//       //
