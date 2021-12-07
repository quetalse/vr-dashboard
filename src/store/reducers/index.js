import { combineReducers } from "redux";

import { group } from "./group/index";
import { person } from "./person/index";

export const rootReducer = combineReducers({
    group,
    person
})