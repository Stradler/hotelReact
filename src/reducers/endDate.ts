// import { getType } from 'typesafe-actions';
import { Click_Action} from "../actions";
import * as constants from "../actions/constants";



export interface IDate {
    id?: string;
    day?: string;
}

export const endDate = (state: IDate  = {}, action: Click_Action) => {
    switch(action.type){
        case constants.CLICK_DAY:
            return action.payload;

        default:
            return state;
    }
    
}