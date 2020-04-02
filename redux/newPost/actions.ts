import axios from "axios";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

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

export const addNewPostStartAsync = (
  body: string,
  title: string,
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    return new Promise<void>(() => {
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
    });
  };
};
