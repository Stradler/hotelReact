import * as React from "react";
import "./TableRow.css";
import {RoomProp} from "../helpers/generateRooms";
import TableCell from "./TableCell";
// import TableTh from "./Table";


//пропсами в TableRow отправлять набор для этой комнаты

const TableRow:React.SFC<RoomProp> = ({name, bookedDays}) => {
    return(
        <tr>
            {bookedDays.map((day, index) => (
                <TableCell key={`${name}${index}`} {...day} />
            ))}
        </tr>
    );
}

export default TableRow;

