import { Click_Action, SubmitBooking_Action } from "../actions";
import * as constants from "../actions/constants";

export const addMode = (
  state = false,
  action: Click_Action | SubmitBooking_Action
): boolean => {
  switch (action.type) {
    case constants.CLICK_DAY:
      return true;
    case constants.SUBMIT_BOOKING:
      return false;
    default:
      return state;
  }
};
