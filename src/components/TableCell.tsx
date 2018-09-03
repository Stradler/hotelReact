import * as React from "react";
import "./TableCell.css";
import {BookedDayProp} from "../helpers/generateRooms";

const TableCell:React.SFC<BookedDayProp> = ({booked, day}) => {
    return(
        <td className = {booked ? "booked" : ""}>

        </td>
    )
}

export default TableCell;