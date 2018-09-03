import {connect} from "react-redux";
import TableCell from "../components/TableCell";
import {clickDay, Click_Action} from "../actions";
import * as Redux from 'redux'


export interface DispatchBookedProps {
  booked: boolean;
  handleDayClick: (id: string, dayIndex: string) => void;
  id: string;
  day: string;
}




const mapDispatchToProps = (dispatch: Redux.Dispatch<Click_Action>) => ({
  handleDayClick: (id:string, dayIndex:string) => dispatch(clickDay(id, dayIndex))
});


export default connect(null, mapDispatchToProps)(TableCell);