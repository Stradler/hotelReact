import { SubmitBooking_Action } from "../actions";
import * as constants from "../actions/constants";
import { generateRooms, IRooms } from "../helpers/generateRooms";

const bookedRoomsGenerate: IRooms = generateRooms(3);

export const roomsId: string[] = Object.keys(bookedRoomsGenerate);

export const bookedRooms = (
  state: IRooms = bookedRoomsGenerate,
  action: SubmitBooking_Action
): IRooms => {
  switch (action.type) {
    case constants.SUBMIT_BOOKING:
      const bookedWeekAlready = state[action.payload.id].bookedDays;
      const weekDaysArray = Object.keys(bookedWeekAlready);
      const includesBegin = weekDaysArray.indexOf(action.payload.beginDay);
      const includesEnd = weekDaysArray.indexOf(action.payload.endDay);
      let canUpdateState = true;
      const bookedDaysRange = weekDaysArray.slice(
        includesBegin,
        includesEnd + 1
      );
      const daysDict = {};
      if (includesBegin !== -1 && includesEnd !== -1) {
        bookedDaysRange.map(day => {
          if (bookedWeekAlready[day]) {
            canUpdateState = false;
            return;
          }
          daysDict[day] = true;
        });
      }

      if (canUpdateState) {
        return {
          ...state,
          [action.payload.id]: {
            ...state[action.payload.id],
            bookedDays: {
              ...bookedWeekAlready,
              ...daysDict
            }
          }
        };
      }
      return state;
  }
  return state;
};
