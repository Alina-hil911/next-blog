import { MakeStore } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { PostsState } from "./actions/types";
import { SinglePostState } from "./singlePost/types";
import { NewPostState } from "./newPost/types";
// import { Action, AnyAction, combineReducers, Reducer } from 'redux';
// import { Actions } from "redux";
// interface FooAction extends Action<"FOO"> {
//   payload: string;
// }

export interface AppState {
  posts: PostsState;
  singlePost: SinglePostState;
  newPost: NewPostState;
}

import { Postsreducer } from "./actions/posts.reducer";
import { SinglePostReducer } from "./singlePost/reducer";
import { NewPostReducer } from "./newPost/reducer";

export const rootReducer = combineReducers<AppState>({
  posts: Postsreducer,
  singlePost: SinglePostReducer,
  newPost: NewPostReducer,
});

export type RootState = ReturnType<typeof Postsreducer>;

// export const makeStore: MakeStore = (initialState: any) => {
//   return createStore(
//     rootReducer,
//     initialState,
//     applyMiddleware(thunkMiddleware),
//   );
// };

export const makeStore: MakeStore = (initialState = {}) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware),
  );
};
