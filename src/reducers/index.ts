import { combineReducers } from "redux";
import { addMode } from "./addMode";
import { beginDate } from "./beginDate";
import { bookedRooms } from "./bookedRooms";
import { endDate } from "./endDate";
import { rooms } from "./roomsId";
import { week } from "./week";

export default combineReducers({
  addMode,
  beginDate,
  bookedRooms,
  endDate,
  rooms,
  week,
});
