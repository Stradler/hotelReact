// import { getType } from 'typesafe-actions';
import { Click_Action, ChangeEnd_Action, SubmitBooking_Action} from "../actions";
import * as constants from "../actions/constants";
import {IDate} from "./beginDate";

export const endDate = (state: IDate  = {id: "", day: ""}, 
    action: Click_Action | ChangeEnd_Action | SubmitBooking_Action) => {
    switch(action.type){
        case constants.CLICK_DAY:
            return action.payload;

        case constants.CHANGE_END:
            return {...state, day: action.payload}

        // case constants.SUBMIT_BOOKING:
        //     return {id: "", day: ""};

        default:
            return state;
    }
    
}