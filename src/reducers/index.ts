import {combineReducers} from "redux";
import {week} from "./week";
import {bookedRooms} from "./bookedRooms";
import {rooms} from "./roomsId";
import {addMode} from "./addMode";
import {beginDate} from "./beginDate";
import {endDate} from "./endDate";

export default combineReducers({
    week,
    bookedRooms,
    rooms,
    addMode,
    beginDate,
    endDate
});