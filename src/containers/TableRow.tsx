import TableRow from "../components/TableRow";
import { connect } from "react-redux";
import { Room } from "../reducers/bookedRooms";


const mapStateToProps = ({bookedRoom}:Room) => {
    return {
        bookedRoom
    }
}

export default connect(mapStateToProps)(TableRow);