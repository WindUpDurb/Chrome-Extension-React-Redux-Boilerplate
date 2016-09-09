"use strict";

import { combineReducers } from "redux";
import initialReducer from "./initialReducer";

const rootReducer = combineReducers({
    clickTotal: initialReducer
});

export default rootReducer;