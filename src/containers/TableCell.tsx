import {connect} from "react-redux";
import * as Redux from 'redux'
import {Click_Action, clickDay } from "../actions";
import TableCell from "../components/TableCell";


export interface IDispatchBookedProps {
  booked: boolean;
  handleDayClick: (id: string, dayIndex: string) => void;
  id: string;
  day: string;
}




const mapDispatchToProps = (dispatch: Redux.Dispatch<Click_Action>) => ({
  handleDayClick: (id:string, dayIndex:string) => dispatch(clickDay(id, dayIndex))
});


export default connect(null, mapDispatchToProps)(TableCell);