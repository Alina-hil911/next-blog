import { MakeStore } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
// interface FooAction extends Action<"FOO"> {
//   payload: string;
// }

import { Postsreducer } from "./actions/posts.reducer";
const middlewares = [thunkMiddleware];
export type RootState = ReturnType<typeof Postsreducer>;

export const makeStore: MakeStore = (initialState: RootState) => {
  return createStore(
    Postsreducer,
    initialState,
    compose(applyMiddleware(...middlewares)),
  );
};
