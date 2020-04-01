import { MakeStore } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { PostsState } from "./actions/types";
import { SinglePostState } from "./singlePost/types";
// import { Action, AnyAction, combineReducers, Reducer } from 'redux';
// import { Actions } from "redux";
// interface FooAction extends Action<"FOO"> {
//   payload: string;
// }

export interface AppState {
  posts: PostsState;
  singlePost: SinglePostState;
}

import { Postsreducer } from "./actions/posts.reducer";
import { SinglePostReducer } from "./singlePost/reducer";

export const rootReducer = combineReducers<AppState>({
  posts: Postsreducer,
  singlePost: SinglePostReducer,
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
