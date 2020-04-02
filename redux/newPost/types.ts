export interface NewPostState {
  isLoading: boolean;
  post: object | null;
  errorMsg: string;
}

export const ADD_NEW_POST_START = "ADD_NEW_POST_START";
export const ADD_NEW_POST_SUCCESS = "ADD_NEW_POST_SUCCESS";
export const ADD_NEW_POST_ERROR = "ADD_NEW_POST_ERROR";

export interface AddNewPostStart {
  type: typeof ADD_NEW_POST_START;
  payload: object;
}

export interface AddNewPostSuccess {
  type: typeof ADD_NEW_POST_SUCCESS;
}

export interface AddNewPostError {
  type: typeof ADD_NEW_POST_ERROR;
  payload: string;
}

export type addNewPostActionTypes =
  | AddNewPostStart
  | AddNewPostError
  | AddNewPostSuccess;
