import {Click_Action} from "../actions";
import * as constants from "../actions/constants";

export const addMode = (state = false, action:Click_Action): boolean =>{
    switch(action.type){
        case constants.CLICK_DAY:
            return true;
        default:
            return state;
    }
}