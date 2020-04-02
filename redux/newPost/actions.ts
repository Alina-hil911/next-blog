import axios from "axios";

import {
  addNewPostActionTypes,
  ADD_NEW_POST_START,
  ADD_NEW_POST_SUCCESS,
  ADD_NEW_POST_ERROR,
} from "./types";

export const addNewPostStart = (post: object): addNewPostActionTypes => ({
  type: ADD_NEW_POST_START,
  payload: post,
});

export const addNewPostSuccess = (): addNewPostActionTypes => ({
  type: ADD_NEW_POST_SUCCESS,
});

export const addNewPostError = (errorMsg: string): addNewPostActionTypes => ({
  type: ADD_NEW_POST_ERROR,
  payload: errorMsg,
});

export const addNewPostStartAsync = (body: string, title: string): any => {
  return dispatch => {
    dispatch(addNewPostStart({ body, title }));
    axios({
      method: "post",
      url: "https://simple-blog-api.crew.red/posts",
      data: { title: title, body: body },
      headers: { "Content-Type": "application/json" },
    })
      .then(({ data }) => data)
      .then(() => dispatch(addNewPostSuccess()))
      .catch(e => dispatch(addNewPostError(e.message)));
  };
};
