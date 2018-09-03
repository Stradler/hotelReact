import {combineReducers} from "redux";
import {week} from "./week";
import {bookedRooms} from "./bookedRooms";
import {rooms} from "./roomsId";

export default combineReducers({
    week,
    bookedRooms,
    rooms
});