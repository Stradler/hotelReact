import * as React from "react";
import "./TableRow.css";
import {Rooms} from "../reducers/bookedRooms";


//пропсами в TableRow отправлять набор для этой комнаты

const TableRow:React.SFC<Rooms> = ({bookedRooms}) => {
    return(
        <tr>
          <td>{bookedRooms.name}</td>
          <td>{bookedRooms.day}</td>
        </tr>
    );
}

export default TableRow;

