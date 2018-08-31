import * as React from "react";
import "./TableRow.css";
import {RoomState} from "../containers/TableRow";


//пропсами в TableRow отправлять набор для этой комнаты

const TableRow:React.SFC<RoomState> = ({bookedRoom}) => {
    return(
        <tr>
          <td>{bookedRoom.name}</td>
          <td>{bookedRoom.day}</td>
        </tr>
    );
}

export default TableRow;

