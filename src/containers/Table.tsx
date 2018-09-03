import {connect} from "react-redux";
import Table from "../components/Table";
import {Rooms} from "../helpers/generateRooms";

export interface TableProps {
    week: string[];
    rooms: string[];
    bookedRooms: Rooms;
}

export interface DispatchProps {
  handleDayClick: (id: string, dayIndex: string) => void;
}



const mapStateToProps = ({week, rooms, bookedRooms}: TableProps) => {
    return {
      week,
      rooms,
      bookedRooms
    }
  } 


export default connect(mapStateToProps)(Table);