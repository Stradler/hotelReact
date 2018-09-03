import * as React from "react";
import "./TableCell.css";
// import {BookedDayProp} from "../helpers/generateRooms";
import classNames from "classnames";

export interface BookedComponent{
    booked: boolean;
}

const TableCell:React.SFC<BookedComponent> = ({booked}) => {
    return(
        <td className = {classNames({
            TableCell: true, 
            booked: booked ? true : false
        })}>

        </td>
    )
}

export default TableCell;