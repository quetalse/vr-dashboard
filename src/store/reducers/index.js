import { combineReducers } from "redux";

import { group } from "./group/index";
import { person } from "./person/index";
import { filter } from "./filter/index";

export const rootReducer = combineReducers({
    group,
    person,
    filter
})