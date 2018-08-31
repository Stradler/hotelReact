import {combineReducers} from "redux";
import {week} from "./week";
import {bookedRoom} from "./bookedRooms";

export default combineReducers({
    week,
    bookedRoom
});