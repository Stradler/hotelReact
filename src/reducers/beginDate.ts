// import { getType } from 'typesafe-actions';
import { Click_Action, ChangeBegin_Action, SubmitBooking_Action} from "../actions";
import * as constants from "../actions/constants";


export interface IDate {
    id: string;
    day: string;
}

export const beginDate = (state: IDate = {id: "", day: ""}, 
    action: Click_Action | ChangeBegin_Action | SubmitBooking_Action) => {
        
    switch(action.type){
        case constants.CLICK_DAY:
            return action.payload;
        
        case constants.CHANGE_BEGIN:
            return {...state, day: action.payload}
        
        // case constants.SUBMIT_BOOKING:
        //     return {id: "", day: ""};

        default:
            return state;
    }
    
}