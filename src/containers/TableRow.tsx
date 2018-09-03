import TableRow from "../components/TableRow";
import { connect } from "react-redux";
import {Rooms} from "../helpers/generateRooms";

export interface RoomState {
    bookedRooms: Rooms;
    rooms: string[];
}

const mapStateToProps = ({bookedRooms, rooms}:RoomState):RoomState => {
    return {
        bookedRooms,
        rooms
    }
}

export default connect(mapStateToProps)(TableRow);