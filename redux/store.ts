import { MakeStore } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { PostsState } from "./allPosts/types";
import { SinglePostState } from "./singlePost/types";
import { NewPostState } from "./newPost/types";

export interface AppState {
  posts: PostsState;
  singlePost: SinglePostState;
  newPost: NewPostState;
}

import { Postsreducer } from "./allPosts/posts.reducer";
import { SinglePostReducer } from "./singlePost/reducer";
import { NewPostReducer } from "./newPost/reducer";

export const rootReducer = combineReducers<AppState>({
  posts: Postsreducer,
  singlePost: SinglePostReducer,
  newPost: NewPostReducer,
});

export type RootState = ReturnType<typeof Postsreducer>;

export const makeStore: MakeStore = (initialState = {}) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware),
  );
};
