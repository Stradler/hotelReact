import * as constants from "./constants";
import {action, ActionType} from "typesafe-actions";


export const clickDay = 
    (id: string, dayIndex: number) => 
        action(constants.CLICK_DAY, id, dayIndex);


export type Click_Action = ActionType<typeof clickDay>;