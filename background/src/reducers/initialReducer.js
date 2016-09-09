"use strict";

import * as types from "../actions/actionTypes";
import {initialState} from "./initialState";

export default function initialReducer(state = initialState, action) {
    switch(action.type) {
        case types.ADD_TO_CLICKER:
            return state + 1;

        default:
            return state;
    }
}