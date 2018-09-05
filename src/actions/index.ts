import { action, ActionType } from "typesafe-actions";
import * as constants from "./constants";

export const clickDay = (id: string, day: string) =>
  action(constants.CLICK_DAY, { id, day });

export const changeBegin = (day: string) => action(constants.CHANGE_BEGIN, day);

export const changeEnd = (day: string) => action(constants.CHANGE_END, day);

export const submitBooking = (id: string, beginDay: string, endDay: string) =>
  action(constants.SUBMIT_BOOKING, { id, beginDay, endDay });

export type Click_Action = ActionType<typeof clickDay>;
export type ChangeBegin_Action = ActionType<typeof changeBegin>;
export type ChangeEnd_Action = ActionType<typeof changeEnd>;
export type SubmitBooking_Action = ActionType<typeof submitBooking>;

export type FormTypes =
  | ChangeBegin_Action
  | ChangeEnd_Action
  | SubmitBooking_Action;
