import {connect} from "react-redux";
import Table from "../components/Table";
import {Rooms} from "../helpers/generateRooms";
import {clickDay, Click_Action} from "../actions";
import * as Redux from 'redux'

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

const mapDispatchToProps = (dispatch: Redux.Dispatch<Click_Action>):DispatchProps=> ({
  handleDayClick: (id:string, dayIndex:string) => dispatch(clickDay(id, dayIndex))
});


export default connect(mapStateToProps, mapDispatchToProps)(Table);