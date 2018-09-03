import * as React from "react";
import "./TableCell.css";
// import {BookedDayProp} from "../helpers/generateRooms";
import classNames from "classnames";
import {DispatchBookedProps} from "../containers/TableCell";


const TableCell:React.SFC<DispatchBookedProps> = ({id, day, booked, handleDayClick}) => {
    return(
        <td className = {classNames({
            TableCell: true, 
            booked: booked ? true : false
        })} onClick={() => handleDayClick(id, day)}>

        </td>
    )
}

export default TableCell;