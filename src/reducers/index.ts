import {combineReducers} from "redux";
import {week} from "./week";
import {bookedRooms} from "./bookedRooms";

export default combineReducers({
    week,
    bookedRooms
});