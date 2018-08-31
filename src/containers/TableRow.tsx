import TableRow from "../components/TableRow";
import { connect } from "react-redux";
import { Room } from "../reducers/bookedRooms";

export interface RoomState {
    bookedRoom: Room   
}

const mapStateToProps = ({bookedRoom} : RoomState) => {
    return {
        bookedRoom
    }
}

export default connect(mapStateToProps)(TableRow);