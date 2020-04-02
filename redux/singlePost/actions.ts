import axios from "axios";

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

export const fetchSinglePostStart = (): fetchSinglePostStartType => ({
  type: FETCH_SINGLE_POST_START,
});

export const fetchSinglePostError = (
  errorMsg: string,
): fetchSinglePostErrorType => ({
  type: FETCH_SINGLE_POST_ERROR,
  payload: errorMsg,
});

export const fetchSinglePostAsync = (id: number): any => {
  return dispatch => {
    dispatch(fetchSinglePostStart());
    return axios
      .get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`)
      .then(({ data }) => {
        return data;
      })
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
};
