import * as constants from "./constants";
import {action, ActionType} from "typesafe-actions";


export const clickDay = 
    (id: string, day: string) => 
        action(constants.CLICK_DAY, id, day);


export type Click_Action = ActionType<typeof clickDay>;