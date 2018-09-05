import { connect } from "react-redux";
import TableRow from "../components/TableRow";
import { IRooms } from "../helpers/generateRooms";

export interface IRoomState {
  bookedRooms: IRooms;
  rooms: string[];
}

const mapStateToProps = ({ bookedRooms, rooms }: IRoomState): IRoomState => {
  return {
    bookedRooms,
    rooms
  };
};

export default connect(mapStateToProps)(TableRow);
