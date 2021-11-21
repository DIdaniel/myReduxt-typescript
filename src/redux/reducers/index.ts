// src > redux > reducers > index.ts

import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";

const reducers = combineReducers({
  allReducers: repositoriesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
