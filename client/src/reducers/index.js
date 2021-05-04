import { combineReducers } from "redux";

import collection from "./collection";
import auth from "./auth";

export const reducers = combineReducers({ collection, auth });
